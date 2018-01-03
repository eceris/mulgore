import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { AppRoutingModule } from './routing.module';

import { Mulgore } from './mulgore';
import { HttpClientConfig } from './common/http.interceptor';
import { Top } from './top/top';
import { Bottom } from './bottom/bottom';
import { Home } from './home/home';
import { AlbumList } from './album/album.list';
import { AlbumThumbnail } from './album/album.thumbnail';
import { AlbumDetail } from './album/album.detail';
import { AlbumService } from './album/album.service';
import { AlbumServiceMock } from './album/album.service.mock';

@NgModule({
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule
  ],
  declarations: [
    Mulgore, Top, Bottom, Home, AlbumList, AlbumThumbnail, AlbumDetail
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS, useClass: HttpClientConfig, multi: true
  }, {
    provide: AlbumService,
    useFactory(http: HttpClient) {
        return isDevMode()? new AlbumServiceMock(http) : new AlbumService(http);
    },
    deps: [ HttpClient ]
  } ],
  bootstrap: [ Mulgore ]
})
export class AppModule { }
