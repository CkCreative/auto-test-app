export interface Ranges {
  minInterestRate: number;
  maxInterestRate: number;
  minDownPayment: number;
  maxDownPayment: number;
  tenure: number;
}

export interface DefaultValues {
  interestRate: number;
  downPayment: number;
  tenure: number;
}

export interface LoanCalculator {
  loanPercentage: number;
  ranges: Ranges;
  defaultValues: DefaultValues;
}

export interface FinancingSettings {
  loanCalculator: LoanCalculator;
}

export interface InspectedMake {
  count: number;
  name: string;
  imageUrl: string;
}

export interface Make {
  id: number;
  name: string;
  imageUrl: string;
}

export interface BodyType {
  id: number;
  name: string;
  imageUrl: string;
}

export interface InspectorDetails {
  inspectedMakes: InspectedMake[];
  inspectorFullName: string;
  totalInspection: number;
  profileImageUrl: string;
}

export interface InspectionItem {
  medias: Media[];
  name: string;
  comment: string;
  response: string;
  condition: string;
}

export interface Media {
  url: string;
  mediaType: string;
}

export interface Model {
  modelFeatures: any[];
  id: number;
  name: string;
  imageUrl: string;
  wheelType: string;
  make: Make;
  popular: boolean;
}

export interface DamageMedum {
  inspectionItems: InspectionItem[];
  name: string;
  comment: string;
}

export interface CarDetail {
  features: any[];
  carFeatures: any[];
  modelFeatures: any[];
  damageMedia: DamageMedum[];
  id: string;
  year: number;
  insured: boolean;
  mileage: number;
  vin: string;
  marketplacePrice: number;
  marketplaceVisible: boolean;
  marketplaceVisibleDate: string;
  isFeatured: boolean;
  imageUrl: string;
  model: Model;
  state: string;
  country: string;
  ownerType: string;
  transmission: string;
  fuelType: string;
  sellingCondition: string;
  bodyType: BodyType;
  city: string;
  marketplaceOldPrice: number;
  createdAt: string;
  updatedAt: string;
  mileageUnit: string;
  hasWarranty: boolean;
  hasFinancing: boolean;
  interiorColor: string;
  exteriorColor: string;
  engineType: string;
  gradeScore: number;
  installment: number;
  depositReceived: boolean;
  loanValue: number;
  websiteUrl: string;
  sold: boolean;
  hasThreeDImage: boolean;
  inspectorDetails: InspectorDetails;
  carName: string;
  financingSettings: FinancingSettings;
  ccMeasurement: string;
}
