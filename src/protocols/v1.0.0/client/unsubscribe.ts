import { messageFactory } from "../../base/message-factory";
import * as Client from "./index";

export type Payload = {
  id: string;
};

export const factory = (payload: Payload) =>
  messageFactory<Client.Tokens.Unsubscribe, Payload>(
    Client.Tokens.Unsubscribe,
    {
      ...payload
    }
  );
