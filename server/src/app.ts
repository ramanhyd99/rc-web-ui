import express from "express";
import { Application } from "express";
import swaggerApp from "./swagger";
import cors from "cors";
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app: Application = express();
app.use(
  cors({
    origin: ["http://localhost:3000", "https://random-capsule.com"],
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    //***IMPORTANT***
    //By setting credentials: true, the server will respond with the Access-Control-Allow-Credentials header set to true,
    //which is required when making cross-origin requests with credentials.
  })
);

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb', extended: true}));

import authMiddleware from "./middleware/authMiddleware";
app.use(authMiddleware);

// Define a router object for all routes
const router = express.Router();

import apiRouter from "./routes/apiRoutes";
import paymentRouter from "./routes/payment";

router.use("/", apiRouter);
router.use("/payment", paymentRouter);

// Use the router object with a common prefix for all routes
app.use("/api", router);

// Serve the Swagger documentation
swaggerApp(app);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on port ${port}`));
