import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NoteService} from './note.service';

@Component({
    selector: 'note-list',
    template: `
        <div><img (click)="write()" class="imgButton" src="../../assets/images/preview.png"></div>
        <div class="album">
            <h1>조도영 짱</h1>
        </div>
        <div *ngFor="let note of notes">
            <h1>{{note?.title}}</h1>
        </div>
    `
})
export class NoteList {
    private notes: any[];
    private currentRoutePath: string;

    constructor(private router: Router, route: ActivatedRoute, private noteService: NoteService) {
        let path;
        this.currentRoutePath = router.url;
        route.queryParams.subscribe(params => {
            path = params.path;
        });
        this.getNotes();
    }

    private getNotes() {
        this.noteService.getBundle().subscribe(data => {
            this.notes = data;
        });
    }
    private write() {
        this.router.navigate(['note/write']);
    }

    // private getArticles(path: string) {
    //     if (path) {
    //         this.noteService.getDirectoryItems(path).subscribe(data => {
    //             this.notes = data;
    //         });
    //     } else {
    //         this.noteService.getRootDirectoryItems().subscribe(data => {
    //             this.notes = data;
    //         });
    //     }
    // }
    //
    // private moveArticle(article: any) {
    //     if (article.type === 'DIRECTORY') {
    //         if (this.currentRoutePath.indexOf('/album/folder/nav') > -1) {
    //             this.router.navigate(['album/folder'], { queryParams: { 'path': article.path } });
    //         } else {
    //             this.router.navigate(['album/folder/nav'], { queryParams: { 'path': article.path } });
    //         }
    //     } else {
    //         this.router.navigate(['album/detail'], { queryParams: { 'path': article.path } });
    //     }
    // }
    //
    // private previewAll() {
    //     this.notes.forEach(article => article.preview = true);
    // }
}
