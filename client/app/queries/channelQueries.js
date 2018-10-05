import gql from "graphql-tag";

export const channelsListQuery = gql`
query ChannelsListQuery {
  channels {
    id
    name
  }
}
`;

export const createChannelMutation = gql`
  mutation addChannel($name: String!) {
    addChannel(name: $name) {
      id
      name
    }
  }
`;