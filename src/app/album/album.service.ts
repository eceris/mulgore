import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AlbumService {
    constructor(private http: HttpClient) {}

    getRootDirectoryItems(): any[] {
        let result: any[] = [];
        this.http.get<any[]>('/api/drive').subscribe(data => {
            result = data;
        });
        return result;
    }

    getDirectoryItems(path: string): any[] {
        let result: any[] = [];
        this.http.get<any[]>('/api/drive' + path).subscribe(data => {
            result = data;
        });
        return result;
    }

}