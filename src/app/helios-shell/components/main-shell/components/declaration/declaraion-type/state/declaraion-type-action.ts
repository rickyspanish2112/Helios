import { Action } from '@ngrx/store';
import { Declarationtype } from 'src/app/helios-shell/model/declarationtype';
import { Badge } from 'src/app/helios-shell/model/badge';


export enum DeclarationTypesActionTypes {
  ToggleDeclaraionTypes = '[Declaration Types] Toggle Declaration Types',
  SetCurrentBadge = '[Declaration Types] Set Current Badge',
  SetTraderReference = '[Declaration Types] Set Trader Reference',
  SetCurrentDeclarationType = '[Declaration Types] Set Declaration Type',
  LoadDeclarationType = '[DeclarationType] Load Declaration Type',
  LoadDeclarationTypeSuccess = '[DeclarationType] Load Declaration Type Success',
  LoadDeclarationTypeFail = '[DeclarationType] Load Declaration Type Fail',
  LoadBadges = '[DeclarationType] Load Badges',
  LoadBadgesSuccess = '[DeclarationType] Load Badges Success',
  LoadBadgesFail = '[DeclarationType] Load Badges Failure'
}

export class ToggleDeclarationTypes implements Action {
  readonly type = DeclarationTypesActionTypes.ToggleDeclaraionTypes;

  constructor(public payload: boolean) {}
}

export class SetCurrentDeclarationType implements Action {
  readonly type = DeclarationTypesActionTypes.SetCurrentDeclarationType;

  constructor(public payload: string) {}
}

export class SetCurrentBadge implements Action {
  readonly type = DeclarationTypesActionTypes.SetCurrentBadge;

  constructor(public payload: Badge) {}
}

export class LoadDeclarationType implements Action {
  readonly type = DeclarationTypesActionTypes.LoadDeclarationType;
}

export class LoadDeclarationTypeSuccess implements Action {
  readonly type = DeclarationTypesActionTypes.LoadDeclarationTypeSuccess;

  constructor(public payload: Declarationtype[]) { }
}

export class LoadDeclarationTypeFail implements Action {
  readonly type = DeclarationTypesActionTypes.LoadDeclarationTypeFail;

  constructor(public payload: string) { }
}

export class LoadBadges implements Action {
  readonly type = DeclarationTypesActionTypes.LoadBadges;
}

export class LoadBadgesSuccess implements Action {
  readonly type = DeclarationTypesActionTypes.LoadBadgesSuccess;

  constructor(public payload: Badge[]) { }

}

export class LoadBadgesFail implements Action {
  readonly type = DeclarationTypesActionTypes.LoadBadgesFail;

  constructor(public payload: string) { }
}

export class SetTraderReference implements Action {
  readonly type = DeclarationTypesActionTypes.SetTraderReference;

  constructor(public payload: string) {}
}

export type DeclarationTypeActions =
  | ToggleDeclarationTypes
  | SetCurrentDeclarationType
  | SetCurrentBadge
  | SetTraderReference
  | LoadDeclarationType
  | LoadDeclarationTypeSuccess
  | LoadDeclarationTypeFail
  | LoadBadges
  | LoadBadgesSuccess
  | LoadBadgesFail;
