import { Component, OnInit } from '@angular/core';
import { EditarService } from '../editar.service';
import { Persona } from '../editar/Persona';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-experiencia',
  templateUrl: './eliminar-experiencia.component.html',
  styleUrls: ['./eliminar-experiencia.component.css']
})
export class EliminarExperienciaComponent implements OnInit {

 
  pPersona: Persona = new Persona();
  pvalorid:any;
  pDatosenviados: string;
  pDatosEliminados: string;

  constructor(private  EditarService: EditarService,  private router: Router) {}
  
  ngOnInit() {}
  
    //metodo que se ejecuta cuando se envia el formulario
    onSubmitForm(){
      this.commitUser();
    }
     
    commitUser(){
  
     this.EditarService.eliminarExpPorId(this.pPersona.dni).subscribe( 
      
        userData =>{
          this.pvalorid=[userData]});
          this.pDatosEliminados="Datos Eliminados";
 }
  
 
 pdisplayStyle = "block";
  

 closePopup() {
   this.pdisplayStyle = "none";
   this.router.navigate(['/']);
 }

}
