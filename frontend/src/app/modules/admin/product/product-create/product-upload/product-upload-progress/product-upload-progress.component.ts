import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-upload-progress',
  templateUrl: './product-upload-progress.component.html',
  styleUrls: ['./product-upload-progress.component.scss']
})
export class ProductUploadProgressComponent {
  @Input() progress = 0;
}
