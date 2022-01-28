export default interface PaginationResponse<T> {
    count: number;
    next: string;
    previous: string;
    result: T[];
}
