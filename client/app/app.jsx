import React from 'react';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from "apollo-client";
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from "react-apollo";
import { render } from 'react-dom';

import ChannelList from "./components/ChannelList/ChannelList";


const client = new ApolloClient({
  link: createHttpLink({ uri: "http://localhost:7700/graphql" }),
  cache: new InMemoryCache()
});

let app = document.querySelector("#app");

render(
  <ApolloProvider client={ client }>
    <div className="App">
      <h3 className="center">React, GraphQL, Apollo</h3>
      <div className="row">
        <div className="col-lg-4 col-lg-offset-4">
          <ChannelList />
        </div>
      </div>
    </div>
  </ApolloProvider>,
  app
)
