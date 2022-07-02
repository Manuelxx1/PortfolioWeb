import { Component, OnInit } from '@angular/core';
import { EditarService } from '../editar.service';
import { Persona } from '../editar/Persona';
import { Router } from '@angular/router';
@Component({
  selector: 'app-eliminar-educacion',
  templateUrl: './eliminar-educacion.component.html',
  styleUrls: ['./eliminar-educacion.component.css']
})
export class EliminarEducacionComponent implements OnInit {
 
  pPersona: Persona = new Persona();
  pvalorid:any;
  pDatosEliminados: string;

  constructor(private  EditarService: EditarService,  private router: Router) {}
  
  ngOnInit() {}
  
    //metodo que se ejecuta cuando se envia el formulario
    onSubmitForm(){
      this.commitUser();
    }
     
    commitUser(){

     this.EditarService.eliminarEducacionPorId(this.pPersona.dni).subscribe( 
     
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
