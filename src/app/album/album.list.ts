import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AlbumService } from './album.service';

@Component({
    selector: 'album-list',
    templateUrl: './album.list.html',
    styleUrls: [ './album.css' ]
})
export class AlbumList {
    private articles: any[];
    
    constructor(private router: Router, route: ActivatedRoute, private albumService: AlbumService) {
        let path;
        route.queryParams.subscribe(params => {
            path = params.path;
        });
        this.getArticles(path);
    }

    private getArticles(path: string) {
        if(path) {
            this.albumService.getDirectoryItems(path).subscribe(data => {
                this.articles = data;
            });
        } else {
            this.albumService.getRootDirectoryItems().subscribe(data => {
                this.articles = data;
            });
        }
    }

    private moveArticle(article: any) {
        if(article.type == 'DIRECTORY') {
            this.router.navigate(['album/folder'], { queryParams: { 'path': article.path } });
            this.getArticles(article.path);
        } else {
            this.router.navigate(['album/detail'], { queryParams: { 'path': article.path } });
        }
    }

}