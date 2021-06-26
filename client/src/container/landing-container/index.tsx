import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Row, Table, Skeleton, message, Col } from "antd";

import { ActionType } from "../../pages/landing/types";
import {
  LandingStateContext,
  LandingDispatchContext,
} from "../../pages/landing/context";
import { GET_BLOCK_VALUES } from "./query";
import { getAllBlocksColumns, groupBlocks } from "./table-utils";

const LandingContainer = () => {
  const dispatch = useContext(LandingDispatchContext);
  const { blocks } = useContext(LandingStateContext);
  const { loading, error, data } = useQuery(GET_BLOCK_VALUES, {
    variables: {
      time: 1573858800000,  //have added the hardcoded value here;
    },
    onCompleted: () => {
      dispatch({
        type: ActionType.INITIALIZE,
        payload: {
          data: data.getAllBlocks,
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
    <div className="blocks__container">
      <Row className="content " align="middle" justify="space-around">
        <Col
          className="column-element-padding"
          xs={{ span: 22, offset: 1 }}
          sm={{ span: 22, offset: 1 }}
          md={{ span: 22, offset: 1 }}
          lg={{ span: 22, offset: 1 }}
        >
          {loading ? (
            <Skeleton />
          ) : (
            <Table
              className="blocks__container__table"
              columns={getAllBlocksColumns()}
              dataSource={groupBlocks(blocks)}
            />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default LandingContainer;
