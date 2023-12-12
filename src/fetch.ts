#!/usr/bin/env node

import * as fs from 'fs';
import * as path from 'path';
import fetch from 'cross-fetch';
globalThis.fetch = fetch


const fetchURLData = async (url: string): Promise<void> => {
    try {
        const response = await fetch(url);
        const data = await response.text();
        
        const fileName = path.join( 
            process.cwd(), 
            `sites/${new URL(url).hostname}.html` 
        );
        
        fs.writeFileSync(fileName, data);
        console.log(`Saved data: ${fileName}`);
    } catch (error) {
        console.error('Error', url, error);
    }
}

const fetchMetaData = async (url: string): Promise<void> => {
    try {
        const response = await fetch(url);
        const data = await response.text();

        const links = data.match(/<a/g)?.length || 0;
        const images = data.match(/<img/g)?.length || 0;
        const lastFetch = new Date().toUTCString();

        console.log(
            `site: ${url}\nnum_links: ${links}\nimages: ${images}\nlast_fetch: ${lastFetch}\n`
        );
    } catch (error) {
        console.error('Error', url, error);
    }
}

const init = async (): Promise<void> => {
    const args = process.argv.slice(2);

    if (args.length === 0) {
        console.error('Please provide at least one URL')
        return;
    }

    const isMetaData = process.argv.includes('--metadata')
    
    if ( isMetaData ) {
        for (let i = 1; i < args.length; i++) await fetchMetaData(args[i])
    } else {
        for (let i = 0; i < args.length; i++) await fetchURLData(args[i])
    }
}

init();