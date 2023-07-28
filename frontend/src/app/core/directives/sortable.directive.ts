import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { SortEvent } from '../interfaces/sort-event.interface';
import { SortDirection } from '../types/sort-direction.type';
import { rotate } from '../functions/sort-rotation.function';

@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
export class NgbdSortableHeader {
  /**
   * Sort event emitter
   */
  @Output() sort = new EventEmitter<SortEvent>();
  /**
   * Field to sort
   */
  @Input() sortable!: string;
  /**
   * Sort direction
   */
  @Input() direction: SortDirection = "";

  /**
   * The function rotates the direction of a sortable column and emits an event with the updated
   * direction.
   */
  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({ column: this.sortable, direction: this.direction })
  }

}

