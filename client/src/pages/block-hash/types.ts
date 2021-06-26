export enum ActionType {
  INITIALIZE_BLOCKS = "INITIALIZE",
  SET_HASH = "SET_HASH",
  SET_FILTERED_VALUES = "SET_FILTERED_VALUES",
}

export type Transaction = {
  hash: string;
  inputs: {
    witness: string;
    sequence: number;
  }[];
  out: {
    type: number;
    value: number;
    spent: boolean;
  }[];
};
export type hashValueType = {
  __typename?: string;
  hash: string;
  size: number;
  block_index: number;
  prev_block: string;
  mrkl_root: string;
  next_block: string[];
  fee: number;
  tx: Transaction[];
};

interface InitializeAction {
  data: hashValueType;
}
interface hashAction {
  hash: string;
}
interface FilteredAction {
  filteredTransactions: any;
}

export type BlockAction =
  | { type: ActionType.INITIALIZE_BLOCKS; payload: InitializeAction }
  | { type: ActionType.SET_HASH; payload: hashAction }
  | { type: ActionType.SET_FILTERED_VALUES; payload: FilteredAction };

export type StateType = {
  hashBlocks: hashValueType;
  filteredTransactions: Transaction[];
  hash: string;
};
