import { messageFactory } from "../../base/message-factory";
import * as Server from "./";

export type Payload = {
  id: string;
  secret: string;
};

export const factory = (payload: Payload) =>
  messageFactory<Server.Tokens.IdentityCreate, Payload>(
    Server.Tokens.IdentityCreate,
    {
      ...payload
    }
  );
