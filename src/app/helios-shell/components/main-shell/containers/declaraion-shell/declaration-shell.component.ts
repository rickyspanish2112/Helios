import { Component, OnInit } from '@angular/core';

import { Declarationtype } from 'src/app/helios-shell/model/declarationtype';
import { Badge } from 'src/app/helios-shell/model/badge';
import { ListService } from 'src/app/helios-shell/listservice.service';

import * as fromDeclarationTypeActions from '../../../main-shell/components/declaration/declaraion-type/state/declaraion-type-action';
import * as fromDeclaraionType from '../../components/declaration/declaraion-type/state/declaration-type.reducer';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-declaration',
  templateUrl: './declaration-shell.component.html',
  styleUrls: ['./declaration-shell.component.scss']
})
export class DeclarationShellComponent implements OnInit {
  errorMessage$: Observable<string>;
  displayTypes$: Observable<boolean>;
  declarationTypes$: Observable<Declarationtype[]>;
  badges$: Observable<Badge[]>;
  selectedDeclarationType$: Observable<Declarationtype>;
  selectedBadge$: Observable<Badge>;
  traderReference$: Observable<string>;

  constructor(private listService: ListService,
              private store: Store<fromDeclaraionType.State>) { }

  ngOnInit() {

    this.store.dispatch(new fromDeclarationTypeActions.Load());

    this.errorMessage$ = this.store.pipe(select(fromDeclaraionType.getError));
    this.displayTypes$ = this.store.pipe(select(fromDeclaraionType.getToggleDeclarationTypes));
    this.declarationTypes$ = this.store.pipe(select(fromDeclaraionType.getDeclarationTypes));
    this.selectedDeclarationType$ = this.store.pipe(select(fromDeclaraionType.getCurrentDeclarationType));
    this.selectedBadge$ = this.store.pipe(select(fromDeclaraionType.getCurrentBadge));
    this.traderReference$ = this.store.pipe(select(fromDeclaraionType.getTraderReference));
   }

   checkChanged(value: boolean): void {
    console.log('About to dispatch toggle Display Declaration Types');
    this.store.dispatch(
      new fromDeclarationTypeActions.ToggleDeclarationTypes(value)
    );
  }

  onSelecedBadgeCodeChange(event) {
    console.log('About to dispatch Set Current Badge');
    this.store.dispatch(new fromDeclarationTypeActions.SetCurrentBadge(event.source.value));
  }

  onSelectedDeclarationTypeChange(event) {
    console.log('About to dispatch Set Current Declaration Type');
    this.store.dispatch(new fromDeclarationTypeActions.SetCurrentDeclarationType(event.source.value));
  }

  onBlurTraderReferenceChange(value: string){
    console.log('About to dispatch Set Trader Reference');
    this.store.dispatch(new fromDeclarationTypeActions.SetTraderReference(value));
  }
}
