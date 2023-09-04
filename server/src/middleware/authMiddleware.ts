import { Request, Response, NextFunction } from "express";
import { AuthorizedRequest } from "../schemas";
var jwt = require("jsonwebtoken");

const JWT_PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBqrn7qmBRKnTUeSlJ2PVO5Yld
ox3a/k7lXN8boX5cbyPH2J/k+hRUHV0GewjIKVsQ+QYxTDXLWTLItlzaCohzjnP9
FOBdEi3uSkZeGe2tCST8sxBPVDx/jm28z7a3BRE95irAqwB00ey7f+Is5Feg2NNt
djCMRTmAwfwK6x5t8QIDAQAB
-----END PUBLIC KEY-----`; // Replace with your actual public key

function authMiddleware(
  req: AuthorizedRequest,
  res: Response,
  next: NextFunction
) {
  const { originalUrl } = req;

  if (
    originalUrl.startsWith("/api/login") ||
    originalUrl.startsWith("/api/logout") || 
    originalUrl.startsWith("/api/reviews")
  ) {
    return next();
  }

  const rcToken = req.cookies.rc_token;
  console.debug("rcToken: " + rcToken);

  if (!rcToken) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    // verify JWT expiry and authenticity
    const decodedToken = jwt.verify(rcToken, JWT_PUBLIC_KEY) as {
      [key: string]: any;
    };

    // add these to be used in the APIs
    req.userId = decodedToken.payload.id;
    req.headers.authorization = `Bearer ${rcToken}`; // add JWT from cookie to Bearer auth for backends
  } catch (error: any) {
    console.error("invalid token");
    return res.status(401).json({ error: "Invalid token. " });
  }
  next();
}

export default authMiddleware;
