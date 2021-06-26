

const express = require('express')
const bodyParser = require('body-parser')
const { ApolloServer, gql } = require('apollo-server-express');
const fetch = require('node-fetch');

var cors = require('cors')

const baseURL = `https://blockchain.info`;

const typeDefs = `
  type Inputs {
    witness: String!
    sequence: Float
  }
  type Outputs {
    type: Float
    value: Float
    spent: Boolean
  }

  type Transaction {
    hash: String!
    size: Float!
    lock_time: Float!
    inputs: [Inputs]
    out: [Outputs]
  }

  type Block {
    hash: String!
    block_index: Float!
    time: Float!
    height: Float!
  }

  type Hash {
    hash: String!
    block_index: Float!
    size: Float!
    prev_block: String!
    fee: Float!
    mrkl_root: String!
    next_block: [String]!
    tx: [Transaction]
  }

  type Query {
    getAllBlocks(time: Float!): [Block]!
    getHashValues(hash: String!): Hash!
  }
`

const resolvers = {
  Query: {
    getAllBlocks: (parent, args) => {
      const { time } = args;
      return fetch(`${baseURL}/blocks/${time}?format=json`).then(res => res.json())
    },
    getHashValues: (parent, args) => {
      const { hash } = args;
      return fetch(`${baseURL}/rawblock/${hash}`).then(res => res.json())
    },
  },
}

const PORT = 5000;
const app = express();
app.use(cors());
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });
console.log(`Server listening on http://localhost:${PORT} ...`);
app.listen(PORT);
