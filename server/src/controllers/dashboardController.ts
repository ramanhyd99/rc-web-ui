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

  export const fetchMetrics = async (
    req: AuthorizedRequest,
    res: Response<CustomizedResponse>
  ) => {
    let customizedResponse: CustomizedResponse = { data: null };
    console.info("fetchMetrics - userId: " + req.userId);
    const authToken: string = req.headers.authorization as string;
    
    try {
      const response = await axios.get(
        `${authMicroservice.base_url}/dashboard/`,
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
      console.error(error);
      customizedResponse = {
        data: null,
        errorMessage: "Could not fetch number of clients.",
        errorDetails: error,
      };
      res.status(500).json(customizedResponse);
    }
  };