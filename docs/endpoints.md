# ThunderCMS Endpoints

ThunderCMS operates almost completely on web interface endpoints. This document details the default ones, and how to create your own.

# Default Endpoints

## Default GET endpoints

These endpoint files are stored in `endpoints/get/`. Unless stated otherwise, the data files for the endpoints are their names with the js extension.

### `/`

Stored in `index.js`. Returns a basic landing page for the CMS's base server.

### `/test`

Another testing endpoint.

### `/warn`

If you GET this endpoint, a warning should be logged to console.

### `/error`

If you GET this endpoint, an error should be logged to console.

## Default POST endpoints

These endpoint files are stored in `endpoints/post/`. Unless stated otherwise, the data files for the endpoints are their names with the js extension.

### `/test`

A test POST endpoint.

# Adding your own endpoint

TBD
