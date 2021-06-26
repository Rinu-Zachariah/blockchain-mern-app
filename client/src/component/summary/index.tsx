import React, { useContext, useEffect } from "react";
import { navigate } from "@reach/router";
import { Row, Col, Divider } from "antd";
import { ActionType } from "../../pages/block-hash/types";
import {
  BlockStateContext,
  BlockDispatchContext,
} from "../../pages/block-hash/context";
import Template from "../template/index";

const Summary = () => {
  const dispatch = useContext(BlockDispatchContext);
  const { hashBlocks, filteredTransactions } = useContext(BlockStateContext);
  const objectEntries = Object.entries(hashBlocks);
  let entries = objectEntries.map((entry) => {
    if (entry[0] === "tx") {
      return entry[1];
    }
  });
  useEffect(() => {
    const filtered = entries.filter(function (el) {
      return el !== undefined;
    });
    dispatch({
      type: ActionType.SET_FILTERED_VALUES,
      payload: {
        filteredTransactions: filtered[0],
      },
    });
  }, [hashBlocks]);

  return (
    <div>
      <Row
        className="content hash__details"
        align="middle"
        justify="space-around"
      >
        <Col
          className="column-element-padding hash__details__previous"
          xs={{ span: 11 }}
          sm={{ span: 11 }}
          md={{ span: 11 }}
          lg={{ span: 11 }}
          onClick={() => navigate(`/hash/${hashBlocks.prev_block}`)}
        >
          Prev Hash : {hashBlocks.prev_block}
        </Col>
        <Col
          className="column-element-padding"
          xs={{ span: 2 }}
          sm={{ span: 2 }}
          md={{ span: 2 }}
          lg={{ span: 2 }}
        >
          <span className="hash__details__arrow">&#8594;</span>
        </Col>
        <Col
          className="column-element-padding"
          xs={{ span: 11 }}
          sm={{ span: 11 }}
          md={{ span: 11 }}
          lg={{ span: 11 }}
        >
          Current Hash : {hashBlocks.hash}
        </Col>
      </Row>
      <Row
        className="content hash__details"
        align="middle"
        justify="space-around"
      >
        <Col
          className="column-element-padding"
          xs={{ span: 11 }}
          sm={{ span: 11 }}
          md={{ span: 11 }}
          lg={{ span: 11 }}
        >
          Current Hash : {hashBlocks.hash}
        </Col>
        <Col
          className="column-element-padding"
          xs={{ span: 2 }}
          sm={{ span: 2 }}
          md={{ span: 2 }}
          lg={{ span: 2 }}
        >
          <span className="hash__details__arrow">&#8594;</span>
        </Col>
        <Col
          className="column-element-padding  hash__details__previous"
          xs={{ span: 11 }}
          sm={{ span: 11 }}
          md={{ span: 11 }}
          lg={{ span: 11 }}
          onClick={() => navigate(`/hash/${hashBlocks.next_block[0]}`)}
        >
          Next Hash : {hashBlocks.next_block[0]}
        </Col>
      </Row>
      <Row
        className="content hash__details"
        align="middle"
        justify="space-around"
      >
        <Divider className="hash__details__heading">Details</Divider>
        <div className="hash__details__transaction" >
          {objectEntries.map((entry) => {
            if (entry[0] !== "tx")
              return <Template key={entry[0]} label={entry[0].toUpperCase()} value={entry[1]} />;
          })}
        </div>
        
      </Row>
      <Row
        className="content"
        align="middle"
        justify="space-around"
      >
        <Divider className="hash__details__heading">Transactions</Divider>
        {/* {filteredTransactions && filteredTransactions.map(transaction => {})  Normally would have in this manner.
          Here I am just considering the first instance of transaction
        */}
        {filteredTransactions && (
          <div className="hash__details__transaction">
            <Template label="Hash" value={filteredTransactions[0].hash} />
            <Divider orientation="left">Input</Divider>
            {filteredTransactions[0].inputs &&
              filteredTransactions[0].inputs.map((input) => (
                <>
                  <Template label="Witness" value={input.witness} />
                  <Template label="Sequence" value={input.sequence} />
                </>
              ))}
            <Divider orientation="left">Output</Divider>
            {filteredTransactions[0].out &&
              filteredTransactions[0].out.map((output) => (
                <div className="hash__details__outputs">
                  <Template
                    label="Type"
                    value={output.type ? output.type : "0"}
                  />
                  <Template
                    label="Spent"
                    value={output.spent ? "true" : "false"}
                  />
                  <Template
                    label="Value"
                    value={output.value ? output.value : "0"}
                  />
                </div>
              ))}
          </div>
        )}
      </Row>
    </div>
  );
};

export default Summary;
