import { CityResponse } from "./CityResponse.model";

export interface PageResponse {
  content: CityResponse[];
  numberOfElements: number;
  size: number;
  number: number;
  totalElements: number;
  totalPages: number;
}
