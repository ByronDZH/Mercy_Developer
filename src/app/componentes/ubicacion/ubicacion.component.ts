import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrl: './ubicacion.component.css'
})
export class UbicacionComponent {
  formularioForm;
  datos_formulario:any;

  constructor(private formBuilder: FormBuilder){
    this.formularioForm = this.formBuilder.group({
      nombre:'',
      apellido: '',
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
