import {isDevMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './routing.module';

import {Mulgore} from './mulgore';
import {HttpClientConfig} from './common/http.interceptor';
import {Top} from './top/top';
import {Bottom} from './bottom/bottom';
import {Home} from './home/home';
import {AlbumList} from './album/album.list';
import {AlbumThumbnail} from './album/album.thumbnail';
import {AlbumDetail} from './album/album.detail';
import {AlbumService} from './album/album.service';
import {AlbumServiceMock} from './album/album.service.mock';
import {NoteList} from './note/note.list.component';
import {NoteDetail} from './note/note.detail.component';
import {NoteService} from './note/note.service';
import {NoteServiceMock} from './note/note.service.mock';

@NgModule({
    imports: [
        BrowserModule, AppRoutingModule, HttpClientModule
    ],
    declarations: [
        Mulgore, Top, Bottom, Home, AlbumList, AlbumThumbnail, AlbumDetail, NoteList, NoteDetail
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
            return isDevMode() ? new NoteServiceMock(http) : new NoteService(http);
        },
        deps: [HttpClient]
    }
    ],
    bootstrap: [Mulgore]
})
export class AppModule {
}
