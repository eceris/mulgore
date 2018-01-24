import { AlbumService } from './album.service';
import { Observable } from 'rxjs/Observable';

export class AlbumServiceMock extends AlbumService {

    getRootDirectoryItems(): Observable<any[]> {
        return Observable.of([
            {"path":"/SAM_5537.jpg","type":"IMAGE","name":"SAM_5537.jpg"},
            {"path":"/test","type":"DIRECTORY","name":"test"},{"path":"/video","type":"DIRECTORY","name":"video"},
            {"path":"/라라라라123라","type":"DIRECTORY","name":"라라라1111라라"},{"path":"/111","type":"DIRECTORY","name":"111"},
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
            {"path":"/test/SAM_5533.MP4","type":"VIDEO","name":"SAM_5533.MP4"},
            {"path":"/test/20180105_고라파덕","type":"DIRECTORY","name":"20180105_고라파덕"}
        ]);
    }

    getAlbumDetail(path: string): Observable<any> {
        return Observable.of({
            "path": "/test.jpg",
            "type": "IMAGE",
            "name": "test.jpg",
            "metadata": {
                "date": 1500375013000,
                "size": 491375,
                "iso": 40,
                "fNumber": "f/1.9",
                "width": 1152,
                "cameraModel": "SM-A520S",
                "whiteBalanceMode": "Auto white balance",
                "cameraMake": "samsung",
                "height": 864,
                "shutterSpeed": "1/179 sec",
                "flash": "Flash did not fire"
                }
            });
    }

}