import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Alert } from 'selenium-webdriver';


@Component({
  selector: 'app-declaration-party-account-address',
  templateUrl: './declaration-party-account-address.component.html',
  styleUrls: ['./declaration-party-account-address.component.scss']
})
export class DeclarationPartyAccountAddressComponent implements OnInit {
  street1Caption = 'Street 1:';
  street2Caption = 'Street 2';
  stateCaption = 'State';
  cityCaption = 'City';
  postCodeCaption = 'Post Code';
  countryCaption = 'Country';

  showLookup: boolean;

  @Input()exporterAccountName: string;
  @Input()importerAccountName: string;

  @Output() accountNameOnPropertyChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {

    this.showLookup = false;

  }

  onAccountNameOnPropertyChanged(value: string) {
    this.accountNameOnPropertyChanged.emit(value);
  }

  toogleLookup() {
    if (!this.showLookup) {
      this.showLookup = true;
    } else {
      this.showLookup = false;
    }
  }
}
