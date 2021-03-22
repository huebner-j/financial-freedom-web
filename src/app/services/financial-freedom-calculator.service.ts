import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, of} from 'rxjs';
import {Config} from "../config/config";
import {map, switchMap} from "rxjs/operators";
import {FinancialFreedomCalculation} from "./model/calculation";
import {InputData} from "../input-form/input-form.component";

@Injectable({providedIn: "root"})
export class FinancialFreedomCalculatorService {

  // TODO: introduce configuration service
  private baseUrl$ = of<Config>({financialFreedomCalculator: {baseUrl: "http://localhost/api"}})
  .pipe(map(config => config.financialFreedomCalculator.baseUrl));

  constructor(private http: HttpClient) {
  }

  calculateFinancialFreedom(input: InputData): Observable<FinancialFreedomCalculation>{
    return this.baseUrl$.pipe(
        switchMap(baseUrl => {
          const params = new HttpParams()
            .set('seedCapital', input.seedCapital)
            .set('desiredMonthlyIncome', input.desiredMonthlyIncome)
            .set('interest', input.interest)
            .set('monthlySavingRate', input.monthlySavingRate)
          return this.http.get<FinancialFreedomCalculation>(`${baseUrl}/calculations`, {params});
        })
    )
  }

}