import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, storeFactory } from "../test/testUtils";
import Input from "./Input";

const setup = (initalState = {}) => {
  const store = storeFactory(initalState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  // console.log(wrapper.debug());
  return wrapper;
};

describe("render", () => {
  describe("word has not been guessed", () => {
    test("renders without error", () => {});

    test("renders input box", () => {});

    test("renders submit button", () => {});
  });

  describe("word has been guessed", () => {
    test("renders without error", () => {});

    test("does not renders input box", () => {});

    test("does not renders submit button", () => {});
  });
});

describe("update state", () => {});
