import * as IdentityCreate from "./identity-create";
import * as IdentityValidate from "./identity-validate";

export enum Tokens {
  IdentityCreate = "idc",
  IdentityValidate = "idv"
}

export import IdentityCreate = IdentityCreate;
export import IdentityValidate = IdentityValidate;
