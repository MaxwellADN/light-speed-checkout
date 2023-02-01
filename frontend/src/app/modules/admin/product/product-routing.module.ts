import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductCreateComponent } from "./product-create/product-create.component";
import { ProductsComponent } from "./products/products.component";

const routes: Routes = [
  { path: 'list', component: ProductsComponent },
  { path: 'create', component: ProductCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
