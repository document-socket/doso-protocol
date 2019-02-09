import { messageFactory } from "../../base/message-factory";
import * as Client from "./index";

export type Payload = {
  id: string;
  name: string;
  params?: any;
};

export const factory = (payload: Payload) =>
  messageFactory<Client.Tokens.Subscribe, Payload>(Client.Tokens.Subscribe, {
    ...payload
  });
