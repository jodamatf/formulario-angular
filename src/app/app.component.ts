import { Component } from '@angular/core';
import { ReactiveFormsModule,FormControl, FormGroup } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { RegistroComponent } from './feature/registro/registro.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RegistroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {


}
