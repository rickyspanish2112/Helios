import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Declarationtype } from 'src/app/helios-shell/model/declarationtype';
import { Badge } from 'src/app/helios-shell/model/badge';

import * as fromDeclarationTypeActions from '../../../main-shell/components/declaration/declaraion-type/state/declaraion-type-action';
import * as fromDeclaraionType from '../../components/declaration/declaraion-type/state/';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-declaration',
  templateUrl: './declaration-shell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeclarationShellComponent implements OnInit {
  errorMessage$: Observable<string>;
  displayTypes$: Observable<boolean>;
  declarationTypes$: Observable<Declarationtype[]>;
  badges$: Observable<Badge[]>;
  selectedDeclarationType$: Observable<Declarationtype>;
  selectedBadge$: Observable<Badge>;
  traderReference$: Observable<string>;

  constructor(private store: Store<fromDeclaraionType.State>) {}

  ngOnInit() {
    this.store.dispatch(new fromDeclarationTypeActions.LoadDeclarationType());
    this.store.dispatch(new fromDeclarationTypeActions.LoadBadges());

    this.errorMessage$ = this.store.pipe(select(fromDeclaraionType.getError));
    this.displayTypes$ = this.store.pipe(
      select(fromDeclaraionType.getToggleDeclarationTypes)
    );
    this.declarationTypes$ = this.store.pipe(
      select(fromDeclaraionType.getDeclarationTypes)
    );

    this.selectedDeclarationType$ = this.store.pipe(
      select(fromDeclaraionType.getCurrentDeclarationType),
      tap(x => console.log('About to fetch current declaration type from store', x))
    );

    this.badges$ = this.store.pipe(select(fromDeclaraionType.getBadges));

    this.selectedBadge$ = this.store.pipe(
      select(fromDeclaraionType.getCurrentBadge),
      tap(x => console.log('About to fetch current badge from store', x))
    );

    this.traderReference$ = this.store.pipe(
      select(fromDeclaraionType.getTraderReference)
    );
  }

  checkChanged(value: boolean): void {
    console.log('About to dispatch toggle Display Declaration Types');
    this.store.dispatch(
      new fromDeclarationTypeActions.ToggleDeclarationTypes(value)
    );
  }

  onBlurTraderReferenceChange(value: string) {
    console.log('About to dispatch Set Trader Reference');
    this.store.dispatch(
      new fromDeclarationTypeActions.SetTraderReference(value)
    );
  }

  badgeCodeSelected(value: Badge) {
    console.log('About to dispatch Set Current Badge', value);
    this.store.dispatch(new fromDeclarationTypeActions.SetCurrentBadge(value));
  }

  declarationTypeSelected(value: Declarationtype) {
    console.log('About to dispatch Set Current Declaration Type', value);
    this.store.dispatch(new fromDeclarationTypeActions.SetCurrentDeclarationType(value));
  }
}
