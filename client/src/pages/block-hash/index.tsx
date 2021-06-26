import React, { useReducer, useEffect } from "react";

import blockTypeReducer from "./reducer";
import blockState from "./state";
import { BlockStateContext, BlockDispatchContext } from "./context";
import { ActionType } from "./types";
import HashContainer from "../../container/hash-container/index";
import Header from "../../component/header/index";

interface Props {
  hash: string;
}

const BlockHash = ({ hash }: Props) => {
  const [state, dispatch] = useReducer(blockTypeReducer, blockState);
  const truncate = () =>
    hash.length > 9 ? `${hash.substring(0, 9)}...` : hash;
  useEffect(() => {
    dispatch({
      type: ActionType.SET_HASH,
      payload: {
        hash: hash,
      },
    });
  }, [hash]);

  return (
    <div>
      <BlockStateContext.Provider value={state}>
        <BlockDispatchContext.Provider value={dispatch}>
          <Header page="hash" title={truncate()} />
          <HashContainer />
        </BlockDispatchContext.Provider>
      </BlockStateContext.Provider>
    </div>
  );
};

export default BlockHash;
