export interface MakeList {
  id: number;
  name: string;
  imageUrl: string;
}

export interface Pagination {
  total: number;
  currentPage: number;
  pageSize: number;
}

export interface TopMakes {
  makeList: MakeList[];
  pagination: Pagination;
}
