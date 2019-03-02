import { Component, OnInit, NgZone } from '@angular/core';
import { ListService } from 'src/app/helios-shell/listservice.service';

import { Accountnodes } from '../../model/accountnodes';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList = matchMedia(
    `(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`
  );

  errorMessage: string;
  accountNodes: Accountnodes[] = [];

  constructor(zone: NgZone, private listservice: ListService) {
// tslint:disable-next-line: deprecation
    this.mediaMatcher.addListener(mql => {
        zone.run(() => this.mediaMatcher = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`));
      }
    );
  }

  ngOnInit() {
    this.listservice.getAccountNodes().subscribe(
      data => {
        this.accountNodes = data;
      },
      error => (this.errorMessage = error as any)
    );
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

}
