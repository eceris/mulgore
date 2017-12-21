import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './routing.module';

import { Mulgore } from './mulgore';
import { Top } from './top/top';
import { Bottom } from './bottom/bottom';
import { Home } from './home/home';
import { AlbumList } from './album/album.list';

@NgModule({
  imports: [
    BrowserModule, AppRoutingModule, HttpModule
  ],
  declarations: [
    Mulgore, Top, Bottom, Home, AlbumList
  ],
  bootstrap: [ Mulgore ]
})
export class AppModule { }
