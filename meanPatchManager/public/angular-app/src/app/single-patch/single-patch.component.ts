import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';

import { PatchesService } from '../patches.service';

import { Patch } from '../patches-list/patches-list.component';

@Component({
  selector: 'app-single-patch',
  templateUrl: './single-patch.component.html',
  styleUrls: ['./single-patch.component.css']
})
export class SinglePatchComponent implements OnInit {
  patch!:Patch
   error:string ="";
  err!: boolean;

  constructor(private PatchesService:PatchesService, private route:ActivatedRoute ) { }

  patchId:string = this.route.snapshot.params.patchId;
  
  ngOnInit(): void {
    this.getPatch(this.patchId);
  }

  public getPatch(patchId:string):void {

 this.PatchesService.getPatch(patchId).then(response=>this.patch=response).catch(error =>error);
  }
  

  public succeded(response:Patch):void {
    this.patch = response
  }



}

