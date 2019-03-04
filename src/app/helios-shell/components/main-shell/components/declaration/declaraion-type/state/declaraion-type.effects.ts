import { ListService } from 'src/app/helios-shell/listservice.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';

import * as declaraionTypeActions from '../state/declaraion-type-action';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class  DeclarationTypeEffects {

constructor(private declarationListService: ListService,
            private actions$: Actions) {}

            @Effect()
            loadDeclaraionTypes$: Observable<Action> = this.actions$.pipe(
              ofType(declaraionTypeActions.DeclarationTypesActionTypes.LoadDeclarationType),
              mergeMap(action => this.declarationListService.getDeclarationTypes().pipe(
                map(types => (new declaraionTypeActions.LoadDeclarationTypeSuccess(types))),
                catchError(err => of(new declaraionTypeActions.LoadDeclarationTypeFail(err)))
              ))
            );

            @Effect()
            loadBadges$: Observable<Action> = this.actions$.pipe(
              ofType(declaraionTypeActions.DeclarationTypesActionTypes.LoadBadges),
              mergeMap(action => this.declarationListService.getBadges().pipe(
                map(types => (new declaraionTypeActions.LoadBadgesSuccess(types))),
                catchError(err => of(new declaraionTypeActions.LoadDeclarationTypeFail(err)))
              ))
            );
 }
