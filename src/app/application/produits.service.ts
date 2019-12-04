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

  public getProduitByID(id:number):Produit
  {
    for(let p of this.products)
    {
      if(p.id=== id)
      return p;
    }
  }

  public addProduit(id: number, libelle:string):boolean
  {
   // const id = this.products[this.products.length-1].id +1;
   // const p = new Produit(id,libelle );
   if(this.getProduitByID(id)==null)
      {this.products.push(new Produit(id, libelle));
        return true;
      }    
      return false;
  }
  constructor() { }

}
