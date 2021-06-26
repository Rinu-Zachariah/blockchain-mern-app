import { gql } from "apollo-boost";

export const GET_HASH_VALUES = gql`
  query getHashValues($hash: String!) {
    getHashValues(hash: $hash) {
      hash
      size
      block_index
      prev_block
      mrkl_root
      next_block
      fee
      tx {
        hash
        inputs {
          witness
          sequence
        }
        out {
          type
          value
          spent
        }
      }
    }
  }
`;