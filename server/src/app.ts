import express from "express";
import { Application } from "express";
import swaggerApp from "./swagger";
import cors from "cors";
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
// import dns from "node:dns";
// dns.setDefaultResultOrder("ipv4first");

const app: Application = express();
app.use(
  cors({
    origin: ["http://localhost:3000","http://localhost:8084", "https://randomcapsule.in"],
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

const multer = require("multer");
const upload = multer({ dest: "uploads2/" });

app.post("/upload2", upload.single("files"), function (req: any, res, next) {
  console.log(req.body, req.file);
});

// Use the router object with a common prefix for all routes
app.use("/api", router);

// Serve the Swagger documentation
swaggerApp(app);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on port ${port}`));
