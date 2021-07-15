import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Router,NavigationStart} from '@angular/router';


import { PatchesService } from '../patches.service';

@Component({
  selector: 'app-patches-list',
  templateUrl: './patches-list.component.html',
  styleUrls: ['./patches-list.component.css']
})
export class PatchesListComponent implements OnInit {

  patches:Patch[]=[];
  constructor(private PatchesService:PatchesService, private router:Router) { }

  ngOnInit(): void {
    this.getPatches();
  }

  public deletePatch(patchId:any) {
    
    if (confirm("Are you sure you want to delete this Patch?, action can not be reversed"))
    {
        console.log("patchId to delete", patchId)
        this.PatchesService.deletePatch(patchId).then(response=>{
          console.log("from delete", response)
          this.router.navigate(['/']);
        }).catch(error=>{
          console.log("error in delete", error)
        });

    } else {

    

     console.log("user not allowed", patchId)

    }
}

  

  public getPatches(): void {

    this.PatchesService.getPatches().then(response=> this.patches=response).catch(
      error=> {
        console.log(error);
      }
    )

  
  }

}



export class Patch {
  name!:string;
  description!: string;
  vendor!: string;
  year!: number;
  attacks!: number
  _id!: string;
  clients!: [{
    name:string,
    os:string,
    status:string
    
  }]
}
