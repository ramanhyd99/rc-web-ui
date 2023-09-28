import axios, { AxiosError } from "axios";
import { Response } from "express";
import { CONFIG, MicroserviceConfig } from "../configs";
import { CustomizedResponse } from "../schemas";

const authMicroservice = CONFIG.microservices.find(
  (microservice: MicroserviceConfig) => microservice.name === "backend"
);

if (!authMicroservice) {
  throw new Error("Backend microservice configuration not found.");
}

export const getNotesForUserId = async (
  req: any,
  res: Response<CustomizedResponse>
) => {
  let customizedResponse: CustomizedResponse = { data: null };

  try {
    console.info("getNotesForUserId - userId: " + req.query.userId);
    const authToken: string = req.headers.authorization as string;

    const response = await axios.get(
      `${authMicroservice.base_url}/notes/${req.query.userId}`,
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
    const errMsg = "Sorry, could not fetch your notes.";

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
    console.error("getNotesForUserId :", error);
    customizedResponse = {
      data: null,
      errorMessage: errMsg,
      errorDetails: error,
    };
    res.status(500).json(customizedResponse);
  }
};

export const deleteNoteByNoteId = async (
  req: any,
  res: Response<CustomizedResponse>
) => {
  let customizedResponse: CustomizedResponse = { data: null };

  try {
    console.info("deleteNoteByNoteId - userId: " + req.userId);
    const authToken: string = req.headers.authorization as string;

    const response = await axios.delete(
      `${authMicroservice.base_url}/notes/${req.query.noteId}`,
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
    const errMsg = "Sorry, could not delete your note.";

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
    console.error("deleteNoteByNoteId :", error);
    customizedResponse = {
      data: null,
      errorMessage: errMsg,
      errorDetails: error,
    };
    res.status(500).json(customizedResponse);
  }
};

export const createNote = async (
  req: any,
  res: Response<CustomizedResponse>
) => {
  let customizedResponse: CustomizedResponse = {
    data: null,
    errorMessage: "Sorry, could not create the note.",
  };

  try {
    console.info("createNote by userId: " + req.userId);

    const authToken: string = req.headers.authorization as string;

    const response = await axios.post(
      `${authMicroservice.base_url}/notes/`,
      {
        user_id: req.query.user_id,
        note: req.query.note,
      },
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
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ detail: string }>;
      if (axiosError.response) {
        customizedResponse = {
          data: null,
          errorMessage: axiosError.response.data?.detail
            ? axiosError.response.data?.detail
            : "Could not create note.",
          errorDetails: error,
        };
        return res.status(axiosError.response.status).json(customizedResponse);
      }
    }
    console.error("createNote :", error);
    customizedResponse = {
      data: null,
      errorMessage: "Could not create note.",
      errorDetails: error,
    };
    return res.status(500).json(customizedResponse);
  }
};

export const updateNote = async (
  req: any,
  res: Response<CustomizedResponse>
) => {
  let customizedResponse: CustomizedResponse = {
    data: null,
    errorMessage: "Sorry, could not update the note.",
  };

  try {
    console.info("updateNote by userId: " + req.userId);

    const authToken: string = req.headers.authorization as string;

    const response = await axios.patch(
      `${authMicroservice.base_url}/notes/`,
      {
        note_id: req.query.note_id,
        note: req.query.note,
      },
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
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ detail: string }>;
      if (axiosError.response) {
        customizedResponse = {
          data: null,
          errorMessage: axiosError.response.data?.detail
            ? axiosError.response.data?.detail
            : "Could not update note.",
          errorDetails: error,
        };
        return res.status(axiosError.response.status).json(customizedResponse);
      }
    }
    console.error("updateNote :", error);
    customizedResponse = {
      data: null,
      errorMessage: "Could not update note.",
      errorDetails: error,
    };
    return res.status(500).json(customizedResponse);
  }
};
