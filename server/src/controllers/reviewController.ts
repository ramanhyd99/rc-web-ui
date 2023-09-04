import axios, { AxiosError } from "axios";
import { Response } from "express";
import FormData from "form-data";
import { CONFIG, MicroserviceConfig } from "../configs";
import { CustomizedResponse } from "../schemas";
const { Readable } = require("stream");

const authMicroservice = CONFIG.microservices.find(
  (microservice: MicroserviceConfig) => microservice.name === "backend"
);

if (!authMicroservice) {
  throw new Error("Backend microservice configuration not found.");
}

export const uploadReview = async (
  req: any,
  res: Response<CustomizedResponse>
) => {
  let customizedResponse: CustomizedResponse = {
    data: null,
    errorMessage: "Sorry, could not upload the review. Please try again.",
  };

  try {
    console.info("uploadReview for email: " + req.body.email);

    const bodyFormData = new FormData();
    bodyFormData.append("email", req.body.email);
    bodyFormData.append("age", req.body.age);
    bodyFormData.append("gender", req.body.gender);
    bodyFormData.append("city", req.body.city);
    bodyFormData.append("rating", req.body.rating || 4);
    bodyFormData.append("feedback", req.body.feedback);
    bodyFormData.append("improve", req.body.improve || "");
    bodyFormData.append("verified", req.body.verified);

    if (!req.body.verified || req.body.verified != "true") {
      return res
        .status(400)
        .json({ data: null, errorMessage: "Not human verified!" });
    }

    const response = await axios.post(
      `${authMicroservice.base_url}/reviews/`,
      {
        email: req.body.email,
        age: req.body.age,
        gender: req.body.gender || "",
        city: req.body.city || "",
        rating: req.body.rating || 4,
        feedback: req.body.feedback,
        improve: req.body.improve || "",
        verified: req.body.verified,
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        timeout: 10000,
      }
    );

    customizedResponse = {
      data: null,
      infoMessage: response.data.msg,
    };

    res.status(response.status).json(customizedResponse);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ detail: string }>;
      if (axiosError.response) {
        if (axiosError.response.status == 422) {
          return res.status(400).json({
            errorMessage: "Please use email format: user@example.com",
            data: null,
          });
        }

        customizedResponse = {
          data: null,
          errorMessage: axiosError.response.data?.detail
            ? axiosError.response.data?.detail
            : "Could not upload the review.",
          errorDetails: error,
        };
        return res.status(axiosError.response.status).json(customizedResponse);
      }
    }
    console.error("uploadReview :", error);
    customizedResponse = {
      data: null,
      errorMessage: "Could not upload the review.",
      errorDetails: error,
    };
    return res.status(500).json(customizedResponse);
  }
};
