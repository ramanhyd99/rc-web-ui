"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const configs_1 = require("../configs");
const axios_1 = __importDefault(require("axios"));
const cookie_1 = __importDefault(require("cookie"));
const router = (0, express_1.Router)();
/**
 * @swagger
 * /google:
 *   POST:
 *     description: Tries to login the user using Google OAuth. Sets the JWT to the cookie if successful.
 *     responses:
 *       200:
 *         description: OK
 */
router.post("/google", async (req, res, next) => {
    try {
        const authMicroservice = configs_1.CONFIG.microservices.find((microservice) => microservice.name === "auth");
        if (!authMicroservice) {
            throw new Error("Auth microservice configuration not found.");
        }
        let loginResponse = { success: false };
        //todo identify unique browser user combination
        // const userAgent = req.headers["user-agent"];
        // const parser = new UAParser(userAgent);
        // const result = parser.getResult();
        // console.log(result); // prints the name of the browser
        let authz = req.headers.authorization;
        authz = authz === null || authz === void 0 ? void 0 : authz.replace(/^Bearer\s+/i, '');
        const url = `${authMicroservice.base_url}/users/login/oauth/google`;
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        const data = {
            oauth_token: authz
        };
        const response = await axios_1.default.post(url, data, { headers });
        if (response.status === 200) {
            loginResponse = {
                success: true,
                message: "Logged in successfully.",
                userInfo: response.data["userInfo"],
            };
            const rc_token = response.data[configs_1.CONFIG.jwt_token_name];
            res.setHeader("Set-Cookie", cookie_1.default.serialize(configs_1.CONFIG.jwt_token_name, rc_token, {
                httpOnly: true,
                secure: configs_1.CONFIG.env == "production",
                maxAge: 7200,
                path: "/",
            }));
            // res.setHeader("Authorization", `Beaer ${rc_token}`);
            res.status(200).json(loginResponse);
        }
        else {
            loginResponse = {
                success: false,
                message: "Could not log you in. Please try again.",
            };
            res.status(response.status).json(loginResponse);
        }
    }
    catch (error) {
        console.error(error);
        const loginResponse = {
            success: false,
            message: "Could not log you in. Please try again.",
        };
        res.status(500).json(loginResponse);
    }
});
exports.default = router;
//# sourceMappingURL=login.js.map