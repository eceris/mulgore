import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode} from '@angular/core';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './routing.module';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';

import {HttpClientConfig} from './common/http.interceptor';
import {Top} from './top/top';
import {Bottom} from './bottom/bottom';
import {Home} from './home/home';
import {AlbumList} from './album/album.list';
import {AlbumThumbnail} from './album/album.thumbnail';
import {AlbumDetail} from './album/album.detail';
import {AlbumService} from './album/album.service';
import {AlbumServiceMock} from './album/album.service.mock';
import {NoteListComponent} from './note/note.list.component';
import {NoteDetailComponent} from './note/note.detail.component';
import {NoteService} from './note/note.service';
import {NoteServiceMock} from './note/note.service.mock';

@NgModule({
  declarations: [
    AppComponent, Top, Bottom, Home, AlbumList, AlbumThumbnail, AlbumDetail, NoteListComponent, NoteDetailComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: HttpClientConfig, multi: true
  }, {
    provide: AlbumService,
    useFactory(http: HttpClient) {
      return isDevMode() ? new AlbumServiceMock(http) : new AlbumService(http);
    },
    deps: [HttpClient]
  }, {
    provide: NoteService,
    useFactory(http: HttpClient) {
      return /*isDevMode() ? new NoteServiceMock(http) : */new NoteService(http);
    },
    deps: [HttpClient]
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
