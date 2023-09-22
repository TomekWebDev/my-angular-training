import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
AllProductsComponent;
import { MyDataService } from './services/my-data.service';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { NoResourceComponent } from './components/no-resource/no-resource.component';

@NgModule({
  declarations: [AppComponent, HomeComponentComponent, AllProductsComponent, ProductViewComponent, NoResourceComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [MyDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
