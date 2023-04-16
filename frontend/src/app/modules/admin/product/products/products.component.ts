import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService, NbMenuItem, NbStatusService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { ProductStatusEnum } from 'src/app/core/enums/product-status.enum';
import { DatatableResponseInterface } from 'src/app/core/interfaces/datatable-response.interface';
import { ProductInterface } from 'src/app/core/interfaces/product.interface';
import { SortInterface } from 'src/app/core/interfaces/sort.interface';
import { Product } from 'src/app/core/models/product.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProductService } from 'src/app/core/services/product.service';
import { ToastService } from 'src/app/core/utils/toast.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  /**
   * Use to display a loader
   */
  public loading = false;
  /**
   * Pagination index
   */
  public page = 1;
  /**
   * Page size
   */
  public pageSize = 10;
  /**
   * Search term
   */
  public searchTerm = '';
  /**
   * Products from database 
   */
  public response!: DatatableResponseInterface<Product>;
  /**
   * Table action menu
   */
  public actions: NbMenuItem[] = [
    { title: 'Edit', icon: 'edit-outline' },
    { title: 'Preview', icon: 'globe-outline'  },
    { title: 'Unpublish', icon: 'eye-off-outline'  },
    { title: 'Duplicate', icon: 'copy-outline' },
    { title: 'Delete', icon: 'trash-outline' },
  ];
  /***
   * Timeout function declation
   */
  private timeout!: any;

  /**
   * The constructor function is used to inject the ProductService, TranslateService, AuthService,
   * ActivatedRoute, ToastService, and Router services into the component
   * @param {ProductService} productService - This is the service that will be used to get the products
   * from the server.
   * @param {TranslateService} translate - TranslateService - This is the service that will be used to
   * translate the text on the page.
   * @param {AuthService} authService - This is the service that handles authentication.
   * @param {ActivatedRoute} activatedRoute - This is the route that is currently activated.
   * @param {ToastService} toastService - This is the service that will be used to display the toast
   * messages.
   * @param {Router} router - Router - This is the Angular Router service. We'll use this to navigate
   * to the product details page.
   */
  constructor(private productService: ProductService,
    private translate: TranslateService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private toastService: ToastService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  /**
   * We're calling the search function from the product service, passing in the page, page size, and
   * search term. 
   * If the call is successful, we're setting the loading variable to false and setting the response
   * variable to the result. 
   * If the call is unsuccessful, we're setting the loading variable to false and showing a toast
   * message.
   * @returns The response from the API.
   */
  private getProducts() {
    this.loading = true;
    return this.productService.search(this.page, this.pageSize, this.searchTerm).subscribe({
      next: (result) => {
        this.loading = false;
        this.response = result;
      },
      error: (error) => {
        this.loading = false;
        this.toastService.showToast('danger', this.translate.instant('app.errors.badRequest'))
      }
    });
  }

  /**
   * Methdd that is triggered when use change page size
   * @param size page size
   */
  public pageSizeChange(size: number) {
    this.pageSize = size;
    this.getProducts();
  }

  /**
   * Search products
   * The search is not working properly. 
   * We will fix that in next video
   * @param value search term
   */
  public search(value: KeyboardEvent) {
    clearTimeout(this.timeout);
    var $this = this;
    this.timeout = setTimeout(function () {
      if (value.keyCode != 13) {
        // $this.searchTerm = value;
        console.log(value);
        $this.getProducts();
      }
    })
  }

  /**
   * Sort table
   * @param sort 
   */
  public onSort(sort: any): void {

  }

  /**
   * Set badge color for status
   * @param status 
   * @returns 
   */
  public setBadgeStatus(status: ProductStatusEnum) {
    return status === ProductStatusEnum.DRAFT ? 'dark' : 'success'
  }

  /**
   * Listen to pagination event
   * @param page 
   */
  public onPageChange(page: number) {
    this.page = page;
    this.getProducts();
  }
}
