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

const DEV_CONFIG = {
  port: 3001,
  env: "dev",
  WEB_BFF: "http://localhost:3001/api",
  // GOOGLE_CLIENT_ID: "362955312743-sj3q1dbatmas7vm87dip8ivp1gpe57dt.apps.googleusercontent.com"
  GOOGLE_CLIENT_ID: "531605426924-13nn5jgadf0j8qqmpk7s1k40doc0n8a5.apps.googleusercontent.com"
};

const PROD_CONFIG = {
  port: 3001,
  env: "production",
  WEB_BFF: "https://www.randomcapsule.in/api",
  GOOGLE_CLIENT_ID: "531605426924-918oi9senhbvji1fqs4hs5nrkivrm08b.apps.googleusercontent.com"
};


let CONFIG;

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
