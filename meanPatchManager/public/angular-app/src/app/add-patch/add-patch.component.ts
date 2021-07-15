import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {NgForm} from '@angular/forms';

import { Patch } from '../patches-list/patches-list.component';
import { PatchesService } from '../patches.service';


@Component({
  selector: 'app-add-patch',
  templateUrl: './add-patch.component.html',
  styleUrls: ['./add-patch.component.css']
})
export class AddPatchComponent implements OnInit {



  error!:string;
  message!:string;
  err:boolean=false;
  success:boolean=false;
  name!:string;


  constructor(private PatchesService:PatchesService) {

  

   }

  ngOnInit(): void {
  }


  public addPatch(form:any):void {

    console.log("Form Submitted!",form);

  const newPatch = {
      name:form.value.name,
      description:form.value.description,
      vendor:form.value.vendor,
      year:form.value.year,

    }

    console.log("newP", newPatch)

    this.PatchesService.addPatch(newPatch).then(response=>{

      console.log("added patch", response["status"] )

      if(response["status"]) {
        this.err=true;
        this.message="";
        this.error="Error occured while adding Patch details->"+response.message;
        this.success =false;

      } else {

        this.err=false;
        this.message="Added new Patch Successfully";
        this.success =true;
        this.name="";
        form.reset();

      }
   
    

    })
    .catch(error=>{
      console.log("error", error )
      this.err=true;
      this.message="";
      this.error="Error occured while adding Patch details->"+error
      

    })
 
    

  }

}
