export interface Stats {
  webViewCount: number;
  webViewerCount: number;
  interestCount: number;
  testDriveCount: number;
  appViewCount: number;
  appViewerCount: number;
  processedLoanCount: number;
}

export interface Result {
  id: string;
  title: string;
  imageUrl: string;
  year: number;
  city: string;
  state: string;
  hasWarranty: boolean;
  marketplacePrice: number;
  marketplaceOldPrice: number;
  hasFinancing: boolean;
  mileage: number;
  mileageUnit: string;
  installment: number;
  depositReceived: boolean;
  loanValue: number;
  websiteUrl: string;
  stats: Stats;
  bodyTypeId: string;
  sold: boolean;
  hasThreeDImage: boolean;
  transmission: string;
  marketplaceVisibleDate: string;
}

export interface Pagination {
  total: number;
  currentPage: number;
  pageSize: number;
}

export interface CarList {
  result: Result[];
  pagination: Pagination;
}
