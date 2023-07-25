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
    console.error("getSlotsForDate :", error);
    customizedResponse = {
      data: null,
      errorMessage: "Could not get slots. Please try again.",
      errorDetails: error,
    };
    res.status(500).json(customizedResponse);
  }
};

export const lockSlotForDate = async (
  req: AuthorizedRequest,
  res: Response<CustomizedResponse>
) => {
  let customizedResponse: CustomizedResponse = { data: null };
  console.info("lockSlotForDate - userId: " + req.userId);

  try {
    const authToken: string = req.headers.authorization as string;

    console.log(req.query);

    const response = await axios.post(
      `${authMicroservice.base_url}/slots/lock/${req.query.slot_id}`,
      {},
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

        customizedResponse = {
          data: null,
          errorMessage: "Sorry, that slot is currently unavailable.",
          errorDetails: error,
        };
        return res.status(axiosError.response.status).json(customizedResponse);
      }
    }
    console.error("lockSlotForDate: ", error);
    customizedResponse = {
      data: null,
      errorMessage: "Sorry, that slot is currently unavailable.",
      errorDetails: error,
    };
    res.status(500).json(customizedResponse);
  }
};

export const deleteSlotBySlotId = async (
  req: AuthorizedRequest,
  res: Response<CustomizedResponse>
) => {
  let customizedResponse: CustomizedResponse = { data: null };
  console.info("deleteSlotBySlotId - userId: " + req.userId);

  try {
    const authToken: string = req.headers.authorization as string;

    console.log(req.query);

    const response = await axios.delete(
      `${authMicroservice.base_url}/slots/${req.query.slotId}`,
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
      infoMessage: response.data.msg,
      data: response.data,
    };

    res.status(response.status).json(customizedResponse);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ detail: string }>;
      if (axiosError.response) {
        console.error("Status code:", axiosError.response.status);

        customizedResponse = {
          data: null,
          errorMessage: axiosError.response.data?.detail
            ? axiosError.response.data?.detail
            : "Sorry, could not delete that slot.",
          errorDetails: error,
        };
        return res.status(axiosError.response.status).json(customizedResponse);
      }
    }
    console.error("deleteSlotBySlotId: ", error);
    customizedResponse = {
      data: null,
      errorMessage: "Sorry, could not delete that slot.",
      errorDetails: error,
    };
    res.status(500).json(customizedResponse);
  }
};

export const generateSlotsForDate = async (
  req: AuthorizedRequest,
  res: Response<CustomizedResponse>
) => {
  let customizedResponse: CustomizedResponse = { data: null };
  console.info("generateSlotsForDate - userId: " + req.userId);

  try {
    const authToken: string = req.headers.authorization as string;

    console.log(req.query);

    const response = await axios.post(
      `${authMicroservice.base_url}/slots/create`,
      {
        date_str: req.query.date_str,
        start_str: req.query.start_str,
        end_str: req.query.end_str,
      },
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
      infoMessage: response.data.msg,
      data: response.data,
    };

    res.status(response.status).json(customizedResponse);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ detail: string }>;
      if (axiosError.response) {
        console.error("Status code:", axiosError.response.status);

        customizedResponse = {
          data: null,
          errorMessage: axiosError.response.data?.detail
            ? axiosError.response.data?.detail
            : "Sorry, could not generate slots.",
          errorDetails: error,
        };
        return res.status(axiosError.response.status).json(customizedResponse);
      }
    }
    console.error("generateSlotsForDate: ", error);
    customizedResponse = {
      data: null,
      errorMessage: "Sorry, could not generate slots.",
      errorDetails: error,
    };
    res.status(500).json(customizedResponse);
  }
};
