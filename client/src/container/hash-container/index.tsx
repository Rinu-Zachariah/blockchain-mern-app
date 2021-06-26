import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Skeleton, message } from "antd";

import { ActionType } from "../../pages/block-hash/types";
import {
  BlockStateContext,
  BlockDispatchContext,
} from "../../pages/block-hash/context";
import { GET_HASH_VALUES } from "./query";
import Summary from "../../component/summary/index";

const HashContainer = () => {
  const dispatch = useContext(BlockDispatchContext);
  const { hash } = useContext(BlockStateContext);
  const { loading, error, data } = useQuery(GET_HASH_VALUES, {
    variables: {
      hash: hash,
    },
    onCompleted: () => {
      dispatch({
        type: ActionType.INITIALIZE_BLOCKS,
        payload: {
          data: data.getHashValues,
        },
      });
    },
    onError: () => {
      message.error(
        `Something went wrong!! Please try again after some time, ${error}`
      );
    },
  });
  return (
    <div className="hash__container">
      <h1 className="hash__container__summary">Summary</h1>
      {loading ? <Skeleton /> : <Summary />}
    </div>
  );
};

export default HashContainer;
