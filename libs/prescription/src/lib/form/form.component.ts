import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormArray,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'lib-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    InputTextareaModule,
    DividerModule,
    InputNumberModule,
    ButtonModule,
  ],
  templateUrl: './form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  @Output() valueChanged = new EventEmitter();

  readonly form = this.fb.group({
    patient: [null, Validators.required],
    age: [null, Validators.required],
    sex: [null, Validators.required],
    address: [null, Validators.required],
    prescriptions: this.fb.array([this.getPrescriptionForm()]),
  });

  constructor(private readonly fb: FormBuilder) {
    this.form.valueChanges
      .pipe(distinctUntilChanged(), takeUntilDestroyed())
      .subscribe((value) => this.valueChanged.emit(value));
  }

  get prescriptionsFormArray(): FormArray {
    return this.form.get('prescriptions') as FormArray;
  }

  addPrescriptionForm() {
    this.prescriptionsFormArray.push(this.getPrescriptionForm());
  }

  removePrescriptionForm(index: number) {
    this.prescriptionsFormArray.removeAt(index);
  }

  reset() {
    this.form.reset();

    this.prescriptionsFormArray.clear();

    this.prescriptionsFormArray.push(this.getPrescriptionForm());
  }

  private getPrescriptionForm() {
    return this.fb.group({
      generic: [null, Validators.required],
      brand: [null],
      preparation: [null, Validators.required],
      type: [null, Validators.required],
      quantity: [null, Validators.required],
      instruction: [null, Validators.required],
    });
  }
}
