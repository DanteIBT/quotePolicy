import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor(private http: HttpClient) {

  }

   // Afirme
   public listBrandsAfirme() {

    return this.http.get(`${environment.apiUrl}/catalogues/brands_afirme`)
    .pipe( map( data => {

      return data;
    })
  ).toPromise();

  }

  // ORP
   public listBrandsOrp() {

    return this.http.get(`${environment.apiUrl}/catalogues/brands_orp`)
    .pipe( map( data => {

      return data;
    })
  ).toPromise();

  }

  // Brands
   public listBrands() {

    return this.http.get(`${environment.apiUrl}/catalogues/brands`)
    .pipe( map( data => {

      return data;
    })
  ).toPromise();

  }


}
