import React from "react";
import { graphql } from "react-apollo";

import { channelsListQuery } from "../../queries/channelQueries"


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
