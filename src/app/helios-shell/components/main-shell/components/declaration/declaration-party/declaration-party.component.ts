import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-declaration-party',
  templateUrl: './declaration-party.component.html',
  styleUrls: ['./declaration-party.component.scss']
})
export class DeclarationPartyComponent implements OnInit {

  customCollapsedHeight = '40px';
  customExpandedHeight = '40px';
  pageTitle = 'Declaration Parties';
  exporterPartyTitle = 'Exporter [02]';
  importerPartyTitle = 'Importer [08]';
  exporterAccountName: string;
  importerAccountName: string;

  constructor() { }

  ngOnInit() {
  }

  onExporterAccountChanged(value: string) {
    this.exporterAccountName = value;
    console.log('About to set account name');
  }

  onImporterAccountChanged(value: string) {
    this.importerAccountName = value;
    console.log('About to set account name');
  }
}
