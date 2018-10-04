import { makeExecuteableSchema } from "graphql-tools";

import { resolvers } from "./resolvers";


const typeDefinitions = `
  
type Channel {
    id: ID!
    name: String
    messages: [Message]!
  }

type Message {
  id: ID!
  text: String
}

type Query {
  channels: [Channel]
  channel(id: ID!): Channel
}

type Mutation {
  addChannel(name: String!): Channel
}

`;

const schema = makeExecuteableSchema({ typeDefinitions, resolvers });
export { schema };
