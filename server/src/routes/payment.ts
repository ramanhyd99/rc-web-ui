require("dotenv").config();
const Razorpay = require("razorpay");
const crypto = require("crypto");
import { Router } from "express";

const router = Router();

router.post("/orders", async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const { amount, userId } = req.body;

    const options = {
      amount: 100, // amount in smallest currency unit (100 rupees = 100 * 100 paise)
      currency: "INR",
      receipt: "receipt_order_74394",
    };

    const order = await instance.orders.create(options);

    if (!order) return res.status(500).send("Some error occured");

    res.json(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/success", async (req, res) => {
  try {
    // getting the details back from our font-end
    const {
      orderCreationId,
      razorpayPaymentId,
      razorpayOrderId,
      razorpaySignature,
    } = req.body;

    console.log(razorpayPaymentId);

    // Verify Signature https://razorpay.com/docs/payments/third-party-validation/

    const order_id = orderCreationId;
    const razorpay_payment_id = razorpayPaymentId;
    const secret = process.env.RAZORPAY_SECRET;

    const data = order_id + "|" + razorpay_payment_id;

    const generated_signature = crypto
      .createHmac("sha256", secret)
      .update(data)
      .digest("hex");

    console.log(generated_signature);
    console.log(razorpaySignature);

    res.json({
      msg: "success",
      orderId: razorpayOrderId,
      paymentId: razorpayPaymentId,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

export default router;
