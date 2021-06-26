export enum ActionType {
  INITIALIZE = "INITIALIZE"
}

export type landingType = {
  block_index: number;
  hash: string;
  height: number;
  time: number;
};

interface InitializeAction {
  data: landingType[];
}

export type locationCoords = {
  latitude: number;
  longitude: number;
};

export type LandingAction =
  | { type: ActionType.INITIALIZE; payload: InitializeAction }

export type LandingStateType = {
  blocks: landingType[];
};
