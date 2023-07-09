"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = require("swagger-ui-express");
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
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
exports.default = (app) => {
    app.use("/docs/", swagger_ui_express_1.serve, (0, swagger_ui_express_1.setup)(swaggerSpec));
};
//# sourceMappingURL=swagger.js.map