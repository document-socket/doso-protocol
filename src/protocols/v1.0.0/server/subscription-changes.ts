import { messageFactory } from "../../base/message-factory";
import * as Server from "./";

export interface Payload {
  id: string;
  delta: {};
}

export const factory = (payload: Payload) =>
  messageFactory<Server.Tokens.SubscriptionChanges, Payload>(
    Server.Tokens.SubscriptionChanges,
    {
      ...payload
    }
  );
