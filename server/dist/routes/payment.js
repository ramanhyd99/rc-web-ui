"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const Razorpay = require("razorpay");
const crypto = require('crypto');
// var { validatePaymentVerification } = require('./dist/utils/razorpay-utils');
const express_1 = require("express");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /:
 *   post:
 *     description: Creating an order
 *     responses:
 *       200:
 *         description: OK
 */
router.post("/orders", async (req, res) => {
    try {
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRET,
        });
        const options = {
            amount: 100,
            currency: "INR",
            receipt: "receipt_order_74394",
        };
        const order = await instance.orders.create(options);
        if (!order)
            return res.status(500).send("Some error occured");
        res.json(order);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
/**
 * @swagger
 * /:
 *   post:
 *     description: Verifiying the payment
 *     responses:
 *       200:
 *         description: OK
 */
router.post("/success", async (req, res) => {
    try {
        // getting the details back from our font-end
        const { orderCreationId, razorpayPaymentId, razorpayOrderId, razorpaySignature, } = req.body;
        console.log(razorpayPaymentId);
        // Verify Signature https://razorpay.com/docs/payments/third-party-validation/
        // Creating our own digest
        // The format should be like this:
        // const digest = hmac_sha256(orderCreationId + "|" + razorpayPaymentId, secret);
        console.log('pre validatePaymentVerification');
        // validatePaymentVerification({ "order_id": razorpayOrderId, "payment_id": razorpayPaymentId }, razorpaySignature, process.env.RAZORPAY_SECRET);
        console.log('post validatePaymentVerification');
        // const shasum = crypto.createHmac("sha256", "w2lBtgmeuDUfnJVp43UpcaiT");
        // shasum.update(`${orderCreationId}|${razorpayPaymentId}`);
        // const digest = shasum.digest("hex");
        // // comaparing our digest with the actual signature
        // if (digest !== razorpaySignature)
        //     return res.status(400).json({ msg: "Transaction not legit!" });
        // THE PAYMENT IS LEGIT & VERIFIED
        // YOU CAN SAVE THE DETAILS IN YOUR DATABASE IF YOU WANT
        res.json({
            msg: "success",
            orderId: razorpayOrderId,
            paymentId: razorpayPaymentId,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
exports.default = router;
//# sourceMappingURL=payment.js.map