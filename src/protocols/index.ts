import * as BaseClient from "./base/client";
import * as BaseServer from "./base/server";
import * as V1_0_0_Client from "./v1.0.0/client";
import * as V1_0_0_Server from "./v1.0.0/server";

export namespace Protocols {
  export namespace Base {
    export import Client = BaseClient;
    export import Server = BaseServer;
  }
  export namespace V1_0_0 {
    export import Client = V1_0_0_Client;
    export import Server = V1_0_0_Server;
  }
}
