import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { NbButtonModule, NbCardModule, NbContextMenuModule, NbIconModule, NbInputModule, NbSelectModule, NbSpinnerModule, NbStepperModule, NbToastrModule } from '@nebular/theme';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { ProductRoutingModule } from './product-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastService } from 'src/app/core/utils/toast.service';
import { ProductUploadProgressComponent } from './product-create/product-upload-progress/product-upload-progress.component';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdSortableHeader } from 'src/app/core/directives/sortable.directive';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductCreateComponent,
    ProductUploadProgressComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NbCardModule,
    SharedModule,
    TranslateModule,
    ReactiveFormsModule,
    NbInputModule,
    NbSelectModule,
    NbSpinnerModule,
    NbButtonModule,
    NbStepperModule,
    NbIconModule,
    NbContextMenuModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    NbToastrModule.forRoot(),
  ],
  providers: [ToastService]
})
export class ProductModule { }
