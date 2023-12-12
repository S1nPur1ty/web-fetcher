FROM node:14

# Working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install node modules
RUN npm install

# Build the application
RUN npm build

# Copy files to the container
COPY . .

# PORT
EXPOSE 3000

# Run the application
COPY entrypoint.sh /
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]