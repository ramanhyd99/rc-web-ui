# TypeScript Express App

Random-Capsule Web BFF written in Express and TypeScript. 

## Getting Started

1. Install dependencies: `npm install`
2. Run the app in development mode: `npm run start-dev`
3. Build the app for production: `npm run build`
4. Run the app in production mode: `npm run start-prod`

## Development Mode

In development mode, the app is run with Nodemon and `ts-node`. This allows the app to be automatically restarted when changes are made to the code.

To run the app in development mode, run the following command:

`npm run start-dev`

## Production Mode

In production mode, the app is built with TypeScript and run with `node`.

To build the app for production, run the following command:

`npm run build`

This will create a `dist` directory with the compiled JavaScript code.

To run the app in production mode, run the following command:

`npm run start-prod`


## Deployment to Production

TODO : Use Dockerfile and AWS ECS 

## Port

The app runs on port 3001 by default. This can be changed by modifying the `PORT` environment variable.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
