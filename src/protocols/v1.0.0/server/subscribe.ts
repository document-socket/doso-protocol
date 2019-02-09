import { messageFactory } from "../../base/message-factory";
import * as Server from "./";

export interface Payload {
  id: string;
}

export const factory = (payload: Payload) =>
  messageFactory<Server.Tokens.Subscribe, Payload>(Server.Tokens.Subscribe, {
    ...payload
  });
