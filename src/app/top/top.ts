import { Component } from '@angular/core';

@Component({
    selector: 'top',
    templateUrl: './top.html',
    styleUrls: ['./top.css']
})
export class Top {
    private moveLogin() {
        window.location.href = '/api/auth/login';
    }
}