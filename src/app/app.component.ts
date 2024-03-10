import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DefectDojoRegistrationComponent} from "../defect-dojo-registration/defect-dojo-registration.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DefectDojoRegistrationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'defectDojoRegister';
}
