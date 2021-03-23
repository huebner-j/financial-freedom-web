import {Component, OnInit} from '@angular/core';
import {StatusService} from "../../services/status.service";
import {filter, map} from "rxjs/operators";
import {CalculationResultService} from "../../services/calculation-result.service";

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

  constructor(
      private statusService: StatusService,
      private resultService: CalculationResultService) {
  }

  ngOnInit() {
  }

}
