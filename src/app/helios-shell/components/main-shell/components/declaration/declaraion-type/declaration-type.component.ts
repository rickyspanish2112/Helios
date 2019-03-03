import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Declarationtype } from 'src/app/helios-shell/model/declarationtype';
import { Badge } from 'src/app/helios-shell/model/badge';

@Component({
  selector: 'app-declaration-type',
  templateUrl: './declaration-type.component.html',
  styleUrls: ['./declaration-type.component.scss']
})
export class DeclarationTypeComponent implements OnInit {
  displayType: boolean;
  customCollapsedHeight = '40px';
  customExpandedHeight = '40px';

  selectedDeclarationType: Declarationtype;
  pageTitle = 'Declaraiont Type';

  @Input() errorMessage: string;

  @Input() dislayDeclarionType: boolean;
  @Input() declarationTypes: Declarationtype[];
  @Input() selectedDeclaraionType: Declarationtype;

  @Input() badges: Badge[];
  @Input() selectedBadge: Badge;

  @Input() traderReference: string;

  @Output() checked = new EventEmitter<boolean>();
  @Output() selectedType = new EventEmitter<Declarationtype>();
  @Output() badgeSelected = new EventEmitter<Badge>();
  @Output() reference = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  checkChanged(value: boolean): void {
    this.checked.emit(value);
  }

  onDeclarationTypeSelected(event) {
    this.selectedType.emit(event.source.value);
  }

    onBadgeSelected(event) {
      this.badgeSelected.emit(event.source.value);
  }

  onBlurTraderReferenceChange(traderReference: string) {
    this.reference.emit(traderReference);
  }
}
