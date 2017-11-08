import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from './home/home';

const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '',  component: Home }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}