import { createContext, Dispatch } from "react";
import { BlockAction } from "./types";
import blockState from "./state";

export const BlockStateContext = createContext(blockState);
export const BlockDispatchContext = createContext({} as Dispatch<BlockAction>);
