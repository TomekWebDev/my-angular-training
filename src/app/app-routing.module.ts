import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { NoResourceComponent } from './components/no-resource/no-resource.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { productByIdGuard } from './guards/my-guards';

const routes: Routes = [
  {
    path: 'all-products',
    component: AllProductsComponent,
    canActivateChild: [productByIdGuard],
    children: [
      {
        path: 'product/:id',
        component: ProductViewComponent,
      },
    ],
  },
  {
    path: 'no-resource',
    component: NoResourceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
