import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, of} from 'rxjs';
import {Config} from "../config/config";
import {map, switchMap, tap} from "rxjs/operators";
import {FinancialFreedomCalculation} from "./model/calculation-model";
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
          return this.http.get<FinancialFreedomCalculation>(`${baseUrl}/calculations`, {params}).pipe(
              tap(result => {
                // TODO: remove mocked data
                if (result.yearsNeeded === null) {
                  result.yearsNeeded = 5;
                }
                result.calculation = [
                    {year: 2021, seedCapital: 10000, savedMoney: 1000, return: 1000, finalCapital: 12000},
                    {year: 2022, seedCapital: 12000, savedMoney: 1000, return: 1000, finalCapital: 14000},
                    {year: 2023, seedCapital: 14000, savedMoney: 1000, return: 1000, finalCapital: 16000},
                    {year: 2024, seedCapital: 16000, savedMoney: 1000, return: 1000, finalCapital: 18000},
                    {year: 2025, seedCapital: 18000, savedMoney: 1000, return: 1000, finalCapital: 20000}
                ]
              }));
        })
    )
  }

}