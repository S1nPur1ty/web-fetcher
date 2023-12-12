#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var cross_fetch_1 = require("cross-fetch");
globalThis.fetch = cross_fetch_1.default;
var fetchURLData = function (url) { return __awaiter(void 0, void 0, void 0, function () {
    var response, data, fileName, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, (0, cross_fetch_1.default)(url)];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.text()];
            case 2:
                data = _a.sent();
                fileName = path.join(process.cwd(), "sites/".concat(new URL(url).hostname, ".html"));
                fs.writeFileSync(fileName, data);
                console.log("Saved data: ".concat(fileName));
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error('Error', url, error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var fetchMetaData = function (url) { return __awaiter(void 0, void 0, void 0, function () {
    var response, data, links, images, lastFetch, error_2;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, , 4]);
                return [4 /*yield*/, (0, cross_fetch_1.default)(url)];
            case 1:
                response = _c.sent();
                return [4 /*yield*/, response.text()];
            case 2:
                data = _c.sent();
                links = ((_a = data.match(/<a/g)) === null || _a === void 0 ? void 0 : _a.length) || 0;
                images = ((_b = data.match(/<img/g)) === null || _b === void 0 ? void 0 : _b.length) || 0;
                lastFetch = new Date().toUTCString();
                console.log("site: ".concat(url, "\nnum_links: ").concat(links, "\nimages: ").concat(images, "\nlast_fetch: ").concat(lastFetch, "\n"));
                return [3 /*break*/, 4];
            case 3:
                error_2 = _c.sent();
                console.error('Error', url, error_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var init = function () { return __awaiter(void 0, void 0, void 0, function () {
    var args, isMetaData, i, i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                args = process.argv.slice(2);
                if (args.length === 0) {
                    console.error('Please provide at least one URL');
                    return [2 /*return*/];
                }
                isMetaData = process.argv.includes('--metadata');
                if (!isMetaData) return [3 /*break*/, 5];
                i = 1;
                _a.label = 1;
            case 1:
                if (!(i < args.length)) return [3 /*break*/, 4];
                return [4 /*yield*/, fetchMetaData(args[i])];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                i++;
                return [3 /*break*/, 1];
            case 4: return [3 /*break*/, 9];
            case 5:
                i = 0;
                _a.label = 6;
            case 6:
                if (!(i < args.length)) return [3 /*break*/, 9];
                return [4 /*yield*/, fetchURLData(args[i])];
            case 7:
                _a.sent();
                _a.label = 8;
            case 8:
                i++;
                return [3 /*break*/, 6];
            case 9: return [2 /*return*/];
        }
    });
}); };
init();
