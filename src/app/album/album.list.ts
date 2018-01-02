import { Component, isDevMode, OnInit } from '@angular/core';
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
export class AlbumList implements OnInit {
    private path: string;
    private articles: any[];
    
    constructor(private route: ActivatedRoute, private albumService: AlbumService) {
    }

    ngOnInit() {
        this.path = this.route.snapshot.params['path'];
        if(this.path) {
            this.articles = this.albumService.getDirectoryItems(this.path);
        } else {
            this.articles = this.albumService.getRootDirectoryItems();
        }
    }
}