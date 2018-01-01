import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { AppRoutingModule } from './routing.module';

import { Mulgore } from './mulgore';
import { HttpClientConfig } from './common/http.interceptor';
import { Top } from './top/top';
import { Bottom } from './bottom/bottom';
import { Home } from './home/home';
import { AlbumList } from './album/album.list';
import { AlbumThumbnail } from './album/album.thumbnail';

@NgModule({
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule
  ],
  declarations: [
    Mulgore, Top, Bottom, Home, AlbumList, AlbumThumbnail
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS, useClass: HttpClientConfig, multi: true
  } ],
  bootstrap: [ Mulgore ]
})
export class AppModule { }
