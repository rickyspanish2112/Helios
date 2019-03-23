import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Declarationtype } from 'src/app/helios-shell/model/declarationtype';
import { Badge } from 'src/app/helios-shell/model/badge';

@Component({
  selector: 'app-declaration-type',
  templateUrl: './declaration-type.component.html',
  styleUrls: [
    './declaration-type.component.scss'
  ]
})
export class DeclarationTypeComponent implements OnInit {
  customCollapsedHeight = '40px';
  customExpandedHeight = '40px';
  pageTitle = 'Declaration Type';

  @Input() errorMessage: string;
  @Input() displayTypes: boolean;
  @Input() declarationTypes: Declarationtype[];
  @Input() badges: Badge[];
  @Input() selectedDeclarationType: Declarationtype;
  @Input() selectedBadge: Badge;
  @Input() traderReference: string;

  @Output() checked = new EventEmitter<boolean>();
  @Output() declarationTypeSelected = new EventEmitter<Declarationtype>();
  @Output() badgeSelected = new EventEmitter<Badge>();
  @Output() traderReferenceSet = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  checkChanged(value: boolean): void {
    this.checked.emit(value);
  }

  onSelectedBadgeCodeChanged(value: Badge) {
    this.badgeSelected.emit(value);
  }

  onSelectedDeclarationTypeChanged(value: Declarationtype) {
    this.declarationTypeSelected.emit(value);
  }

  onTraderReferenceSet(value: string) {
    this.traderReferenceSet.emit(value);
  }
}
