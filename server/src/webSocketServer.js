import { execute, subscribe } from "graphql";
import { createServer } from "http";
import { SubscriptionServer } from "subscriptions-transport-ws";


export function startWebSocketServer(server, port, schema) {

  const webSocketServer = createServer(server);

  webSocketServer.listen(port, () => {

    new SubscriptionServer({
      execute,
      subscribe,
      schema
    }, {
      server: webSocketServer,
      path: "/subscriptions"
    });

    console.log(`GraphQL Server is now running on http://localhost:${port}`);

  });

}
