import { Versions } from "../../../types/versions";
import * as ClientBase from "../../base/client/index";
import { messageFactory } from "../../base/message-factory";

export type Payload = {
  identity: string;
  signature: string;
  timestamp: number;
};

export const factory = (payload: Payload) =>
  messageFactory<
    ClientBase.Tokens.IdentityValidate,
    Payload & ClientBase.IdentityValidate.Payload
  >(ClientBase.Tokens.IdentityValidate, {
    ...payload,
    version: Versions.V1_0_0
  });
