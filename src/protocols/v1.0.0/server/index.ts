import * as Exec from "./exec";
import * as IdentityCreate from "./identity-create";
import * as IdentityValidate from "./identity-validate";
import * as Subscribe from "./subscribe";
import * as SubscriptionChanges from "./subscription-changes";
import * as SubscriptionData from "./subscription-data";
import * as Unsubscribe from "./unsubscribe";

export enum Tokens {
  IdentityCreate = "idc",
  IdentityValidate = "idv",
  Exec = "exe",
  Subscribe = "sub",
  Unsubscribe = "uns",
  SubscriptionData = "sud",
  SubscriptionChanges = "suc"
}

export import Exec = Exec;
export import IdentityCreate = IdentityCreate;
export import IdentityValidate = IdentityValidate;
export import Subscribe = Subscribe;
export import SubscriptionChanges = SubscriptionChanges;
export import SubscriptionData = SubscriptionData;
export import Unsubscribe = Unsubscribe;
