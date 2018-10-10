import { Message } from "../../../types/protocol";
import * as Error from "./error";
import * as IdentityCreate from "./identity-create";
import * as IdentityValidate from "./identity-validate";
import * as Subscribe from "./subscribe";
import * as SubscriptionData from "./subscription-data";
import * as SubscriptionChanges from "./subscription-changes";
import * as Unsubscribe from "./unsubscribe";
import * as Exec from "./exec";

export enum Tokens {
  Error = "error",
  IdentityCreate = "idc",
  IdentityValidate = "idv",
  Exec = "exe",
  Subscribe = "sub",
  Unsubscribe = "uns",
  SubscriptionData = "sud",
  SubscriptionChanges = "suc"
}

export import ErrorResponse = Error.Response;
export import ErrorPayload = Error.Payload;

export import IdentityCreateResponse = IdentityCreate.Response;
export import IdentityCreatePayload = IdentityCreate.Payload;

export import IdentityValidateResponse = IdentityValidate.Response;
export import IdentityValidatePayload = IdentityValidate.Payload;

export import SubscribeResponse = Subscribe.Response;
export import SubscribePayload = Subscribe.Payload;

export import SubscriptionDataEvent = SubscriptionData.Event;
export import SubscriptionDataPayload = SubscriptionData.Payload;

export import SubscriptionChangesEvent = SubscriptionChanges.Event;
export import SubscriptionChangesPayload = SubscriptionChanges.Payload;

export import UnsubscribeResponse = Unsubscribe.Response;
export import UnsubscribePayload = Unsubscribe.Payload;

export import ExecResponse = Exec.Response;
export import ExecPayload = Exec.Payload;

export function messageFactory(
  type: Tokens.Error,
  payload: ErrorPayload,
  requestId: number
): ErrorResponse;
export function messageFactory(
  type: Tokens.IdentityCreate,
  payload: IdentityCreatePayload,
  requestId?: number
): IdentityCreateResponse;
export function messageFactory(
  type: Tokens.IdentityValidate,
  payload: IdentityValidatePayload,
  requestId?: number
): IdentityValidateResponse;
export function messageFactory(
  type: Tokens.Subscribe,
  payload: SubscribePayload,
  requestId: number
): SubscribeResponse;
export function messageFactory(
  type: Tokens.SubscriptionData,
  payload: SubscriptionDataPayload,
  requestId?: number
): SubscriptionDataEvent;
export function messageFactory(
  type: Tokens.SubscriptionChanges,
  payload: SubscriptionChangesPayload,
  requestId: number
): SubscriptionChangesEvent;
export function messageFactory(
  type: Tokens.Unsubscribe,
  payload: UnsubscribePayload,
  requestId: number
): UnsubscribeResponse;
export function messageFactory(
  type: Tokens.Exec,
  payload: ExecPayload,
  requestId: number
): ExecResponse;
export function messageFactory(type: string, payload: any, requestId: number) {
  const result: Message = Object.create(null);
  result.type = type;
  result.payload = payload;
  if (requestId) {
    result.requestId = requestId;
  }
  return result;
}
