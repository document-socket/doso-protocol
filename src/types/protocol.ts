export interface Message<T = any, P = any> {
  type: T;
  payload: P;
  requestId?: number;
}

export enum ConnectionState {
  Connecting = "Connecting",
  Reconnecting = "Reconnecting",
  HandshakePending = "HandshakePending",
  Ready = "Ready",
  Disconnected = "Disconnected"
}
