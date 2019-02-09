import { messageFactory } from "../../base/message-factory";
import * as Client from "./index";

export type Payload = {
  name: string;
  params?: any;
};

export const factory = (payload: Payload) =>
  messageFactory<Client.Tokens.Exec, Payload>(Client.Tokens.Exec, {
    ...payload
  });
