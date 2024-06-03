import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PrescriptionInterface } from '../prescription';

@Component({
  selector: 'lib-print',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './print.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrintComponent {
  @Input({ required: true }) prescription?: PrescriptionInterface;

  readonly date = new Date();
}
