import { IUser } from "../modules/message/user.interface";

declare global {
  namespace Express {
    interface Request {
      user: IUser;
      socketAuthToken: string;
    }
  }
}