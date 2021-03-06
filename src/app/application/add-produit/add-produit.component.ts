import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProduitsService } from '../produits.service';



@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  constructor(private produitsService:ProduitsService) { }
  submitted:boolean = false;
  identifiant:number;
  libelle:string="";
  message ="";
  ngOnInit() {
   
  }

  onSubmit(frm:NgForm)
  {
    this.submitted =true;
    console.log(frm.value['lib']);
    const ajout = this.produitsService.addProduit(this.identifiant, this.libelle);
    if(ajout)
      this.message="Votre nouveau produit:" +this.libelle + " a bien été ajouté";
    else
      this.message="Le produit d'id "+ this.identifiant+" existe déjà !";
  }

}
