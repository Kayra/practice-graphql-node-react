import express from "express";
import cors from "cors";
import { graphqlExpress, graphiqlExpress } from "graphql-server-express";
import bodyParser from "body-parser";

import { startWebSocketServer } from "./webSocketServer";
import { schema } from "./schema";


const PORT = 7700;
const server = express();

server.use('*', cors({
  origin: "http://localhost:8000"
}));

server.use("/graphql", bodyParser.json(), graphqlExpress({
  schema
}));

server.use("/graphiql", graphiqlExpress({
  endpointURL: "/graphql",
  subscriptionsEndpoint: `ws://localhost:${PORT}/subscriptions`
}));

startWebSocketServer(server, PORT, schema);
