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

    private isLoggedIn() {
        let isLoggedIn = false;
        let cookies = document.cookie.split(';');
        cookies.forEach(cookie => {
            if(cookie.startsWith("KEY_AUTH_COOKIE=")) {
                isLoggedIn = true;
            }
        });
        return isLoggedIn;
    }
}