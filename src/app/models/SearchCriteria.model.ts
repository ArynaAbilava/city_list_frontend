import { QueryOperator } from "../enums/QueryOperator.enum";

export interface SearchCriteria {
  operator: QueryOperator;
  field: string;
  value: string;
}
