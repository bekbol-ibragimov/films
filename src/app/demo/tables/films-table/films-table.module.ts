import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../../core/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../../core/common/list/list.module';
import { MaterialModule } from '../../../core/common/material-components.module';
import { PageModule } from '../../../core/common/page/page.module';
import { FilmsTableRoutingModule } from './films-table-routing.module';
import { FilmsTableComponent } from './films-table.component';
import { CustomerCreateUpdateModule } from './customer-create-update/customer-create-update.module';

@NgModule({
  imports: [
    CommonModule,
    FilmsTableRoutingModule,
    FormsModule,
    MaterialModule,

    // Core
    ListModule,
    CustomerCreateUpdateModule,
    PageModule,
    BreadcrumbsModule
  ],
  declarations: [FilmsTableComponent],
  exports: [FilmsTableComponent]
})
export class FilmsTableModule {
}
