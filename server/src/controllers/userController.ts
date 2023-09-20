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

export const fetchUserProfile = async (
  req: AuthorizedRequest,
  res: Response<CustomizedResponse>
) => {
  let customizedResponse: CustomizedResponse = { data: null };
  console.info("fetchUserProfile - userId: " + req.userId);
  const authToken: string = req.headers.authorization as string;

  const user_id_val = req.query.userId ? req.query.userId : req.userId;

  try {
    const response = await axios.get(
      `${authMicroservice.base_url}/users/${user_id_val}`,
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
      // infoMessage: "Got the user profile.",
      data: response.data,
    };

    res.status(200).json(customizedResponse);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ detail: string }>;
      if (axiosError.response) {
        console.error("Status code:", axiosError.response.status);
        // console.error("Status code:", axiosError.response);
        customizedResponse = {
          data: null,
          errorMessage: axiosError.response.data?.detail
            ? axiosError.response.data?.detail
            : "Could not fetch user details. Please try again.",
          errorDetails: error,
        };
        return res.status(axiosError.response.status).json(customizedResponse);
      }
    }
    customizedResponse = {
      data: null,
      errorMessage: "Could not fetch user details. Please try again.",
      errorDetails: error,
    };
    res.status(500).json(customizedResponse);
  }
};

export const fetchUsers = async (
  req: AuthorizedRequest,
  res: Response<CustomizedResponse>
) => {
  let customizedResponse: CustomizedResponse = { data: null };
  try {
    const authToken: string = req.headers.authorization as string;
    console.info("fetchUsers - userId: " + req.userId);

    const totalUsers = await axios.get(
      `${authMicroservice.base_url}/users/total/`,
      {
        params: {
          role: req.query.role,
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

    const response = await axios.get(`${authMicroservice.base_url}/users/`, {
      params: {
        limit: req.query.limit,
        offset: req.query.offset,
        role: req.query.role,
        search: req.query.search,
        sort_field: req.query.sort_field,
        sort_dir: req.query.sort_dir,
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `${authToken}`,
      },
      timeout: 30000,
    });

    customizedResponse = {
      // infoMessage: "Got the users.",
      data: { users: response.data, total: totalUsers.data.total },
    };

    res.status(200).json(customizedResponse);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ detail: string }>;
      if (axiosError.response) {
        console.error("Status code:", axiosError.response.status);
        customizedResponse = {
          data: null,
          errorMessage: axiosError.response.data?.detail
            ? axiosError.response.data?.detail
            : "Could not fetch users.",
          errorDetails: error,
        };
        return res.status(axiosError.response.status).json(customizedResponse);
      }
    }
    console.error("fetchUsers :", error);
    customizedResponse = {
      data: null,
      errorMessage: "Could not fetch users.",
      errorDetails: error,
    };
    res.status(500).json(customizedResponse);
  }
};

export const updateFreeFollowUp = async (
  req: AuthorizedRequest,
  res: Response<CustomizedResponse>
) => {
  let customizedResponse: CustomizedResponse = { data: null };
  try {
    const authToken: string = req.headers.authorization as string;
    console.log(authToken);
    console.info("updateFreeFollowUp - userId: " + req.userId);
    console.log(" req.query.userId " + req.query.userId);

    const response = await axios.post(
      `${authMicroservice.base_url}/users/free_follow_up/${req.query.userId}`,
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
      data: null,
      infoMessage: response.data.msg,
    };

    res.status(200).json(customizedResponse);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ detail: string }>;
      if (axiosError.response) {
        console.error("Status code:", axiosError.response.status);
        // console.error("Status code:", axiosError.response);
        customizedResponse = {
          data: null,
          errorMessage: axiosError.response.data?.detail
            ? axiosError.response.data?.detail
            : "Could not update free follow up.",
          errorDetails: error,
        };
        return res.status(axiosError.response.status).json(customizedResponse);
      }
    }
    console.error("updateFreeFollowUp :", error);
    customizedResponse = {
      data: null,
      errorMessage: "Could not update free follow up.",
      errorDetails: error,
    };
    res.status(500).json(customizedResponse);
  }
};
