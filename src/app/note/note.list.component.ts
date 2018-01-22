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
}
