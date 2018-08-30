import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsTableComponent } from './films-table.component';

const routes: Routes = [
  {
    path: '',
    component: FilmsTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsTableRoutingModule {
}
