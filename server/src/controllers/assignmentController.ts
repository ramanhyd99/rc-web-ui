import axios, { AxiosError } from "axios";
import { Response } from "express";
import { CONFIG, MicroserviceConfig } from "../configs";
import { AuthorizedRequest, CustomizedResponse, MulterRequest } from "../schemas";

const authMicroservice = CONFIG.microservices.find(
  (microservice: MicroserviceConfig) => microservice.name === "backend"
);

if (!authMicroservice) {
  throw new Error("Backend microservice configuration not found.");
}

export const uploadAssignments = async (
  req: MulterRequest,
  res: Response<CustomizedResponse>
) => {
  let customizedResponse: CustomizedResponse = { data: null };

  try {
    const authToken: string = req.headers.authorization as string;
    console.info("uploadAssignments - userId: " + req.userId);
    console.log(req.files);

    const response = await axios.post(
      `${authMicroservice.base_url}/assignments/upload`,
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
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        console.error("Status code:", axiosError.response.status);
        // console.error("Status code:", axiosError.response);
        customizedResponse = {
          data: null,
          errorMessage: "Could not upload assignments. Please try again.",
          errorDetails: error,
        };
        return res.status(axiosError.response.status).json(customizedResponse);
      }
    }
    console.error("updateFreeFollowUp :", error);
    customizedResponse = {
      data: null,
      errorMessage: "Could not upload assignments. Please try again.",
      errorDetails: error,
    };
    res.status(500).json(customizedResponse);
  }
};
