"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import { ResponseMsg } from "../s/common";
const cookie_1 = __importDefault(require("cookie"));
const configs_1 = require("../configs");
const router = (0, express_1.Router)();
router.post("/", async (req, res, next) => {
    //todo logout logic to remove jwt from redis
    res.setHeader("Set-Cookie", cookie_1.default.serialize(configs_1.CONFIG.jwt_token_name, "", {
        httpOnly: true,
        secure: configs_1.CONFIG.env == "production",
        maxAge: -1,
        path: "/",
    }));
    const responseMsg = {
        success: true,
        message: "Logged out!!",
    };
    res.status(200);
});
exports.default = router;
//# sourceMappingURL=logout.js.map