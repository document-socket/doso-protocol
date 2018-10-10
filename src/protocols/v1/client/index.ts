import { Message } from "../../..";
import * as IdentityCreate from "./identity-create";
import * as IdentityValidate from "./identity-validate";
import * as Subscribe from "./subscribe";
import * as Unsubscribe from "./unsubscribe";
import * as Exec from "./exec";

export enum Tokens {
  IdentityCreate = "idc",
  IdentityValidate = "idv",
  Exec = "exe",
  Subscribe = "sub",
  Unsubscribe = "uns"
}

export import IdentityCreateRequest = IdentityCreate.Request;
export import IdentityCreateRequestPayload = IdentityCreate.RequestPayload;

export import IdentityValidateRequest = IdentityValidate.Request;
export import IdentityValidateRequestPayload = IdentityValidate.RequestPayload;

export import SubscribeRequest = Subscribe.Request;
export import SubscribeRequestPayload = Subscribe.RequestPayload;

export import UnsubscribeRequest = Unsubscribe.Request;
export import UnsubscribeRequestPayload = Unsubscribe.RequestPayload;

export import ExecRequest = Exec.Request;
export import ExecRequestPayload = Exec.RequestPayload;

/**
 * Return an instance of Message for `type` with `payload` prefilled.
 */

export function messageFactory(
  type: Tokens.IdentityCreate,
  payload: IdentityCreateRequestPayload
): IdentityCreateRequest;

export function messageFactory(
  type: Tokens.IdentityValidate,
  payload: IdentityValidateRequestPayload
): IdentityValidateRequest;

export function messageFactory(
  type: Tokens.Subscribe,
  payload: SubscribeRequestPayload
): SubscribeRequest;

export function messageFactory(
  type: Tokens.Unsubscribe,
  payload: UnsubscribeRequestPayload
): UnsubscribeRequest;

export function messageFactory(
  type: Tokens.Exec,
  payload: ExecRequestPayload
): ExecRequest;

export function messageFactory(type: string, payload: any) {
  const result: Message = Object.create(null);
  result.type = type;
  result.payload = payload;
  return result;
}
