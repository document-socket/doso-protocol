import { messageFactory } from "../../base/message-factory";
import * as Server from "./";

export interface Payload {
  handle: string;
}

export const factory = (payload: Payload) =>
  messageFactory<Server.Tokens.Unsubscribe, Payload>(
    Server.Tokens.Unsubscribe,
    {
      ...payload
    }
  );
