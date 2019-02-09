import { messageFactory } from "../../base/message-factory";
import * as Server from "./";

export type Payload = {
  identity: string;
};

export const factory = (payload: Payload) =>
  messageFactory<Server.Tokens.IdentityValidate, Payload>(
    Server.Tokens.IdentityValidate,
    {
      ...payload
    }
  );
