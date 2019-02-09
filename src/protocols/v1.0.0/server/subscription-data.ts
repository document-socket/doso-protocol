import { messageFactory } from "../../base/message-factory";
import * as Server from "./";

export interface Payload {
  id: string;
  part: number;
  total: number;
  stream: string;
}

export const factory = (payload: Payload) =>
  messageFactory<Server.Tokens.SubscriptionData, Payload>(
    Server.Tokens.SubscriptionData,
    {
      ...payload
    }
  );
