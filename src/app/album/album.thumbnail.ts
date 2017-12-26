import { Component, Input } from '@angular/core';

@Component({
    selector: 'album-thumbnail',
    templateUrl: './album.thumbnail.html',
    styleUrls: [ './album.css' ]
})
export class AlbumThumbnail {
    @Input('article') article: any;

}