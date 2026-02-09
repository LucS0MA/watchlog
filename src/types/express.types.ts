import { JwtPayload } from "./jwtPayload.types.js";

declare global {
  namespace Express {
    interface Request {
      cookies: {
        token?: string;
      };
      user?: JwtPayload;
    }
  }
}
