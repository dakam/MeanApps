import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';



import { Patch } from './patches-list/patches-list.component';

@Injectable({
  providedIn: 'root'
})
export class PatchesService {

  private baseUrl:string = "http://localhost:8000/api/";

  constructor(private http:HttpClient) { }

  public getPatches(): Promise<Patch[]> {
     const url:string = this.baseUrl+"patches";

    return this.http.get(url).toPromise().then(
      response => {
        console.log(response)
       return  response as Patch[]
      }
      ).catch(error=> {
        console.log("err=", error)
        return error
      }
        )

  }

  public deletePatch(patchId:string): Promise<any> {
    
    const url:string = this.baseUrl+"patches/"+patchId;
    return this.http.delete(url).toPromise().then(
      response => {
        console.log(response)
       return  response 
      }
      ).catch(error=> {
        console.log("err=", error)
        return error
      }
        )
  }


  public addPatch(newPatch:{}): Promise<any> {
    console.log("new patch to be added=", newPatch)
    const url:string = this.baseUrl+"patches";
    

    return this.http.post(url, newPatch).toPromise().then(
      response => {
        console.log(response)
       return  response 
      }
      ).catch(error=> {
        console.log("err=", error)
        return error
      }
        )

  }

  public getPatch(id:string): Promise<Patch> {
    const url:string = this.baseUrl+"patches/"+id;

   return this.http.get(url).toPromise().then(
     response => {
       console.log(response)
      return  response as Patch
     }
     ).catch(error=> {
       console.log("err=", error)
       return error
     }
       )

 }
}


