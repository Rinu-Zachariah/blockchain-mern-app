import React from "react";
import { shallow } from "enzyme";
import Header from "./index";

it("renders without crashing", () => {
  shallow(<Header page="pharosOverview"  title="" />);
});
it("should find the header element with correct id", () => {
  const wrapper = shallow(<Header page="pharosOverview" title="" />);
  const header = wrapper.find("header");

  expect(header.length).toEqual(1);
  expect(header.props()).toHaveProperty("id", "page-header");
});

it("should find the header__breadcrumb class ul", () => {
  const wrapper = shallow(<Header page="pharosOverview" title="" />);
  expect(wrapper.find(".header__breadcrumb").length).toEqual(1);
});
