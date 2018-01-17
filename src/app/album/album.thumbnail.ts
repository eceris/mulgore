import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'album-thumbnail',
    templateUrl: './album.thumbnail.html',
    styleUrls: [ './album.css' ]
})
export class AlbumThumbnail {
    @Input('article') article: any;
    @Output() clickArticle: EventEmitter<any> = new EventEmitter();

    private move() {
        this.clickArticle.emit(this.article);
    }

    private preview() {
        if(!this.article.preview) {
            this.article.preview = true;
        } 
    }
    
}