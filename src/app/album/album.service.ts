import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AlbumService {
    constructor(private http: HttpClient) {}

    getRootDirectoryItems(): Observable<any[]> {
        return this.http.get<any[]>('/api/drive');
    }

    getDirectoryItems(path: string): Observable<any[]> {
        return this.http.get<any[]>('/api/drive' + path);
    }

}