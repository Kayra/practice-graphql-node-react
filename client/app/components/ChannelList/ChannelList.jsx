import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";


const channelsListQuery = gql`
  query ChannelsListQuery {
    channels {
      id
      name
    }
  }
`;

const ChannelsList = ({ data: { loading, error, channels }}) => {

  if (loading) {
    return <p>Fetching data...</p>;
  }

  if (error) {
    return <p>{ error.message }</p>
  }

  const listOfChannels = (
  <ul className="list-group">
    
    { channels.map( channel => 
      <li class="list-group-item" key={channel.id}>
        { channel.name }
      </li>)}
      
  </ul>);

  return listOfChannels

}

const ChannelsListWithData = graphql(channelsListQuery)(ChannelsList);
export default ChannelsListWithData;
