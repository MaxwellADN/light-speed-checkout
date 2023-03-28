import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UPLOAD_ENDPOINT } from '../constants/api-endpoint.constant';
import { ProductFile } from '../models/product-file.model';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class UploadService extends GenericService<ProductFile> {
  /**
   * 
   * @param {HttpClient} http - HttpClient - The HttpClient instance that will be used to make the HTTP
   * requests.
   */
  constructor(http: HttpClient) {
    super(http, UPLOAD_ENDPOINT);
  }

  /**
   * It takes a FormData object as a parameter, sends it to the server, and returns an Observable of
   * type ProductFile
   * @param {FormData} formData - FormData - The form data that will be sent to the server.
   * @returns The observable of the product file.
   */
  public upload(formData: FormData): Observable<ProductFile> {
    return this.http.post<ProductFile>(this.apiUrl, formData, { headers: this.headers });
  }
}

