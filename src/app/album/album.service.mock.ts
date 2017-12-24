import { AlbumService } from './album.service';

export class AlbumServiceMock extends AlbumService {

    getRootDirectoryItems() {
        return [
            {"path":"/SAM_5537.jpg","type":"IMAGE"},
            {"path":"/test","type":"DIRECTORY"},
            {"path":"/video","type":"DIRECTORY"}
        ];
    }

    getDirectoryItems(path: string) {
        return [
            {"path":"/test/SAM_5318.jpg","type":"IMAGE"},
            {"path":"/test/SAM_5526.JPG","type":"IMAGE"},
            {"path":"/test/SAM_5533.MP4","type":"BINARY"}
        ];
    }

}