import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppRoutingModule } from './routing.module';
import { Mulgore } from './mulgore';
import { Top } from './top/top';
import { Bottom } from './bottom/bottom';
import { Home } from './home/home';

@NgModule({
  imports: [
    BrowserModule, AppRoutingModule
  ],
  declarations: [
    Mulgore, Top, Bottom, Home
  ],
  bootstrap: [ Mulgore ]
})
export class AppModule { }
