import { Result } from "./result";

export interface TypedResult<T> extends Result {
    data: T
}