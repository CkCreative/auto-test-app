export interface CarMediaList {
  id: number;
  name: string;
  url: string;
  createdAt: Date;
  type: string;
}

export interface Pagination {
  total: number;
  currentPage: number;
  pageSize: number;
}

export interface CarMedia {
  carMediaList: CarMediaList[];
  pagination: Pagination;
}
