import {NoteService} from './note.service';
import {Observable} from 'rxjs/Observable';

export class NoteServiceMock extends NoteService {
    get(id: string): Observable<any> {
        return Observable.of({'content': '컨텐츠1', 'id': 1, 'tags': [{'id': 1, 'name': 'java'}], 'title': '제목1'});
    }
    getBundle(): Observable<any[]> {
        return Observable.of([
            {'content': '컨텐츠1', 'id': 1, 'tags': [{'id': 1, 'name': 'java'}], 'title': '제목1'},
            {'content': '컨텐츠2', 'id': 2, 'tags': [{'id': 2, 'name': 'html'}], 'title': '제목2'},
            {'content': '컨텐츠3', 'id': 3, 'tags': [{'id': 1, 'name': 'java'}, {'id': 2, 'name': 'html'}], 'title': '제목3'}]);
    }

    create(): Observable<any> {
        return Observable.of({'content': '컨텐츠1', 'id': 1, 'tags': [{'id': 1, 'name': 'java'}], 'title': '제목1'});
    }

    update(): Observable<any> {
        return Observable.of({'content': '컨텐츠1', 'id': 1, 'tags': [{'id': 1, 'name': 'java'}], 'title': '제목1'});
    }

    delete(path: string): Observable<any> {
        // let params = new HttpParams().set('path', path);
        return Observable.of({'content': '컨텐츠1', 'id': 1, 'tags': [{'id': 1, 'name': 'java'}], 'title': '제목1'});
    }
}
