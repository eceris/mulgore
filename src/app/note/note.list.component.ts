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
      <h3 (click)="show(note?.id)">{{note?.title}}</h3>
    </div>
  `
})
export class NoteListComponent {
  notes: any[];

  constructor(private router: Router, route: ActivatedRoute, private noteService: NoteService) {
    this.getNotes();
  }

  getNotes() {
    this.noteService.getBundle().subscribe(data => {
      this.notes = data;
    });
  }

  write() {
    this.router.navigate(['note/write']);
  }

  show(id: string) {
    this.router.navigate(['note/'], {queryParams: {'id': id}});
  }

}
