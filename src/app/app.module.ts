import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {SublinkComponent} from "./components/sublink/sublink.component";

import { HttpClientModule } from '@angular/common/http'
import {OffersContainerComponent} from "./components/Offers-container/Offers-container.component";
import { SwiperModule } from 'swiper/angular';
import {OfferComponent} from "./components/offer/offer.component";
import {CategoryComponent} from "./components/Category/Category.component";
import {FavOffersComponent} from "./components/favOffers/favOffers.component";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SublinkComponent,
    OffersContainerComponent,
    OfferComponent,
    CategoryComponent,
    FavOffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
