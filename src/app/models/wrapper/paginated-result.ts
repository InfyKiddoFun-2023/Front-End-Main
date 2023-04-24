import { TypedResult } from "./typed-result";

export interface PaginatedResult<T> extends TypedResult<T[]> {
    currentPage: Number,
    totalPages: Number,
    totalCount: Number,
    pageSize: Number,
    hasPreviousPage: boolean,
    hasNextPage: boolean
}