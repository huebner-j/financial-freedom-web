import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FinancialFreedomCalculatorService} from "../../services/financial-freedom-calculator.service";
import {StatusService} from "../../services/status.service";
import {CalculationResultService} from "../../services/calculation-result.service";

export class InputData {
  seedCapital: string
  monthlySavingRate: string
  interest: string
  desiredMonthlyIncome: string
}

type InputFormGroup = FormGroup & {value: InputData};

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
  // TODO: define custom validators
  form: InputFormGroup = this.fb.group({
    seedCapital: [
      30000, [Validators.required],
    ],
    monthlySavingRate: [
      200, [Validators.required],
    ],
    interest: [
      7, [Validators.required],
    ],
    desiredMonthlyIncome: [
      5000, [Validators.required],
    ],
  });

  constructor(
      private fb: FormBuilder,
      private calculatorService: FinancialFreedomCalculatorService,
      private statusService: StatusService,
      private resultService: CalculationResultService
  ) { }

  ngOnInit() {
  }

  calculate(value: InputData) {
    this.statusService.setState("SENDING");
    this.calculatorService.calculateFinancialFreedom(value).subscribe(
        (result) => {
          this.statusService.setState("SUCCESS");
          this.resultService.setResult(result);
        }, () => this.statusService.setState("ERROR")
    )
  }
}
