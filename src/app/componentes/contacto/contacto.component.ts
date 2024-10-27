import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  formularioForm;
  datos_formulario:any;

  constructor(private formBuilder: FormBuilder){
    this.formularioForm = this.formBuilder.group({
      nombre:'',
      apellido: '',
      correo: '',
      telefono: '',
      mensaje: '',
    })
  }
  
  ngOnInit(){
    console.log("Test")
  }

  enviarDatos(){
  this.datos_formulario = this.formularioForm.value;
  console.log(this.datos_formulario)
  }
}
