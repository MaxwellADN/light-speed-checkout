import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule, NbSelectModule, NbSpinnerModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { NgBreadcrumbModule } from 'ng-breadcrumb';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { BackNavComponent } from './back-nav/back-nav.component';
import { ItemPerPageComponent } from './pagination/item-per-page/item-per-page.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { NgbdSortableHeader } from '../core/directives/sortable.directive';

const components = [
  BackNavComponent,
  ItemPerPageComponent,
  SearchboxComponent,
  NgbdSortableHeader
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    RouterModule,
    NbIconModule,
    NbButtonModule,
    NbInputModule,
    NbCardModule,
    NbIconModule,
    RouterModule,
    NgBreadcrumbModule,
    NbSpinnerModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule,
    NbSelectModule,
    NbFormFieldModule,
  ],
  exports: [...components]
})
export class SharedModule { }
