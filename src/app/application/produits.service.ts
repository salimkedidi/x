import { Injectable } from '@angular/core';
import { Produit } from './Produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  products =[
    new Produit(15, 'montre'),
    new Produit(32, 'cartable'),
    new Produit(45, 'cahier'),
    new Produit(96, 'tablier')
  ]

  public getProduitByID(id:number)
  {
    for(let p of this.products)
    {
      if(p.id=== id)
      return p;
    }
  }
  constructor() { }

}
