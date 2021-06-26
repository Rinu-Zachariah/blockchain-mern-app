import React from "react";
import { shallow, mount } from "enzyme";
import { MockedProvider } from "@apollo/react-testing";
import LandingContainer from "./index";
import { render, wait, screen, act } from "@testing-library/react";
import { LandingStateContext, LandingDispatchContext } from "../../pages/landing/context";

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

const landingMockState = {
  blocks: [
    {
      block_index: 0,
      hash: "00000000",
      height: 0,
      time: 0
    },
  ],
};

it("renders without crashing", () => {
  shallow(
    <MockedProvider>
      <LandingContainer />
    </MockedProvider>
  );
});

it("should find the Landing element", async () => {
  const wrapper = mount(
    <LandingStateContext.Provider value={landingMockState}>
      <MockedProvider addTypename={false}>
        <LandingContainer />
      </MockedProvider>
    </LandingStateContext.Provider>
  );
  await wait(() => {
    wrapper.update();
    expect(wrapper.find(".ant-row").length).toEqual(1);
  });
});

it("should show table heading", async () => {
  const { getByText } = render(
    // @ts-ignore
    <LandingStateContext.Provider value={landingMockState}>
      <MockedProvider addTypename={false}>
        <LandingContainer />
      </MockedProvider>
    </LandingStateContext.Provider>
  );
  await wait(() => {
    expect(
      getByText("Block Hash")
    ).toBeInTheDocument();
    expect(
      getByText("Block Time")
    ).toBeInTheDocument();
    expect(
      getByText("Block Height")
    ).toBeInTheDocument();
    expect(
      getByText("Action")
    ).toBeInTheDocument();
    expect(
      getByText("View")
    ).toBeInTheDocument();
  });
});