import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { PageEvent}  from "@angular/material/paginator";

import { CityService } from "../../services/city.service";
import { CityResponse } from "../../models/CityResponse.model";
import { SearchCriteria } from "../../models/SearchCriteria.model";
import { QueryOperator } from "../../enums/QueryOperator.enum";
import { PageResponse } from "../../models/PageResponse.model";

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityComponent {

  length = 100;
  pageSize = 8;
  pageIndex = 0;
  pageSizeOptions = [8, 16, 24];
  searchValue = '';

  cities: CityResponse[] = [];

  pageEvent: PageEvent = new PageEvent();

  constructor(public cityService: CityService,
              public cdr: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.getAll();
  }

  public handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.getAll();
  }

  public setSearch(event: string): void {
    this.searchValue = event;
    this.pageIndex = 0;
    this.getAll();
  }

  public getAll(): void {
    let searchCriteria = this.getSearchCriteria()
    this.cityService.getAll(searchCriteria, this.pageSize, this.pageIndex)
    .subscribe({
        next: (page: PageResponse) => {
          this.cities = page.content;
          this.length = page.totalElements;
          this.pageSize = page.size;
          this.pageIndex = page.number;
          this.cdr.detectChanges();
        }
    });
  }

  private getSearchCriteria(): SearchCriteria[] {
    if (this.searchValue === '') {
      return [];
    }
    return [{
      operator: QueryOperator.LIKE,
      field: "name",
      value: this.searchValue
    }]
  }

}
