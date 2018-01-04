import { AlbumService } from './album.service';
import { Observable } from 'rxjs/Observable';

export class AlbumServiceMock extends AlbumService {

    getRootDirectoryItems(): Observable<any[]> {
        return Observable.of([
            {"path":"/SAM_5537.jpg","type":"IMAGE","name":"SAM_5537.jpg"},
            {"path":"/test","type":"DIRECTORY","name":"test"},
            {"path":"/video","type":"DIRECTORY","name":"video"}
        ]);
    }

    getDirectoryItems(path: string): Observable<any[]> {
        return Observable.of([
            {"path":"/test/SAM_5318.jpg","type":"IMAGE","name":"SAM_5318.jpg"},
            {"path":"/test/SAM_5526.JPG","type":"IMAGE","name":"SAM_5526.jpg"},
            {"path":"/test/SAM_5533.MP4","type":"BINARY","name":"SAM_5533.MP4"}
        ]);
    }

    getAlbumDetail(path: string): Observable<any> {
        return Observable.of({"path":"/test/SAM_5318.jpg","type":"IMAGE","name":"SAM_5318.jpg"});
    }

}