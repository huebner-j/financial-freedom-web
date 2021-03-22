import {Component, OnInit} from '@angular/core';
import {FinancialFreedomCalculation} from "../services/model/calculation-model";
import {StatusService} from "../services/status.service";
import {filter, map, tap} from "rxjs/operators";
import {CalculationResultService} from "../services/calculation-result.service";
import {Observable} from "rxjs";

export interface PeriodicElement {
  name: string;
  position: number;
}

@Component({
  selector: 'app-calculation-result',
  templateUrl: './calculation-result.component.html',
  styleUrls: ['./calculation-result.component.scss']
})
export class CalculationResultComponent implements OnInit {

  isSuccess$ = this.statusService.calculationStatus$.pipe(
      filter(status => status == "SUCCESS"));
  calculationResult$ = this.resultService.calculationResult$;
  yearCalculation$ = this.resultService.calculationResult$.pipe(
      map(result => result.calculation));
  displayedColumns: string[] = ['year', 'seedCapital', 'savedMoney', 'return', 'finalCapital'];

  constructor(private statusService: StatusService, private resultService: CalculationResultService) {
  }

  ngOnInit() {
  }

}
