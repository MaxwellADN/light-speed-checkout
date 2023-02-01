import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { PRODUCT_ENDPOINT } from 'src/app/core/constants/api-endpoint.constant';
import { CREATED_PRODUCT_ID, PRODUCT_STEPPER_INDEX } from 'src/app/core/constants/product.constant';
import { ProductStatusEnum } from 'src/app/core/enums/product-status.enum';
import { Product } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';
import { ToastService } from 'src/app/core/utils/toast.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
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
    const data = new Product({ ...product, status: this.productStatus, stepperIndex: this.stepperIndex })
    this.productService.create(data).subscribe({
      next: (product) => {
        if (product) {
          this.toastService.showToast('success', this.translate.instant('app.commons.http.created'));
          this.stepperIndex = product.stepperIndex! + 1;
          this.product = product;
          localStorage.setItem(CREATED_PRODUCT_ID, `${product.id}`);
          localStorage.setItem(PRODUCT_STEPPER_INDEX, `${this.stepperIndex}`);
        }
      },
      error: () => {
        this.toastService.showToast('danger', this.translate.instant('app.commons.http.badRequest'));
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

}
