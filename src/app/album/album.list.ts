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
    private currentRoutePath: string;
    
    constructor(private router: Router, route: ActivatedRoute, private albumService: AlbumService) {
        let path;
        this.currentRoutePath = router.url;
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
            if(this.currentRoutePath.indexOf("/album/folder/nav") > -1) {
                this.router.navigate(['album/folder'], { queryParams: { 'path': article.path } });
            } else {
                this.router.navigate(['album/folder/nav'], { queryParams: { 'path': article.path } });
            }
        } else {
            this.router.navigate(['album/detail'], { queryParams: { 'path': article.path } });
        }
    }

    private previewAll() {
        this.articles.forEach(article => article.preview = true);
    }

}