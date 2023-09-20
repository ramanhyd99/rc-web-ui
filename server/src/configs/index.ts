const ENV = process.env.NODE_ENV;

export interface MicroserviceConfig {
  name: string;
  base_url: string;
}

export type APPConfig = {
  [key: string]: any;
  jwt_token_name: string;
  port: number;
  microservices: MicroserviceConfig[];
};

const DEV_CONFIG: APPConfig = {
  port: 5000,
  jwt_token_name: "rc_token",
  microservices: [
    {
      name: "backend",
      base_url: process.env.BACKEND_URL || "http://localhost:8046/api",
    },
  ],
};

const PROD_CONFIG: APPConfig = {
  port: 5000,
  jwt_token_name: "rc_token",
  microservices: [
    {
      name: "backend",
      base_url: process.env.BACKEND_URL || "http://localhost:8046/api",
    },
  ],
};

let CONFIG: APPConfig;

console.log("NODE_ENV", process.env.NODE_ENV);
console.log("BACKEND_URL", process.env.BACKEND_URL);
console.log("USING", process.env.NODE_ENV || "CONFIG_DEV", "Configuration");
switch (process.env.NODE_ENV) {
  case "production":
    CONFIG = PROD_CONFIG;
    break;
  case "dev":
    CONFIG = DEV_CONFIG;
    break;
  default:
    CONFIG = DEV_CONFIG;
}

export { CONFIG };
