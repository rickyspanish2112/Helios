import { Declarationtype } from 'src/app/helios-shell/model/declarationtype';
import { Badge } from 'src/app/helios-shell/model/badge';
import { DeclarationTypeActions, DeclarationTypesActionTypes } from './declaraion-type-action';

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

export function reducer(
  state = initialState,
  action: DeclarationTypeActions
): DeclarationTypeState {
  switch (action.type) {
    case DeclarationTypesActionTypes.ToggleDeclaraionTypes:
      return {
        ...state,
        showDeclarationTypes: action.payload
      };

    case DeclarationTypesActionTypes.LoadDeclarationTypeSuccess:
      return {
        ...state,
        declarationTypes: [...action.payload]
      };

    case DeclarationTypesActionTypes.LoadBadgesSuccess:
      return {
        ...state,
        badges: [...action.payload]
      };

    case DeclarationTypesActionTypes.SetCurrentDeclarationType:
      return {
        ...state,
        currentDeclarationType: action.payload
      };

    case DeclarationTypesActionTypes.SetCurrentBadge:
      return {
        ...state,
        currentBadge: action.payload
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
