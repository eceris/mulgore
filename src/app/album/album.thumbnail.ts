import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'album-thumbnail',
    templateUrl: './album.thumbnail.html',
    styleUrls: [ './album.css' ]
})
export class AlbumThumbnail {
    @Input('article') article: any;

    constructor(private router: Router) {}

    private moveDetail(path: string) {
        this.router.navigateByUrl('album/detail' + path);
    }
    
    private moveFolder(path: string) {
        this.router.navigateByUrl('album/folder' + path);
    }
}