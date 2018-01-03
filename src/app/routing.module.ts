import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from './home/home';
import { AlbumList } from './album/album.list';
import { AlbumDetail } from './album/album.detail';

const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: Home },
    { path: 'album', component: AlbumList },
    { path: 'album/folder/:path', component: AlbumList },
    { path: 'album/detail/:path', component: AlbumDetail }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}