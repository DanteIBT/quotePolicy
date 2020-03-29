import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http: HttpClient) {

  }

   // 
   public viewQuote(policyData: any) {

    return this.http.post(`${environment.apiUrl}/quotePolicy/`, policyData )
    .pipe( map( data => {

      return data;
    })
  ).toPromise();

  }


}
