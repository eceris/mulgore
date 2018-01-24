import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AlbumService } from './album.service';

@Component({
    selector: 'album-detail',
    templateUrl: './album.detail.html',
    styleUrls: [ './album.css' ]
})
export class AlbumDetail {
    path: string;
    article: any;
    
    constructor(route: ActivatedRoute, albumService: AlbumService) {
        route.queryParams.subscribe(params => {
            this.path = params.path;
        });
        albumService.getAlbumDetail(this.path).subscribe(data => {
            this.article = data;
        });
    }
}