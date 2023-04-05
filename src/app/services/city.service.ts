import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { Observable } from "rxjs";

import { environment } from "../../environment/envitonment";
import { CityResponse } from "../models/CityResponse.model";
import { CityUpdateRequest } from "../models/CityUpdateRequest.model";
import { SearchCriteria } from "../models/SearchCriteria.model";
import { PageResponse } from "../models/PageResponse.model";

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private cityUrl = environment.api.cities;

  constructor(public http: HttpClient) {}

  getAll(searchCriteria: SearchCriteria[], size: number, page: number): Observable<PageResponse> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("size",size).append("page",page);
    return this.http.post<PageResponse>(this.cityUrl, searchCriteria, {params: queryParams});
  }

  update(city: CityUpdateRequest): Observable<CityResponse> {
    return this.http.put<CityResponse>(this.cityUrl, city);
  }
}
