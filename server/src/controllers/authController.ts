import axios, { AxiosError } from "axios";
import cookie from "cookie";
import { Request, Response } from "express";
import { CONFIG, MicroserviceConfig } from "../configs";
import { CustomizedResponse, UserInfo } from "../schemas";

const authMicroservice = CONFIG.microservices.find(
  (microservice: MicroserviceConfig) => microservice.name === "backend"
);

if (!authMicroservice) {
  throw new Error("Backend microservice configuration not found.");
}

export const loginWithGoogle = async (
  req: Request,
  res: Response<CustomizedResponse>
) => {
  let customizedResponse: CustomizedResponse = { data: null };
  try {
    let authz = req.headers.authorization;
    authz = authz?.replace(/^Bearer\s+/i, "");
    console.debug("loginWithGoogle authz: " + authz);

    const response = await axios.post(
      `${authMicroservice.base_url}/auth/login/oauth/google`,
      {
        oauth_token: authz, //data
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        timeout: 10000,
      }
    );

    if (response.status === 200) {
      const userInfo: UserInfo | null = response.data["userInfo"];
      customizedResponse = {
        // infoMessage: "Successfully logged in.",
        data: userInfo,
      };
      const rc_token = response.data[CONFIG.jwt_token_name];
      res.setHeader(
        "Set-Cookie",
        cookie.serialize(CONFIG.jwt_token_name, rc_token, {
          httpOnly: true, // this cookie is inaccessible to JavaScript
          secure: CONFIG.env == "production", // sent over HTTPS only or not i.e True/False
          maxAge: 21600, // 6 hours in seconds
          path: "/",
          sameSite: "strict", // cookie can be sent in cross-site or in a restricted way (Lax)
        })
      );
      console.log("sending response...");
      res.status(200).json(customizedResponse);
    } else {
      customizedResponse = {
        errorMessage: "Could not log you in. Please try again.",
        errorDetails: "Status returned: " + response.status,
        data: null,
      };
      res.status(response.status).json(customizedResponse);
    }
  } catch (error: unknown) {
    console.log("loginWithGoogle error");
    console.log(error);

    let errorDetails = null;

    if (error instanceof AxiosError) {
      console.error((error as AxiosError).response?.data);
      errorDetails = (error as AxiosError).response?.data;
    } else console.error(error);

    customizedResponse = {
      errorMessage: "Could not log you in. Please try again.",
      errorDetails: errorDetails,
      data: null,
    };
    console.log("returning " + customizedResponse.errorMessage);
    res.status(500).json(customizedResponse);
  }
};

export const logout = async (
  req: Request,
  res: Response<CustomizedResponse>
) => {
  console.log("logging out..");
  let customizedResponse: CustomizedResponse = { data: null };
  //todo logout logic to remove jwt from redis
  res.setHeader(
    "Set-Cookie",
    cookie.serialize(CONFIG.jwt_token_name, "", {
      httpOnly: true,
      secure: CONFIG.env == "production",
      maxAge: -1, // 1 week in seconds
      path: "/",
    })
  );
  customizedResponse = {
    data: null,
    infoMessage: "Logged out.",
  };
  res.status(200).json(customizedResponse);
};
