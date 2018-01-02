import { Component, isDevMode } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { AlbumService } from './album.service';
import { AlbumServiceMock } from './album.service.mock';

@Component({
    selector: 'album-list',
    templateUrl: './album.list.html',
    styleUrls: [ './album.css' ],
    providers: [ {
        provide: AlbumService,
        useFactory(http: HttpClient) {
            return isDevMode()? new AlbumServiceMock(http) : new AlbumService(http);
        },
        deps: [ HttpClient ]
    } ]
})
export class AlbumList {
    private path: string;
    private articles: any[];
    
    constructor(route: ActivatedRoute, albumService: AlbumService) {
        this.path = route.snapshot.params['path'];
        if(this.path) {
            this.articles = albumService.getDirectoryItems(this.path);
        } else {
            this.articles = albumService.getRootDirectoryItems();
        }
    }

}