import { Badge } from 'src/app/helios-shell/model/badge';
import { Declarationtype } from 'src/app/helios-shell/model/declarationtype';

import * as fromRoot from '../../../../../../state/app-state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DeclarationTypeActions, DeclarationTypesActionTypes } from './declaraion-type-action';

export interface State extends fromRoot.State {
  declarationType: DeclarationTypeState;
}

// State for this feature (Declaraions types)
export interface DeclarationTypeState {
  showDeclarationTypes: boolean;
  currentBadge: Badge;
  badges: Badge[];
  currentDeclarationType: Declarationtype;
  declarationTypes: Declarationtype[];
  currentTraderTreference: string;
  error: string;
}

const initialState: DeclarationTypeState = {
  showDeclarationTypes: false,
  currentBadge: null,
  badges: [],
  currentDeclarationType: null,
  declarationTypes: [],
  currentTraderTreference: '',
  error: ''
};

const getDeclarationTypeState = createFeatureSelector<DeclarationTypeState>('declarationType');

export const getDeclarationTypes = createSelector(
  getDeclarationTypeState,
  state => state.declarationTypes
);

export const getError = createSelector(
  getDeclarationTypeState,
  state => state.error
);

export const getToggleDeclarationTypes = createSelector(
  getDeclarationTypeState,
  state => state.showDeclarationTypes
);

export const getCurrentDeclarationType = createSelector(
  getDeclarationTypeState,
  state => state.currentDeclarationType
);

export const getCurrentBadge = createSelector(
  getDeclarationTypeState,
  state => state.currentBadge
);

export const getTraderReference = createSelector(
  getDeclarationTypeState,
  state => state.currentTraderTreference
);

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

      case DeclarationTypesActionTypes.SetCurrentBadge:
      return {
        ...state,
        currentBadge: {...action.payload}
      };

      case DeclarationTypesActionTypes.SetTraderReference:
      return {
        ...state,
        currentTraderTreference: action.payload
      };

    default:
    return state;
  }

}
