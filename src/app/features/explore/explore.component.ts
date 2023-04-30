import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html'
})
export class ExploreComponent {  
  constructor(private router: Router) { }

  private _searchString: string = '';
  get searchString(): String { return this._searchString ?? ''; }

  setSearchString(searchString: string) {
    this._searchString = searchString;
    this.router.navigate(['/explore/browse'], { queryParams: { search: searchString } })
  }
}
