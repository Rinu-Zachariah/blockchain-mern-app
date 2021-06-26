import React from "react";
import { navigate } from "@reach/router";
import { Button } from "antd";

export function getAllBlocksColumns() {
  return [
    {
      title: "Block Hash",
      dataIndex: "hash"
    },
    {
      title: "Block Time",
      dataIndex: "time"
    },
    {
      title: "Block Height",
      dataIndex: "height"
    },
    {
      title: "Action",
      render: row =>
        ["View"].map(action => {
          return (
            <Button
              key={row.key + action}
              className="blocks__actions"
              onClick={() => navigate(`/hash/${row.hash}`)}
              size="small"
              type="link"
            >
              {action}
            </Button>
          );
        })
    }
  ];
}

export function groupBlocks(blocks) {
  return blocks.map(
    ({ hash, time, height }) => ({
      hash,
      key: time,
      height,
      time
    })
  );
}