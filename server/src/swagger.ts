import { Application } from "express";
import swaggerJSDoc from "swagger-jsdoc";

import { serve, setup } from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Random-Capsule Web BFF API Docs",
      version: "3.0.0",
    },
    servers: [
      {
        url: "http://localhost:3001/api/",
        description: "Local",
      },
      {
        url: "https://random-capsule:3001/api/",
        description: "Production",
      },
    ],
    securityDefinitions: {
      jwt: {
        type: "apiKey",
        name: "Authorization",
        in: "header",
      },
    },
    security: [
      {
        jwt: [],
      },
    ],
  },
  apis: ["./src/routes/*.js"], // Path to the API routes folder
};

const swaggerSpec = swaggerJSDoc(options);

export default (app: Application) => {
  app.use("/docs/", serve, setup(swaggerSpec));
};
