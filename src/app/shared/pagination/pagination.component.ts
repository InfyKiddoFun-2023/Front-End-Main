import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnChanges {
  @Input() pageNumber: number = 0
  @Input() totalPages: number = 0

  @Input() pageSize: number = 0
  @Input() totalItems: number = 0

  @Output() goToPage: EventEmitter<number> = new EventEmitter<number>();
  @Output() goToNextPage: EventEmitter<number> = new EventEmitter<number>();
  @Output() goToPreviousPage: EventEmitter<number> = new EventEmitter<number>();

  public onGoToPage(pageNumber: number) {
    this.goToPage.emit(pageNumber);
  }

  public onGoToNextPage() {
    this.goToNextPage.emit();
  }

  public onGoToPreviousPage() {
    this.goToPreviousPage.emit();
  }

  get pageRangeStart(): number {
    return (this.pageNumber - 1) * this.pageSize + 1;
  }

  get pageRangeEnd(): number {
    if (this.pageNumber * this.pageSize > this.totalItems) {
      return this.totalItems;
    }
    return this.pageNumber * this.pageSize;      
  }

  public pages: number[] = [];

  private getPageNumbers(current: number, total: number): number[] {
    if (total <= 7) {
      return [...Array(total).keys()].map(x => ++x)
    }

    if (current > 5) {
      if (current >= total - 4) {
        return [1, -1, total - 4, total - 3, total - 2, total - 1, total]
      } else {
        return [1, -1, current - 1, current, current + 1, -1, total]
      }
    }

    return [1, 2, 3, 4, 5, -1, total]
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      (changes['pageNumber'] && changes['pageNumber'].currentValue) ||
      (changes['totalPages'] && changes['totalPages'].currentValue)
    ) {
      this.pages = this.getPageNumbers(this.pageNumber, this.totalPages)
    }
  }
}
