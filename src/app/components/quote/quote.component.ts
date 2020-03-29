import { QuoteService } from 'src/app/services/quote.service';
import { CatalogueService } from 'src/app/services/catalogue.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styles: []
})
export class QuoteComponent implements OnInit {

  userData: FormGroup;

  constructor(private router: Router, 
              private quote: QuoteService, 
              private fb: FormBuilder,
              private catalogue: CatalogueService ) {

    // Call Form Group
    this.createForm();
  }

  ngOnInit(): void {
    // this.viewQuote();
    // this.brandsAfirme();
    this.brands();
  }

  createForm() {
    this.userData = this.fb.group({
      idAgente               : ['93382'],
      idNegocio              : ['43'],
      idProducto             : ['81'],
      idTipoPoliza           : ['83'],
      idEstadoCirculacion    : ['21000'],
      idMunicipioCirculacion : ['21115'],
      codigoPostalCirculacion: ['72000'],
      idLineaNegocio         : ['755'],
      idMarca                : ['548'],
      modelo                 : ['2017'],
      idEstilo               : ['03539'],
      idPaquete              : ['1'],
      idFormaPago            : ['3']
    });
  }

  // Send information
  public viewQuote() {
    // console.log(this.userData.value);

    this.quote.viewQuote(this.userData.value).then ( ( data: any ) => {
      // console.log(typeof data);
      console.log(data);
      // console.log(data.coberturas);
    }, (err) => {
      console.log(err);

    });
  }

  public brandsAfirme() {

    this.catalogue.listBrandsAfirme().then ( ( data: any ) => {
      console.log(data);
    }, (err) => {
      console.log(err);

    });
  }

  public brands() {

    this.catalogue.listBrands().then ( ( data: any ) => {
      console.log(data);
    }, (err) => {
      console.log(err);

    });
  }



}
