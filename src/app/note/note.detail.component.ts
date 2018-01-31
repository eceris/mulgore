import {ActivatedRoute, Router} from '@angular/router';
import {NoteService} from './note.service';
import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';

@Component({
  selector: 'app-note',
  template: `
    <h1>글쓰기</h1>
    <textarea *ngIf="isNew()" id="{{elementId}}"></textarea>
    <button *ngIf="isNew()" (click)="save()">저장</button>
    <h2 *ngIf="!isNew()" id="title">{{note?.title}}</h2>
    <div *ngIf="!isNew()" id="contents">{{note?.content}}</div>
  `
})
export class NoteDetailComponent implements AfterViewInit, OnDestroy {

  private currentRoutePath: string;
  private id: string;
  private note: string;

  constructor(private router: Router, route: ActivatedRoute, private noteService: NoteService) {
    this.currentRoutePath = router.url;
    route.queryParams.subscribe(params => {
      this.id = params.id;
    });
  }

  @Input() elementId: String = 'test';
  @Output() onEditorKeyup = new EventEmitter<any>();
  editor;

  ngAfterViewInit() {
    console.log("test");
    if (this.isNew()) {
      tinymce.init({
        selector: '#' + this.elementId,
        plugins: ['link', 'paste', 'table'],
        skin_url: 'assets/skins/lightgray',
        setup: editor => {
          this.editor = editor;

          editor.on('keyup', () => {
            const content = editor.getContent();
            this.onEditorKeyup.emit(content);
          });
        },
      });
    } else {
      this.getNote(this.id);
    }
  }

  ngOnDestroy() {
    if (this.isNew()) {
      tinymce.remove(this.editor);
    }
  }

  isNew() {
    if (this.currentRoutePath.indexOf('/note/write') > -1) {
      return true;
    }
    return false;
  }

  private getNote(id: string) {
    this.noteService.get(id).subscribe(data => {
      this.note = data;
    });
  }

  private save() {
    this.noteService.create(this.editor.getContent()).subscribe(data => {
      console.log(data);
      this.router.navigate(['note']);
    });
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
