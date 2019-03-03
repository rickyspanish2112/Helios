import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Declarationtype } from 'src/app/helios-shell/model/declarationtype';

import * as fromReducer from '../../components/declaration/declaraion-type/state/declaration-type.reducer';
import * as fromAction from '../../components/declaration/declaraion-type/state/declaraion-type-action';


// tslint:disable-next-line:max-line-length
import * as declarationTypeActions from '../../components/declaration/declaraion-type/state/declaraion-type-action';

import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.scss']
})
export class DeclarationComponent implements OnInit {
  displayCode$: Observable<boolean>;
  selectedProduct$: Observable<Declarationtype>;
  declarationType$: Observable<Declarationtype[]>;
  errorMessage$: Observable<string>;

  constructor(private store: Store<fromReducer.State>) { }

  ngOnInit() {
    this.store.dispatch(new fromAction.Load());
    this.declarationType$ = this.store.pipe(select(fromReducer.getDeclarationTypes)) as Observable<Declarationtype[]>;
  }

  declarationTypeSelected(type: Declarationtype): void {
    this.store.dispatch(new declarationTypeActions.SetCurrentDeclarationType(type));
  }

  checkChanged(value: boolean): void {
    this.store.dispatch(new declarationTypeActions.ToggleDeclarationTypes(value));
  }

}
