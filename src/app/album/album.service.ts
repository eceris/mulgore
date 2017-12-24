import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AlbumService {
    constructor(private http: Http) {}

    getRootDirectoryItems(): any[] {
        //return this.http.get('/api/drive');
        return [];
    }

    getDirectoryItems(path: string): any[] {
        //return this.http.get('/api/drive/directory/' + path);
        return [];
    }

}