"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_1 = __importDefault(require("./swagger"));
const cors_1 = __importDefault(require("cors"));
const bodyParser = require('body-parser');
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: ["http://localhost:3000", "https://random-capsule.com"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    //***IMPORTANT***
    //By setting credentials: true, the server will respond with the Access-Control-Allow-Credentials header set to true,
    //which is required when making cross-origin requests with credentials.
}));
app.use(express_1.default.json());
// Define a router object for all routes
const router = express_1.default.Router();
const healthCheck_1 = __importDefault(require("./routes/healthCheck"));
const login_1 = __importDefault(require("./routes/login"));
const logout_1 = __importDefault(require("./routes/logout"));
const payment_1 = __importDefault(require("./routes/payment"));
router.use("/healthcheck", healthCheck_1.default);
router.use("/login", login_1.default);
router.use("/logout", logout_1.default);
router.use("/payment", payment_1.default);
// Use the router object with a common prefix for all routes
app.use("/api", router);
// Serve the Swagger documentation
(0, swagger_1.default)(app);
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on port ${port}`));
//# sourceMappingURL=app.js.map