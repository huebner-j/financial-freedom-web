import {Injectable} from "@angular/core";
import {BehaviorSubject} from 'rxjs';

export type CalculationStatus = "INITIAL" | "SENDING" | "SUCCESS" | "ERROR";

@Injectable({providedIn: "root"})
export class StatusService {

  public calculationStatus$ = new BehaviorSubject<CalculationStatus>("INITIAL");

  setState(state: CalculationStatus) {
    this.calculationStatus$.next(state);
  }
}