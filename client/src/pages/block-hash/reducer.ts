import { BlockAction, StateType, ActionType } from "./types";

const blockTypeReducer = (state: StateType, action: BlockAction) => {
  switch (action.type) {
    case ActionType.INITIALIZE_BLOCKS: {
      return {
        ...state,
        hashBlocks: action.payload.data,
      };
    }
    case ActionType.SET_HASH: {
      return {
        ...state,
        hash: action.payload.hash,
      };
    }
    case ActionType.SET_FILTERED_VALUES: {
      return {
        ...state,
        filteredTransactions: action.payload.filteredTransactions,
      };
    }
    default:
      throw new Error();
  }
};

export default blockTypeReducer;
