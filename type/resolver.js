const fetch = require('node-fetch');

const baseURL = `https://blockchain.info`

export const resolvers = {
  Query: {
    getAllBlocks: (parent, args) => {
      const { time } = args;
      return fetch(`${baseURL}/blocks/${time}?format=json`).then(res => res.json())
    }
  },
}