import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  shortCodeCaption = 'Short Code:';
  accountNameCaption = 'Acct. Name';
  shortCode = '';
  accountName = '';

  @Input()exporterAccountName: string;
  @Input()importerAccountName: string;

  @Output() accountNameOnPropertyChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onAccountNameOnPropertyChanged(value: string) {
    this.accountNameOnPropertyChanged.emit(value);
  }
}
