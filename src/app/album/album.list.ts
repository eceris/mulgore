import { Component } from '@angular/core';
import { AlbumService } from './album.service';

@Component({
    selector: 'album-list',
    templateUrl: './album.list.html',
    styleUrls: [ './album.css' ],
    providers: [ AlbumService ]
})
export class AlbumList {
    constructor(albumService: AlbumService) {
        
    }
}