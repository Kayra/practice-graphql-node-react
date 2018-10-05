import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface
} from "react-apollo";

import ChannelList from "./components/ChannelList/ChannelList";


const networkInterface = createNetworkInterface({
  uri: "http://localhost:7700/graphql"
});

const client = new ApolloClient({
  networkInterface
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
