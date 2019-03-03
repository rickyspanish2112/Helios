import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Declarationtype } from 'src/app/helios-shell/model/declarationtype';
import { Badge } from 'src/app/helios-shell/model/badge';
import { ListService } from 'src/app/helios-shell/listservice.service';

import * as fromDeclarationTypeActions from '../../../components/declaration/declaraion-type/state/declaraion-type-action';
import * as fromDeclaraionType from '../../declaration/declaraion-type/state/declaration-type.reducer';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-declaration-type',
  templateUrl: './declaration-type.component.html',
  styleUrls: ['./declaration-type.component.scss']
})
export class DeclarationTypeComponent implements OnInit {
  customCollapsedHeight = '40px';
  customExpandedHeight = '40px';

  selectedDeclarationType: Declarationtype;
  pageTitle = 'Declaraiont Type';
  declarationTypes: Declarationtype[];
  errorMessage: any;
  badges: Badge[];
  displayTypes: boolean;
  selectedBadge: Badge;
  traderReference: string;

  constructor(
    private listService: ListService,
    private store: Store<fromDeclaraionType.State>
  ) {}

  ngOnInit(): void {
    this.listService.getDeclarationTypes().subscribe(
      data => {
        this.declarationTypes = data;
      },
      error => (this.errorMessage = error as any)
    );

    this.listService.getBadges().subscribe(
      data => {
        this.badges = data;
      },
      error => (this.errorMessage = error as any)
    );

    this.store
      .pipe(select(fromDeclaraionType.getDisplayDeclarationTypes))
      .subscribe(
        displayDeclarationTypes => (this.displayTypes = displayDeclarationTypes)
      );

    this.store
      .pipe(select(fromDeclaraionType.getCurrentDeclarationType))
      .subscribe(selectedType =>
        this.doSetSelectedDeclarationTypeChanged(selectedType)
      );

    this.store
      .pipe(select(fromDeclaraionType.getCurrentBadge))
      .subscribe(selectedType =>
        this.doSetSelectedBadgeChanged(selectedType)
      );

    this.store
      .pipe(select(fromDeclaraionType.getTraderReference))
      .subscribe(
        traderReference => (this.traderReference = traderReference)
      );

/*     this.listService.getBadges().subscribe(
        data => {
          this.badges = data;
        },
        error => (this.errorMessage = error as any)
      ); */
  }

  doSetSelectedBadgeChanged(selectedBadge: Badge) {
    if (selectedBadge === null) {
      return null;
    }
    console.log(
      'About to set selected badge on view. Selected badge code: ' +
        [selectedBadge.code]
    );
    this.selectedBadge = selectedBadge;
  }
  doSetSelectedDeclarationTypeChanged(selectedType: Declarationtype): void {
    if (selectedType === null) {
      return null;
    }
    console.log(
      'About to set selected declaration type view. Selected  type: ' +
        [selectedType.value]
    );
    this.selectedDeclarationType = selectedType;
  }

  checkChanged(value: boolean): void {
    console.log('About to dispatch toggle Display Declaration Types');
    this.store.dispatch(
      new fromDeclarationTypeActions.ToggleDeclarationTypes(value)
    );
  }

  onSelectedDeclarationTypeChange(event) {
    if (!event.isUserInput) {
      return null;
    }
    this.selectedDeclarationType = this.declarationTypes.find(
      b => b.value === event.source.value
    );

    console.log(
      'About to dispatch Set Trader Reference: ' +
        this.selectedDeclarationType.value
    );
    this.store.dispatch(
      new fromDeclarationTypeActions.SetCurrentDeclarationType(
        this.selectedDeclarationType
      )
    );
  }

  onSelecedBadgeCodeChange(event) {
    if (!event.isUserInput) {
      return null;
    }

    this.selectedBadge = this.badges.find(b => b.code === event.source.value);

    if (this.selectedBadge == null) {
      console.log('No badge found matching code ' + event.source.value);
      return;
    }

    console.log('Found badge matching code: ' + this.selectedBadge.code);

    console.log('About to dispatch data to SetCurrentBadge action:');
    this.store.dispatch(
      new fromDeclarationTypeActions.SetCurrentBadge(this.selectedBadge)
    );
  }

  onBlurTraderReferenceChange(traderReference: string) {
    console.log('About to dispatch Set Trader Reference: ' + traderReference);

    this.store.dispatch(
      new fromDeclarationTypeActions.SetTraderReference(traderReference)
    );
  }

}
