"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /:
 *   get:
 *     description: Returns the server status
 *     responses:
 *       200:
 *         description: OK
 */
router.get("/", function (req, res, next) {
    res.json({ status: "Healthy!" });
});
exports.default = router;
//# sourceMappingURL=healthCheck.js.map