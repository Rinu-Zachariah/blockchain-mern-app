import { LandingAction, LandingStateType, ActionType } from "./types";

const LandingTypeReducer = (state: LandingStateType, action: LandingAction) => {
  switch (action.type) {
    case ActionType.INITIALIZE: {
      return {
        ...state,
        blocks: action.payload.data
      };
    }
    default:
      throw new Error();
  }
};

export default LandingTypeReducer;
