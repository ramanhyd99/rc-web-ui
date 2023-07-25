import { Request, Response, NextFunction } from "express";
import { AuthorizedRequest } from "../schemas";

function csrfMiddleware(
  req: AuthorizedRequest,
  res: Response,
  next: NextFunction
) {
  const requestedByHeader = req.headers["x-requested-by"];

  if (requestedByHeader != "Radhe-Krishna")
    return res.status(403).json({ error: "Does not meet CSRF check." });

  next();
}

export default csrfMiddleware;
