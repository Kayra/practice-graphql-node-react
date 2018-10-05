import React from "react";
import { graphql } from "react-apollo";

import { createChannelMutation, channelsListQuery } from "../../queries/channelQueries"


const CreateChannel = ({ mutate }) => {

  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      
      event.persist();

      mutate({
        variables: { name: event.target.value },
        refetchQueries: [{ query: channelsListQuery }]
      })
      .then( response => {
        event.target.value = "";
      });

    }
  }

  return (
    <input
      type="text"
      className="form-control"
      placeholder="New channel"
      onKeyUp={ handleKeyUp }
    />
  );

};

const CreateChannelWithMutation = graphql(createChannelMutation)(CreateChannel);
export default CreateChannelWithMutation;
