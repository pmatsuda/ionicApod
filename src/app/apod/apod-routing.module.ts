import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApodPage } from './apod.page';

const routes: Routes = [
  { path: '', redirectTo: 'apod', pathMatch: 'full' },
  { path: 'apod', loadChildren: './apod/apod.module#ApodPageModule' },
  { path: 'apod/:date', loadChildren: './apod/apod.module#ApodPageModule' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ApodPageRoutingModule {}
