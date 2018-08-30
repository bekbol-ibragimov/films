import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: 'app/demo/tables/films-table/films-table.module#FilmsTableModule',
        pathMatch: 'full'
      },
      {
        path: 'tables/films-table',
        loadChildren: 'app/demo/tables/films-table/films-table.module#FilmsTableModule',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule {
}
