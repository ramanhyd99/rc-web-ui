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

export const bookSession = async (
  req: any,
  res: Response<CustomizedResponse>
) => {
  let customizedResponse: CustomizedResponse = {
    data: null,
    errorMessage: "Sorry, could not perform that action. Please try again.",
  };

  try {
    console.info("checkout for user_id: " + req.userId);

    if (!req.body.payment_mode) {
      return res
        .status(400)
        .json({ data: null, errorMessage: "Invalid payment method" });
    }

    // update below for more payment methods in the future
    if (req.body.payment_mode != "pay_later") {
      return res
        .status(400)
        .json({ data: null, errorMessage: "Unsupported payment method." });
    }

    console.log(req.body);

    // handle pay_later
    const response = await axios.post(
      `${authMicroservice.base_url}/booking/pay_later`,

      req.body,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        timeout: 10000,
      }
    );

    customizedResponse = {
      data: response.data,
      infoMessage: response.data.msg,
    };

    res.status(response.status).json(customizedResponse);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ detail: string }>;
      if (axiosError.response) {
        if (axiosError.response.status == 422) {
          return res.status(400).json({
            errorMessage: "1 or more field values are invalid.",
            data: null,
          });
        }

        customizedResponse = {
          data: null,
          errorMessage: axiosError.response.data?.detail
            ? axiosError.response.data?.detail
            : "Could not perform the booking.",
          errorDetails: error,
        };
        return res.status(axiosError.response.status).json(customizedResponse);
      }
    }
    customizedResponse = {
      data: null,
      errorMessage: "Could not perform the booking.",
      errorDetails: error,
    };
    return res.status(500).json(customizedResponse);
  }
};

export const getBookingsForUser = async (
  req: any,
  res: Response<CustomizedResponse>
) => {
  let customizedResponse: CustomizedResponse = {
    data: null,
    errorMessage: "Sorry, could not perform that action. Please try again.",
  };

  try {
    console.info("Getting sessions for user_id: " + req.userId);
    console.info("Getting sessions for user_id: " + req.query.userId);
    const authToken: string = req.headers.authorization as string;

    const user_id_val = req.query.userId ? req.query.userId : req.userId;

    const response = await axios.get(
      `${authMicroservice.base_url}/booking/${user_id_val}`,

      {
        params: {
          search: req.query.search,
        },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `${authToken}`,
        },
        timeout: 10000,
      }
    );

    customizedResponse = {
      data: response.data,
      infoMessage: response.data.msg,
    };

    res.status(response.status).json(customizedResponse);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ detail: string }>;
      if (axiosError.response) {
        customizedResponse = {
          data: null,
          errorMessage: axiosError.response.data?.detail
            ? axiosError.response.data?.detail
            : "Sorry, could not get your sessions.",
          errorDetails: error,
        };
        return res.status(axiosError.response.status).json(customizedResponse);
      }
    }
    customizedResponse = {
      data: null,
      errorMessage: "Sorry, could not get your sessions.",
      errorDetails: error,
    };
    return res.status(500).json(customizedResponse);
  }
};


export const getBookingsByDate = async (
    req: any,
    res: Response<CustomizedResponse>
  ) => {
    let customizedResponse: CustomizedResponse = {
      data: null,
      errorMessage: "Sorry, could not perform that action. Please try again.",
    };
  
    try {
      console.info("Getting bookings by date");
      const authToken: string = req.headers.authorization as string;
  
  
      const response = await axios.get(
        `${authMicroservice.base_url}/booking/admin/${req.query.date}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `${authToken}`,
          },
          timeout: 10000,
        }
      );
  
      customizedResponse = {
        data: response.data,
        infoMessage: response.data.msg,
      };
  
      res.status(response.status).json(customizedResponse);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<{ detail: string }>;
        if (axiosError.response) {
          customizedResponse = {
            data: null,
            errorMessage: axiosError.response.data?.detail
              ? axiosError.response.data?.detail
              : "Sorry, could not get the sesssions.",
            errorDetails: error,
          };
          return res.status(axiosError.response.status).json(customizedResponse);
        }
      }
      customizedResponse = {
        data: null,
        errorMessage: "Sorry, could not get the sessions.",
        errorDetails: error,
      };
      return res.status(500).json(customizedResponse);
    }
  };
  