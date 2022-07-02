import { Component, OnInit } from '@angular/core';
import { EditarService } from '../editar.service';
import { Persona } from './Persona';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

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

     this.EditarService.editar(this.pPersona.dni,this.pPersona.informacion).subscribe( 

        userData =>{
          this.pvalorid=[userData]});
          this.pDatosEditados="Datos Editados"
 }
  
  pdisplayStyle = "block";
  

  closePopup() {
    this.pdisplayStyle = "none";
    this.router.navigate(['/']);
  }

}
