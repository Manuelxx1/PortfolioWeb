import { Component, OnInit } from '@angular/core';
import { EditarService } from '../editar.service';
import { Persona } from '../editar/Persona';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {
  pPersona: Persona = new Persona();
  pvalorid:any;
  pDatosEditados: string;

  constructor(private  EditarService: EditarService,  private router: Router) {}
  
  ngOnInit() {}
  
    //metodo que se ejecuta cuando se envia el formulario
    onSubmitForm(){
      this.commitUser();
    }
     
    commitUser(){
 
     this.EditarService.editarEducacion(this.pPersona.dni,this.pPersona.educacion).subscribe( 
       
        userData =>{
          this.pvalorid=[userData]});
          this.pDatosEditados="Datos Editados";
 }
  
  pdisplayStyle = "block";
  
  
  closePopup() {
    this.pdisplayStyle = "none";
    this.router.navigate(['/']);
  }


}
