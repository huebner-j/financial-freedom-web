import {Injectable} from "@angular/core";
import {BehaviorSubject} from 'rxjs';
import {FinancialFreedomCalculation} from "./model/calculation-model";

@Injectable({providedIn: "root"})
export class CalculationResultService {

  public calculationResult$ = new BehaviorSubject<FinancialFreedomCalculation>(null);

  setResult(result: FinancialFreedomCalculation) {
    this.calculationResult$.next(result);
  }
}