import { SortDirection } from "../types/sort-direction.type";

export interface PaginationInterface {
  page: number;
  pageSize: number
  searchTerm: string;
  sortDirection?: SortDirection;
  sortField?: string;
}