import { Action } from '@ngrx/store';
import { Declarationtype } from 'src/app/helios-shell/model/declarationtype';


export enum DeclarationTypesActionTypes {
  ToggleDeclaraionTypes = '[Declaration Types] Toggle Declaration Types',
  SetCurrentBadge = '[Declaration Types] Set Current Badge',
  SetTraderReference = '[Declaration Types] Set Trader Reference',
  SetCurrentDeclarationType = '[Declaration Types] Set Declaration Type',
  Load = '[DeclarationType] Load',
  LoadSuccess = '[DeclarationType] Load Success',
  LoadFail = '[DeclarationType] Load Fail',
}

export class ToggleDeclarationTypes implements Action {
  readonly type = DeclarationTypesActionTypes.ToggleDeclaraionTypes;

  constructor(public payload: boolean) {}
}

export class SetCurrentDeclarationType implements Action {
  readonly type = DeclarationTypesActionTypes.SetCurrentDeclarationType;

  constructor(public payload: Declarationtype) {}
}

export class Load implements Action {
  readonly type = DeclarationTypesActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = DeclarationTypesActionTypes.LoadSuccess;

  constructor(public payload: Declarationtype[]) { }
}

export class LoadFail implements Action {
  readonly type = DeclarationTypesActionTypes.LoadFail;

  constructor(public payload: string) { }
}


export type DeclarationTypeActions =
  | ToggleDeclarationTypes
  | SetCurrentDeclarationType
  | Load
  | LoadSuccess
  | LoadFail;