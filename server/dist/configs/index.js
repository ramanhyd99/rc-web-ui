"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG = void 0;
const ENV = process.env.NODE_ENV;
const DEV_CONFIG = {
    port: 5000,
    env: "dev",
    jwt_token_name: "rc_token",
    microservices: [
        {
            name: "auth",
            base_url: "http://localhost:8000/api",
        },
    ],
};
const PROD_CONFIG = {
    port: 5000,
    env: "production",
    jwt_token_name: "rc_token",
    microservices: [
        {
            name: "auth",
            base_url: "https://auth.random-capsule.com/api",
        },
    ],
};
let CONFIG;
exports.CONFIG = CONFIG;
console.log("USING", process.env.STAGE || "CONFIG_DEV", "Configuration");
switch (process.env.NODE_ENV) {
    case "production":
        exports.CONFIG = CONFIG = PROD_CONFIG;
        break;
    case "development":
        exports.CONFIG = CONFIG = DEV_CONFIG;
        break;
    default:
        exports.CONFIG = CONFIG = DEV_CONFIG;
}
//# sourceMappingURL=index.js.map