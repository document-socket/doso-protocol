import { messageFactory } from "../message-factory";
import * as Server from "./";

export interface Payload {
  error: number;
}

export const factory = (payload: Payload) =>
  messageFactory(Server.Tokens.Error, payload);
