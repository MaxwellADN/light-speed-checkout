import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NbCardModule, NbFormFieldModule, NbInputModule } from '@nebular/theme';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbdSortableHeader } from 'src/app/core/directives/sortable.directive';


@NgModule({
  declarations: [
    UserProfileComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NbCardModule,
    SharedModule,
    ReactiveFormsModule,
    NbInputModule,
    NbFormFieldModule,
    TranslateModule
  ]
})
export class UserModule { }
