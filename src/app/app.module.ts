import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';

import { HomePageModule } from './modules/home/module';
import { OrdersModule } from './modules/orders/module';
import { ProductsModule } from './modules/products/module';
import { UserModule } from './modules/user/module';
import { HeaderComponent } from './modules/core/header/header';
import { FooterComponent } from './modules/core/footer/footer';
import { ROUTING } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    AlertModule.forRoot(),
  	ROUTING,
    BrowserModule,
    HomePageModule,
    OrdersModule,
    ProductsModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
