import { Versions } from "../../../types/versions";
import * as ClientBase from "../../base/client/index";
import { messageFactory } from "../../base/message-factory";

export const factory = () =>
  messageFactory<
    ClientBase.Tokens.IdentityCreate,
    ClientBase.IdentityCreate.Payload
  >(ClientBase.Tokens.IdentityCreate, {
    version: Versions.V1_0_0
  });
