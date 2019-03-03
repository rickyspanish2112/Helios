import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Declarationtype } from '../../model/declarationtype';

// tslint:disable-next-line:max-line-length
import * as declarationTypeActions from '../../../helios-shell/components/main-shell/components/declaration/declaraion-type/state/declaraion-type-action';
import * as fromRoot from '../../state/app-state';

import { Store, select } from '@ngrx/store';
import { ListService } from '../../listservice.service';

@Component({
  selector: 'app-main-shell',
  templateUrl: './main-shell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainShellComponent implements OnInit {
  displayCode$: Observable<boolean>;
  selectedProduct$: Observable<Declarationtype>;
  declarationType$: Observable<Declarationtype[]>;
  errorMessage$: Observable<string>;

  constructor(private store: Store<fromRoot.State>, private listService: ListService) { }

  ngOnInit() {
    this.store.dispatch(new declarationTypeActions.Load());
    this.products$ = this.store.pipe(select());


  }

  declarationTypeSelected(type: Declarationtype): void {
    this.store.dispatch(new declarationTypeActions.SetCurrentDeclarationType(type));
  }

  checkChanged(value: boolean): void {
    this.store.dispatch(new declarationTypeActions.ToggleDeclarationTypes(value));
  }



}
