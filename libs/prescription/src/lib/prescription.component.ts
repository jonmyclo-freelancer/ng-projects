import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { FormComponent } from './form/form.component';
import { PrescriptionInterface } from './prescription';
import { PrintComponent } from './print/print.component';

@Component({
  selector: 'lib-prescription',
  standalone: true,
  imports: [CommonModule, FormComponent, PrintComponent, ButtonModule],
  templateUrl: './prescription.component.html',
  styleUrl: './prescription.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrescriptionComponent {
  prescription?: PrescriptionInterface;

  constructor(private readonly title: Title) {
    this.title.setTitle('Prescription');
  }

  print() {
    window.print();
  }
}
