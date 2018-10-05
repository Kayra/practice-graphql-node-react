import { PubSub } from "graphql-subscriptions";

import { channels } from "./mockData";


const pubsub = new PubSub();
const CHANNEL_ADDED_TOPIC = "newChannel";

export const resolvers = {

  Query: {

    channels: () => {
      return channels;
    },

    channel: (root, { id }) => {
      return channels.find(channel => channel.id == id);
    }

  },

  Mutation: {

    addChannel: (root, args) => {

      let nextId = channels.length + 1;
      const newChannel = {
        id: nextId,
        name: args.name,
        messages: []
      };

      channels.push(newChannel);
      pubsub.publish(CHANNEL_ADDED_TOPIC, { channelAdded: newChannel });

      return newChannel;
      
    },

    Subscription: {
      channelAdded: {
        subscribe: () => pubsub.asyncIterator(CHANNEL_ADDED_TOPIC)
      }
    }

  }

}