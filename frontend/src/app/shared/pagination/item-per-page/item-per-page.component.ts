import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-per-page',
  templateUrl: './item-per-page.component.html',
  styleUrls: ['./item-per-page.component.scss']
})
export class ItemPerPageComponent {
  /**
   * Item per page
   */
  @Input() public size = 10;
  /**
   * Page size change event emitter
   */
  @Output() onPageSizeChange = new EventEmitter<number>();

  /**
   * Pagination page change method
   * @param value 
   */
  public pageSizeChange(value: number) {
    this.size = value;
    this.onPageSizeChange.emit(value);
  }

}
