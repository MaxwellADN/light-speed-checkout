import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PRODUCT_ENDPOINT } from '../constants/api-endpoint.constant';
import { Product } from '../models/product.model';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends GenericService<Product> {

  /**
   * 
   * @param {HttpClient} http - HttpClient - The HttpClient instance that will be used to make the HTTP
   * requests.
   */
  constructor(http: HttpClient) {
    super(http, PRODUCT_ENDPOINT);
  }
}
