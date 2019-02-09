import { Message } from "../../types/protocol";

export function messageFactory<T, P>(type: T, payload: P): Message<T, P> {
  const result: Message = Object.create(null);
  result.type = type;
  result.payload = payload;
  return result;
}
