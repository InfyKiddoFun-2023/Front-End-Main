import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  _roleType: String = 'None';

  get roleType(): String { return this._roleType ?? ''; }

  setRoleType(roleType: String) {
    this._roleType = roleType;
  }
}
