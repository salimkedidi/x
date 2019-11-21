import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  lesProduits =[
    {id:1, nom:'téléphone', prix:300},
    {id:2, nom:'pc', prix:1250},
    {id:3, nom:'réveil', prix:18}
  ]

  public getProduitByID(id:number)
  {
    for(let p of this.lesProduits)
    {
      if(p.id=== id)
      return p;
    }
  }
  constructor() { }

}
