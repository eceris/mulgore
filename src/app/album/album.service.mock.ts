import { AlbumService } from './album.service';
import { Observable } from 'rxjs/Observable';

export class AlbumServiceMock extends AlbumService {

    getRootDirectoryItems(): Observable<any[]> {
        return Observable.of([
            {"path":"/SAM_5537.jpg","type":"IMAGE","name":"SAM_5537.jpg"},
            {"path":"/test","type":"DIRECTORY","name":"test"},{"path":"/video","type":"DIRECTORY","name":"video"},
            {"path":"/라라라라라","type":"DIRECTORY","name":"라라라라라"},{"path":"/111","type":"DIRECTORY","name":"111"},
            {"path":"/^^","type":"DIRECTORY","name":"^^"},{"path":"/20170101_긴이름~~~","type":"DIRECTORY","name":"20170101_긴이름~~~"},
            {"path":"/20170306_여름휴가","type":"DIRECTORY","name":"20170306_여름휴가"},{"path":"/20171215_재롱잔치","type":"DIRECTORY","name":"20171215_재롱잔치"},
            {"path":"/휴대폰백업","type":"DIRECTORY","name":"휴대폰백업"},{"path":"/정렬","type":"DIRECTORY","name":"정렬"},
            {"path":"/test","type":"DIRECTORY","name":"test"},{"path":"/ㅇㅇㅇㅇㅇㅇㅇㅇ","type":"DIRECTORY","name":"ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ"},
            {"path":"/라라라라라","type":"DIRECTORY","name":"라라라라라"},{"path":"/111","type":"DIRECTORY","name":"111"},
            {"path":"/^^","type":"DIRECTORY","name":"^^"},{"path":"/20170101_긴이름~~~~","type":"DIRECTORY","name":"20170101_긴이름~~~긴이름~~~~긴이름~~~~"},
            {"path":"/20170306_여름휴가","type":"DIRECTORY","name":"20170306_여름휴가"},{"path":"/20171215_재롱잔치","type":"DIRECTORY","name":"20171215_재롱잔치"},
            {"path":"/휴대폰백업","type":"DIRECTORY","name":"휴대폰백업"},{"path":"/정렬","type":"DIRECTORY","name":"정렬"}
        ]);
    }

    getDirectoryItems(path: string): Observable<any[]> {
        return Observable.of([
            {"path":"/test/SAM_5318.jpg","type":"IMAGE","name":"SAM_5318.jpg"},
            {"path":"/test/SAM_5526.JPG","type":"IMAGE","name":"SAM_5526.jpg"},
            {"path":"/test/SAM_5533.MP4","type":"BINARY","name":"SAM_5533.MP4"},
            {"path":"/test/20180105_고라파덕","type":"DIRECTORY","name":"20180105_고라파덕"}
        ]);
    }

    getAlbumDetail(path: string): Observable<any> {
        return Observable.of({
            "path": "/test/SAM_5318.jpg",
            "type": "IMAGE",
            "name": "SAM_5318.jpg",
            "metadata": {
                "date": "1507139342000",
                "iso": 100,
                "size": 2845938,
                "width": 5536,
                "height": 3696,
                "fNumber": "f/2.0"
            }
        });
    }

}