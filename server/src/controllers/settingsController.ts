import axios, { AxiosError } from "axios";
import { Response } from "express";
import { CONFIG, MicroserviceConfig } from "../configs";
import { AuthorizedRequest, CustomizedResponse } from "../schemas";

const authMicroservice = CONFIG.microservices.find(
  (microservice: MicroserviceConfig) => microservice.name === "backend"
);

if (!authMicroservice) {
  throw new Error("Backend microservice configuration not found.");
}

export const updateDayTypes = async (
  req: AuthorizedRequest,
  res: Response<CustomizedResponse>
) => {
  let customizedResponse: CustomizedResponse = { data: null };
  console.info("updateDayTypes - userId: " + req.userId);
  console.debug(req.body);

  try {
    const authToken: string = req.headers.authorization as string;

    const response = await axios.patch(
      `${authMicroservice.base_url}/settings/update_day_types`,
      req.body,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: authToken,
        },
        timeout: 10000,
      }
    );

    customizedResponse = {
      data: null,
      infoMessage: "Saved!",
    };

    if(response.status >= 400)
    throw new Error("Something went wrong");
    
    res.status(response.status).json(customizedResponse);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        console.error("Status code:", axiosError.response.status);
        // console.error("Status code:", axiosError.response);
        customizedResponse = {
          data: null,
          errorMessage: "Could not update day types. Please try again.",
          errorDetails: error,
        };
        return res.status(axiosError.response.status).json(customizedResponse);
      }
    }
    console.error("updateDayTypes :", error);
    customizedResponse = {
      data: null,
      errorMessage: "Could not update day types. Please try again.",
      errorDetails: error,
    };
    res.status(500).json(customizedResponse);
  }
};

export const getDayTypes = async (
  req: AuthorizedRequest,
  res: Response<CustomizedResponse>
) => {
  let customizedResponse: CustomizedResponse = { data: null };
  console.info("getDayTypes - userId: " + req.userId);

  try {
    const authToken: string = req.headers.authorization as string;

    const response = await axios.get(
      `${authMicroservice.base_url}/settings/get_day_types`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: authToken,
        },
        timeout: 10000,
      }
    );

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
