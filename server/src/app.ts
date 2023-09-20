import cors from "cors";
import express, { Application } from "express";
import swaggerApp from "./swagger";
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");

// import dns from "node:dns";
// dns.setDefaultResultOrder("ipv4first");

require("dotenv").config();

const app: Application = express();
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:8084",
      "https://randomcapsule.in",
    ],
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-By"],
    credentials: true,
    //***IMPORTANT***
    //By setting credentials: true, the server will respond with the Access-Control-Allow-Credentials header set to true,
    //which is required when making cross-origin requests with credentials.
  })
);

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

import authMiddleware from "./middleware/authMiddleware";
import csrfMiddleware from "./middleware/csrfMiddleware";
app.use(csrfMiddleware);
app.use(authMiddleware);

// Define a router object for all routes
const router = express.Router();

import apiRouter from "./routes/apiRoutes";
import paymentRouter from "./routes/payment";

router.use("/", apiRouter);
router.use("/payment", paymentRouter);

// rate limiting
const defaultLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 60, // Max requests per minute
  message: "Too many requests from this IP, please try again later.",
});
const strictLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 30, // Max requests per minute
  message: "Too many requests from this IP, please try again later.",
});
const veryStrictLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // Max requests per minute
  message: "Too many requests from this IP, please try again later.",
});

app.use("/api/login", veryStrictLimiter);
app.use("/api/reviews", veryStrictLimiter);
app.use("/api/slots", strictLimiter);
app.use("/api/bookings", strictLimiter);
app.use("/api", defaultLimiter); 


// Use the router object with a common prefix for all routes
app.use("/api", router);

// Serve the Swagger documentation
swaggerApp(app);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on port ${port}`));
