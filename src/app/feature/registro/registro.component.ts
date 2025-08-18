import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule,FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})

export class RegistroComponent {
  perfil= new FormGroup({
   nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
   apellido: new FormControl('', [Validators.required, Validators.minLength(2)]),
   email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(5)]),
   password: new FormControl('', [Validators.required, Validators.minLength(6)])


 });

 enviar() {
   console.log(this.perfil.value);
 }

}
