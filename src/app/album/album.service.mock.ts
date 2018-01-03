import { AlbumService } from './album.service';
import { Observable } from 'rxjs/Observable';

export class AlbumServiceMock extends AlbumService {

    getRootDirectoryItems(): Observable<any[]> {
        return Observable.of([
            {"path":"/SAM_5537.jpg","type":"IMAGE"},
            {"path":"/test","type":"DIRECTORY"},
            {"path":"/video","type":"DIRECTORY"}
        ]);
    }

    getDirectoryItems(path: string): Observable<any[]> {
        return Observable.of([
            {"path":"/test/SAM_5318.jpg","type":"IMAGE"},
            {"path":"/test/SAM_5526.JPG","type":"IMAGE"},
            {"path":"/test/SAM_5533.MP4","type":"BINARY"}
        ]);
    }

    getAlbumDetail(path: string): Observable<any> {
        return Observable.of({"path":"/test/SAM_5318.jpg","type":"IMAGE"});
    }

}