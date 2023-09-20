import axios, { AxiosError } from "axios";
import { Response } from "express";
import FormData from "form-data";
import fs from "fs";
import { CONFIG, MicroserviceConfig } from "../configs";
import { CustomizedResponse } from "../schemas";
const { Readable } = require("stream");

const authMicroservice = CONFIG.microservices.find(
  (microservice: MicroserviceConfig) => microservice.name === "backend"
);

if (!authMicroservice) {
  throw new Error("Backend microservice configuration not found.");
}

export const uploadAssignments = async (
  req: any,
  res: Response<CustomizedResponse>
) => {
  let customizedResponse: CustomizedResponse = { data: null };

  try {
    console.info("uploadAssignments - userId: " + req.userId);
    const authToken: string = req.headers.authorization as string;
    const fileRecievedFromClient = req.file;
    const formData = new FormData();

    // formData.append("file", fs.createReadStream(fileRecievedFromClient.path), {
    //   filename: fileRecievedFromClient.originalname,
    //   contentType: fileRecievedFromClient.type,
    // });

    formData.append("file", Readable.from(req.file.buffer), {
      filename: fileRecievedFromClient.originalname,
      contentType: fileRecievedFromClient.type,
    });

    const fileLength = req.file.buffer.length; // This gives you the length of the file in bytes
    console.log("File size: ", fileLength);

    const response = await axios.post(
      `${authMicroservice.base_url}/assignments/upload`,
      formData,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          Authorization: `${authToken}`,
          "X-FILE-SIZE": fileLength,
        },
        timeout: 10000,
      }
    );

    customizedResponse = {
      data: response.data["file_name"],
      infoMessage: response.data.msg,
    };

    res.status(response.status).json(customizedResponse);
  } catch (error) {
    const errMsg = "Sorry, could not upload your assignment.";

    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ detail: string }>;
      if (axiosError.response) {
        console.log();
        customizedResponse = {
          data: null,
          errorMessage: axiosError.response.data?.detail
            ? axiosError.response.data?.detail
            : errMsg,
          errorDetails: error,
        };
        return res.status(axiosError.response.status).json(customizedResponse);
      }
    }
    console.error("uploadAssignments :", error);
    customizedResponse = {
      data: null,
      errorMessage: errMsg,
      errorDetails: error,
    };
    res.status(500).json(customizedResponse);
  }
};

export const getAssignmentsForUserId = async (
  req: any,
  res: Response<CustomizedResponse>
) => {
  let customizedResponse: CustomizedResponse = { data: null };

  try {
    console.info("getAssignmentsForUserId - userId: " + req.query.userId);
    const authToken: string = req.headers.authorization as string;

    const response = await axios.get(
      `${authMicroservice.base_url}/assignments/${req.query.userId}`,
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
    const errMsg = "Sorry, could not fetch your assignments.";

    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ detail: string }>;
      if (axiosError.response) {
        customizedResponse = {
          data: null,
          errorMessage: axiosError.response.data?.detail
            ? axiosError.response.data?.detail
            : errMsg,
          errorDetails: error,
        };
        return res.status(axiosError.response.status).json(customizedResponse);
      }
    }
    console.error("getAssignmentsForUserId :", error);
    customizedResponse = {
      data: null,
      errorMessage: errMsg,
      errorDetails: error,
    };
    res.status(500).json(customizedResponse);
  }
};

export const deleteAssignmentsForAssignmentId = async (
  req: any,
  res: Response<CustomizedResponse>
) => {
  let customizedResponse: CustomizedResponse = { data: null };

  try {
    console.info("deleteAssignmentsForAssignmentId - userId: " + req.userId);
    const authToken: string = req.headers.authorization as string;

    const response = await axios.delete(
      `${authMicroservice.base_url}/assignments/${req.query.assignmentId}`,
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
      data: null,
      infoMessage: response.data.msg,
    };

    res.status(response.status).json(customizedResponse);
  } catch (error) {
    const errMsg = "Sorry, could not delete your assignment.";

    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ detail: string }>;
      if (axiosError.response) {
        customizedResponse = {
          data: null,
          errorMessage: axiosError.response.data?.detail
            ? axiosError.response.data?.detail
            : errMsg,
          errorDetails: error,
        };
        return res.status(axiosError.response.status).json(customizedResponse);
      }
    }
    console.error("deleteAssignmentsForAssignmentId :", error);
    customizedResponse = {
      data: null,
      errorMessage: errMsg,
      errorDetails: error,
    };
    res.status(500).json(customizedResponse);
  }
};
