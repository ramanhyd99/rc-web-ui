const ENV = process.env.NODE_ENV;

export interface MicroserviceConfig {
  name: string;
  base_url: string;
}

export type APPConfig = {
  [key: string]: any;
  env: string;
  jwt_token_name: string
  port: number;
  microservices: MicroserviceConfig[];
};

const DEV_CONFIG: APPConfig = {
  port: 5000,
  env: "dev",
  jwt_token_name: "rc_token",
  microservices: [
    {
      name: "backend",
      base_url: "http://localhost:8046/api",
    },
  ],
};

const PROD_CONFIG: APPConfig = {
  port: 5000,
  env: "production",
  jwt_token_name: "rc_token",
  microservices: [
    {
      name: "backend",
      base_url: "https://auth.random-capsule.com/api",
    },
  ],
};

let CONFIG: APPConfig;

console.log("USING", process.env.STAGE || "CONFIG_DEV", "Configuration");
switch (process.env.NODE_ENV) {
  case "production":
    CONFIG = PROD_CONFIG;
    break;
  case "development":
    CONFIG = DEV_CONFIG;
    break;
  default:
    CONFIG = DEV_CONFIG;
}

export { CONFIG };
