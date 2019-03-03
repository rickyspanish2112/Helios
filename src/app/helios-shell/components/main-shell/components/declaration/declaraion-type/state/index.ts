import * as fromProducts from '../../declaraion-type/state/declaration-type.reducer';
import * as fromRoot from '../../../../../../state/app-state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State {
  products: fromProducts.DeclarationTypeState;
}

const getDeclarationTypesFeatureState = createFeatureSelector<fromProducts.DeclarationTypeState>('declarationType');

export const getDeclarationTypes = createSelector(
  getDeclarationTypesFeatureState,
  state => state.declarationTypes
);

export const getError = createSelector(
  getDeclarationTypesFeatureState,
  state => state.error
);
