import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeliosShellComponent } from './helios-shell.component';

import { MaterialModule } from '../shared/materialmodule.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MainShellComponent } from '../helios-shell/components/main-shell/main-shell.component';
import { SidenavComponent } from '../helios-shell/components/sidenav/sidenav.component';
import { ToolbarComponent } from '../helios-shell/components/toolbar/toolbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ListService } from './listservice.service';
import { MAT_DATE_LOCALE } from '@angular/material';

import { DeclarationComponent } from '../helios-shell/components/main-shell/components/declaration/declaration.component';

const routes: Routes = [
  { path: '', component: HeliosShellComponent,
    children: [
      { path: 'declaraion', component: DeclarationComponent },
      { path: '', component: MainShellComponent }
    ] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    HeliosShellComponent,
    MainShellComponent,
    SidenavComponent,
    ToolbarComponent,
    DeclarationComponent
  ],

    imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
   RouterModule.forChild(routes)
  ],
  providers: [
    ListService,
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
  ],
})
export class HeliosShellModule { }
