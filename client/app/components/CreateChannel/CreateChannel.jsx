import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

import { createChannelMutation } from "../../queries/channelQueries"


const CreateChannel = ({ mutate }) => {

  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      
      event.persist();

      mutate({
        variables: { name: event.target.value }
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
