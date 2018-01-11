import { NavigationExtras } from '@angular/router';
import { Action } from '@ngrx/store';

export class Go implements Action {
  readonly type = '[Router] Go';
  constructor(public payload: { path: any[]; query?: object; extras?: NavigationExtras }) {}
}

export class Back implements Action {
  readonly type = '[Router] Back';
}

export class Forward implements Action {
  readonly type = '[Router] Forward';
}
