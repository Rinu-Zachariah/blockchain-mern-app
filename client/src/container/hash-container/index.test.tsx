import React from "react";
import { shallow, mount } from "enzyme";
import { MockedProvider } from "@apollo/react-testing";
import HashContainer from "./index";
import { render, wait, screen, act } from "@testing-library/react";
import { BlockStateContext, BlockDispatchContext } from "../../pages/block-hash/context";

beforeAll(() => {
  jest.useFakeTimers();
});
afterAll(() => {
  jest.clearAllTimers();
});

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

const blockMockState = {
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

it("renders without crashing", () => {
  shallow(
    <MockedProvider>
      <HashContainer />
    </MockedProvider>
  );
});

it("should find the Rows on hash page", async () => {
  const dispatch = jest.fn();
  const wrapper = mount(
    <BlockDispatchContext.Provider value={dispatch}>
      <BlockStateContext.Provider value={blockMockState}>
        <MockedProvider addTypename={false}>
          <HashContainer />
        </MockedProvider>
      </BlockStateContext.Provider>
    </BlockDispatchContext.Provider>
  );
  await wait(() => {
    wrapper.update();
    expect(wrapper.find(".ant-row").length).toEqual(17);
  });
});

it("should show List", async () => {
  const dispatch = jest.fn();
  const { getByText } = render(
    // @ts-ignore
    <BlockDispatchContext.Provider value={dispatch}>
      <BlockStateContext.Provider value={blockMockState}>
        <MockedProvider addTypename={false}>
          <HashContainer />
        </MockedProvider>
      </BlockStateContext.Provider>
    </BlockDispatchContext.Provider>
  );
  await wait(() => {
    expect(
      getByText("Summary")
    ).toBeInTheDocument();
    expect(
      getByText("Details")
    ).toBeInTheDocument();
    expect(
      getByText("Transactions")
    ).toBeInTheDocument();
    expect(
      getByText("Input")
    ).toBeInTheDocument();
    expect(
      getByText("Output")
    ).toBeInTheDocument();
  });
});