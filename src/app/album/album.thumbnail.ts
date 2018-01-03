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
        this.router.navigate(['album/detail'], { queryParams: { 'path': path } });
    }
    
    private moveFolder(path: string) {
        this.router.navigate(['album/folder'], { queryParams: { 'path': path } });
    }
}