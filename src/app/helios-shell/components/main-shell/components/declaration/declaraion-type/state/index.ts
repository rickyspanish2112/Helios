
import * as fromRoot from '../../../../../../state/app-state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DeclarationTypeState } from './declaration-type.reducer';

export interface State extends fromRoot.State {
  declarationType: DeclarationTypeState;
}


const getDeclarationTypeState = createFeatureSelector<DeclarationTypeState>(
  'declarationType'
);

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

export const getBadges = createSelector(
  getDeclarationTypeState,
  state => state.badges
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
