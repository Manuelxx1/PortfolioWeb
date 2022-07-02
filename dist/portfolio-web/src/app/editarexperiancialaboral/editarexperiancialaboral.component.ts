import { Component, OnInit } from '@angular/core';
import { EditarService } from '../editar.service';
import { Persona } from '../editar/Persona';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editarexperiancialaboral',
  templateUrl: './editarexperiancialaboral.component.html',
  styleUrls: ['./editarexperiancialaboral.component.css']
})
export class EditarexperiancialaboralComponent implements OnInit {

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

     this.EditarService.editarExperiencia(this.pPersona.dni,this.pPersona.experiencia).subscribe( 
    
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
