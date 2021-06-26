import { gql } from "apollo-boost";

export const GET_BLOCK_VALUES = gql`
  query getAllBlocks($time: Float!) {
    getAllBlocks(time: $time) {
      hash
      time
      height
    }
  }
`;