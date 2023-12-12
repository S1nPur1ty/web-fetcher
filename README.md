# Autify Web Fetcher

This file is fully written in Typescript.

## Features

- Fetch raw data from a URL and save it to a file.
- Fetch metadata (number of links, images, last fetch timestamp) from a URL.
- Dockerized for easy setup and deployment.

## Prerequisites

- [Docker](https://www.docker.com/) installed on your machine.

## Getting Started

### 1. Clone the Repository
### 2. Build the Docker image

```bash
docker build -t fetch .
```

### 3. Run the Application
```bash
docker run -p 3000:3000 fetch https://www.example.com
```

### 3. Run the Application with the --metadata flag
```bash
docker run -p 3000:3000 fetch --metadata https://www.example.com
```
