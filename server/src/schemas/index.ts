export interface UserInfo {
  free_follow_up: boolean;
  username: string;
  role: string;
  name: string;
  id: BigInt;
  created_at: string;
  profile_picture: string;
  email: string;
  isNewUser: boolean;
}

export interface CustomizedResponse<T = Record<string, any>> {
  errorMessage?: string;
  errorDetails?: unknown;
  infoMessage?: string;
  data: T | null;
}

import { Request } from "express";
// This interface is needed to set userId, etc. as part of the request to be used in the code later.
export interface AuthorizedRequest extends Request {
  userId?: string;
}

export interface MulterRequest extends AuthorizedRequest {
  files: any;
}
