const ENV = process.env.NODE_ENV;

const isDev = ENV === "dev";
const isProd = ENV === "production";

export const sessionTotalCost = 329;

// returns booking session expiry time in seconds. Ex: 5 mins = 5 * 60 seconds
export const getBookingExpiryTime = () => {
  if (isDev) {
    return 15 * 60;
  } else if (isProd) {
    return 10 * 60;
  } else return 30 * 60;
};

const API_BASE_URL = isDev
  ? "localhost:3001/api"
  : "web.random-capsule.com/api";

const DEV_CONFIG = {
  port: 3001,
  env: "dev",
  WEB_BFF: "http://localhost:3001/api",
};

const PROD_CONFIG = {
  port: 3001,
  env: "production",
  WEB_BFF: "http://random-capsule.com/api",
};

let CONFIG;

console.log("USING", process.env.STAGE || "CONFIG_DEV", "Configuration");
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

export default CONFIG;
