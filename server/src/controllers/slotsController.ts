import axios, { AxiosError } from "axios";
import { Response } from "express";
import { CONFIG, MicroserviceConfig } from "../configs";
import {
  AuthorizedRequest,
  CustomizedResponse,
  MulterRequest,
} from "../schemas";

const authMicroservice = CONFIG.microservices.find(
  (microservice: MicroserviceConfig) => microservice.name === "backend"
);

if (!authMicroservice) {
  throw new Error("Backend microservice configuration not found.");
}

export const getSlotsForDate = async (
  req: AuthorizedRequest,
  res: Response<CustomizedResponse>
) => {
  let customizedResponse: CustomizedResponse = { data: null };
  console.info("getSlotsForDate - userId: " + req.userId);

  try {
    const authToken: string = req.headers.authorization as string;

    const response = await axios.get(`${authMicroservice.base_url}/slots/`, {
      params: {
        date_str: req.query.date_str,
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: authToken,
      },
      timeout: 10000,
    });

    customizedResponse = {
      data: response.data,
    };

    res.status(response.status).json(customizedResponse);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        console.error("Status code:", axiosError.response.status);
        // console.error("Status code:", axiosError.response);
        customizedResponse = {
          data: null,
          errorMessage: "Could not get day types. Please try again.",
          errorDetails: error,
        };
        return res.status(axiosError.response.status).json(customizedResponse);
      }
    }
    console.error("getDayTypes :", error);
    customizedResponse = {
      data: null,
      errorMessage: "Could not get day types. Please try again.",
      errorDetails: error,
    };
    res.status(500).json(customizedResponse);
  }
};
