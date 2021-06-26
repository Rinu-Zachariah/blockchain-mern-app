import { createContext, Dispatch } from "react";
import { LandingAction } from "./types";
import landingState from "./state";

export const LandingStateContext = createContext(landingState);
export const LandingDispatchContext = createContext(
  {} as Dispatch<LandingAction>
);
