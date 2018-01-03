import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AlbumService } from './album.service';

@Component({
    selector: 'album-list',
    templateUrl: './album.list.html',
    styleUrls: [ './album.css' ]
})
export class AlbumList {
    private path: string;
    private articles: any[];
    
    constructor(route: ActivatedRoute, albumService: AlbumService) {
        route.queryParams.subscribe(params => {
            this.path = params.path;
        });
        if(this.path) {
            albumService.getDirectoryItems(this.path).subscribe(data => {
                this.articles = data;
            });
        } else {
            albumService.getRootDirectoryItems().subscribe(data => {
                this.articles = data;
            });
        }
    }
}