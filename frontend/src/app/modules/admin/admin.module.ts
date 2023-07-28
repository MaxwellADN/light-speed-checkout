import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NbActionsModule, NbButtonModule, NbContextMenuModule, NbIconModule, NbLayoutModule, NbMenuModule, NbSidebarModule, NbToastrModule, NbUserModule } from '@nebular/theme';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgbdSortableHeader } from 'src/app/core/directives/sortable.directive';

@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NbLayoutModule,
    NbButtonModule,
    NbIconModule,
    NbContextMenuModule,
    NbMenuModule,
    NbMenuModule.forRoot(),
    NbActionsModule,
    NbUserModule,
    NbToastrModule.forRoot(),
    NbSidebarModule.forRoot(),
  ]
})
export class AdminModule { }
