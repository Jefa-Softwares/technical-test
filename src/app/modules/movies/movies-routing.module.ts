import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './core/app-home/app-home.component';

const routes: Routes = [
  {
    path: '',
    component: AppHomeComponent,
  },
  {
    path: ':id',
    component: AppHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
