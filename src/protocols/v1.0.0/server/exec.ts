import { messageFactory } from "../../base/message-factory";
import * as Server from "./";

export interface Payload {
  ok: true;
  result: any;
}

export const factory = (payload: Payload) =>
  messageFactory<Server.Tokens.Exec, Payload>(Server.Tokens.Exec, {
    ...payload
  });
