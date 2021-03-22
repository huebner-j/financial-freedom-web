import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationResultComponent } from './calculation-result.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";

describe('CalculationResultComponent', () => {
  let component: CalculationResultComponent;
  let fixture: ComponentFixture<CalculationResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculationResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
