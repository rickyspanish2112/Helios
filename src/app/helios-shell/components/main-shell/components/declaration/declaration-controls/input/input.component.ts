import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  shortCodeCaption = 'Short Code:';
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
