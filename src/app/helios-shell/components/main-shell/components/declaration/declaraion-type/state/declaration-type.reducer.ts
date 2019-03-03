import { Badge } from 'src/app/helios-shell/model/badge';
import { Declarationtype } from 'src/app/helios-shell/model/declarationtype';

import * as fromRoot from '../../../../../../state/app-state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DeclarationTypeActions, DeclarationTypesActionTypes } from './declaraion-type-action';

/* export interface State extends fromRoot.State {
  declarationType: DeclarationTypeState;
} */

// State for this feature (Declaraions types)
export interface DeclarationTypeState {
  showDeclarationTypes: boolean;
  currentBadge: Badge;
  badges: Badge[];
  currentDeclarationType: Declarationtype;
  declarationTypes: Declarationtype[];
  traderTreference: string;
  error: string;
}

const initialState: DeclarationTypeState = {
  showDeclarationTypes: false,
  currentBadge: null,
  badges: [],
  currentDeclarationType: null,
  declarationTypes: [],
  traderTreference: '',
  error: ''
};

const getDeclarationTypeState = createFeatureSelector<DeclarationTypeState>('declarationType');

export const getDisplayDeclarationType = createSelector(
  getDeclarationTypeState,
  state => state.showDeclarationTypes
);

/* export const getDeclarationTypes = createSelector(
  getDeclarationTypeState,
  state => state.declarationTypes
);

export const getError = createSelector(
  getDeclarationTypeState,
  state => state.error
); */

export function reducer(state = initialState,  action: DeclarationTypeActions): DeclarationTypeState {

  switch (action.type) {
    case DeclarationTypesActionTypes.ToggleDeclaraionTypes:
    return {
      ...state,
      showDeclarationTypes: action.payload
    };

    case DeclarationTypesActionTypes.SetCurrentDeclarationType:
      return {
        ...state,
        currentDeclarationType: {...action.payload}
      };


    default:
    return state;
  }

}
