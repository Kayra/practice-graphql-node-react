import { channels } from "./mockData"

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

    addChannel: (root, arguments) => {

      let nextId = channels.length + 1;
      const newChannel = {
        id: nextId,
        name: args.name        
      };

      channels.push(newChannel);

      return newChannel;
      
    }

  }

}