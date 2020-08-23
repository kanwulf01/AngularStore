import { Routes } from '@angular/router';

import { HomePComponent } from '../home-p/home-p.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

export const routes: Routes = [
    {path: 'home', component: HomePComponent},
    {path: 'productD/:id', component: ProductDetailComponent},
  
];