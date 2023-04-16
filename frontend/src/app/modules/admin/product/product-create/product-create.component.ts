import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { PRODUCT_ENDPOINT } from 'src/app/core/constants/api-endpoint.constant';
import { CREATED_PRODUCT_ID, PRODUCT_STEPPER_INDEX } from 'src/app/core/constants/product.constant';
import { ProductStatusEnum } from 'src/app/core/enums/product-status.enum';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';
import { UploadService } from 'src/app/core/services/upload.service';
import { ToastService } from 'src/app/core/utils/toast.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  /**
 * Html field element
 */
  @ViewChild("fileDropRef", { static: false }) fileDropEl!: ElementRef;
  /**
   * Product file
   */
  public files: any[] = [];
  /**
   * Product formGroup
   */
  public productFormGroup!: FormGroup;
  /**
   * Display a spinner while creating a product
   */
  public saving = false;
  /**
   * Nebular stepper index
   */
  public stepperIndex = this.localStorageStepperIndex ? this.localStorageStepperIndex : 0;
  /**
   * True if the first step is completed
   */
  public formStepCompleted = true;
  /**
   * true if the second step is compled
   */
  public filesStepCompleted = true;
  /**
   * Initial product status
   */
  public productStatus = ProductStatusEnum.DRAFT;
  /**
   * created product or product from database
   */
  public product!: Product;

  /**
   * 
   * @param {FormBuilder} formBuilder - This is an instance of the FormBuilder class.
   * @param {ProductService} productService - This is the service that we created earlier.
   */
  constructor(private formBuilder: FormBuilder,
    private toastService: ToastService,
    private translate: TranslateService,
    private uploadService: UploadService,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.initFormGroup();
  }

  /**
   * It takes a product object, creates a new Product object with the product object's properties, and
   * then sends it to the product service to be saved
   * @param {Product} product - Product: The product object that is being saved.
   */
  public save(product: Product): void {
    const data = new Product({ ...product, status: this.productStatus, stepperIndex: this.stepperIndex });
    const formData = new FormData();
    formData.append('product', JSON.stringify(data));
    this.files.forEach((file) => formData.append('files', file));
    this.productService.createWithFiles(formData).subscribe({
      next: (product) => {
        if (product) {
          this.toastService.showToast('success', this.translate.instant('app.common.http.created'));
        }
      },
      error: () => {
        this.toastService.showToast('danger', this.translate.instant('app.common.http.badRequest'));
      }
    })
  }

  /**
   * We create a new FormGroup object and pass it an object that contains the FormControls we want to
   * use in our form
   */
  private initFormGroup(): void {
    this.productFormGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: '',
      price: ['', [Validators.required]],
      tax: null
    })
  }

  /**
   * It returns the value of the localStorage item with the key PRODUCT_STEPPER_INDEX, converted to a
   * number
   * @returns The value of the localStorage item PRODUCT_STEPPER_INDEX.
   */
  private get localStorageStepperIndex(): number {
    return +localStorage.getItem(PRODUCT_STEPPER_INDEX)!;
  }


  /**
   * on file drop handler
   */
  public onFileDropped($event: any): void {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  public onFileChanged(event: any) {
    this.prepareFilesList(event.target.files);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  public deleteFile(index: number) {
    if (this.files[index].progress < 100) {
      console.log("Upload in progress.");
      return;
    }
    this.files.splice(index, 1);
  }

  /**
   * Simulate the upload process
   */
  private uploadFilesSimulator(index: number): void {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  private prepareFilesList(files: Array<any>): void {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    this.fileDropEl.nativeElement.value = "";
    this.uploadFilesSimulator(0);
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  public formatBytes(bytes: any, decimals = 2) {
    if (bytes === 0) {
      return "0 Bytes";
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  /**
   * It takes the files from the input, creates a formData object, appends the files to the formData
   * object, and sends the formData object to the upload service
   */
  public uploadFiles() {
    if (this.files.length > 0) {
      const formData = new FormData();
      for (const file of this.files) {
        formData.append('files', file, file.name);
      }
      this.uploadService.upload(formData).subscribe({
        next: () => {
          this.toastService.showToast('success', this.translate.instant('app.common.http.uploaded'));
        },
        error: () => {
          this.toastService.showToast('danger', this.translate.instant('app.common.http.badRequest'));
        }
      })
    } else {
      this.toastService.showToast('warning', this.translate.instant('app.product.upload.selectFileWarning'));
    }
  }

}
