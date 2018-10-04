import express from "express";
import cors from "cors";
import { graphqlExpress, graphiqlExpress } from "graphql-server-express";
import bodyParser from "body-parser";

import { schema } from "./schema";


const PORT = 7700;
const server = express();

server.use('*', cors({
  origin: "http://localhost:8000"
}));

server.use("/graphql", bodyParser.json(), graphiqlExpress({
  schema
}));

server.use("graphiql", graphiqlExpress({
  endpointURL: "/graphql"
}));

server.listen(PORT, () => 
  console.log("The GraphQL server is now running on http://localhost:${PORT}")
);
