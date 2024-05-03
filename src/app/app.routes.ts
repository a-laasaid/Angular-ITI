import { CommonEngine } from '@angular/ssr';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Products2Component } from './components/products2/products2.component';
import { ProductDetaileComponent } from './components/products2/product-detaile/product-detaile.component';
import { ProductFormComponent } from './components/products2/product-form/product-form.component';
import { NotFoundpageComponent } from './components/not-foundpage/not-foundpage.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path:'Products', component:Products2Component},
    {path:'Products/:ID', component:ProductDetaileComponent},
    {path:'Products/:ID/edit' , component: ProductFormComponent},
    {path:'**' , component: NotFoundpageComponent} //الترتيب مهم هنا


];
