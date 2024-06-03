import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrescriptionComponent } from '@ng-projects/prescription';

@Component({
  standalone: true,
  imports: [RouterModule, PrescriptionComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
