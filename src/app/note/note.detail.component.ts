import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NoteService} from './note.service';

@Component({
    selector: 'note',
    template: `
        <h1>글쓰기</h1>
    `
})
export class NoteDetail {
    private notes: any[];
    private currentRoutePath: string;

    constructor(private router: Router, route: ActivatedRoute, private noteService: NoteService) {
        let path;
        this.currentRoutePath = router.url;
        route.queryParams.subscribe(params => {
            path = params.path;
        });
    }
    private getNote() {
        this.noteService.getBundle().subscribe(data => {
            this.notes = data;
        });
    }
    private save() {
    }
}
