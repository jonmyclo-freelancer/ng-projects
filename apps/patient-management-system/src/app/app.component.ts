import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PrescriptionComponent } from '@ng-projects/prescription';
import { InputTextModule } from 'primeng/inputtext';

const CODE = '0117173';

@Component({
  standalone: true,
  imports: [RouterModule, PrescriptionComponent, FormsModule, InputTextModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  codeInput = '';

  get isLogin(): boolean {
    return this.codeInput === CODE;
  }
}
