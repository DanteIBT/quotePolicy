import { Routes } from '@angular/router';
import { QuoteComponent } from './components/quote/quote.component';


export const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '' },
    { path: 'quote', component: QuoteComponent }
];
