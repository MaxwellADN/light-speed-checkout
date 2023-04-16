import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent {
  /**
   * Search term
   */
  @Output() public onItemSearch = new EventEmitter<KeyboardEvent>();

  /**
   * Method triggered on input key up
   * @param value search value
   */
  public search(value: KeyboardEvent) {
    this.onItemSearch.emit(value);
  }
}
