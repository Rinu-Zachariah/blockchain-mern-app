import { StateType } from "./types";

const blockState: StateType = {
  hashBlocks: {
    hash: "00000",
    block_index: 0,
    size: 0,
    prev_block: "12121212",
    mrkl_root: "assas",
    next_block: ["3232323"],
    fee: 100,
    tx: [
      {
        hash: "00000",
        inputs: [
          {
            witness: "1212",
            sequence: 1221,
          },
        ],
        out: [
          {
            type: 1212,
            value: 1212,
            spent: true,
          },
        ],
      },
    ],
  },
  filteredTransactions: [
    {
      hash: "00000",
      inputs: [
        {
          witness: "1212",
          sequence: 1221,
        },
      ],
      out: [
        {
          type: 1212,
          value: 1212,
          spent: true,
        },
      ],
    },
  ],
  hash: "0000",
};

export default blockState;
