import React, { useReducer } from "react";

import LandingTypeReducer from "./reducer";
import landingState from "./state";
import { LandingStateContext, LandingDispatchContext } from "./context";
import LandingContainer from "../../container/landing-container/index";
import Header from "../../component/header/index";

const Landing = () => {
  const [state, dispatch] = useReducer(LandingTypeReducer, landingState);
  return (
    <div>
      <LandingStateContext.Provider value={state}>
        <LandingDispatchContext.Provider value={dispatch}>
          <Header page="dashboard" title="" />
          <div className="landing">
            <LandingContainer />
          </div>
        </LandingDispatchContext.Provider>
      </LandingStateContext.Provider>
    </div>
  );
};

export default Landing;
