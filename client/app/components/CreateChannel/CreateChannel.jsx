import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";


const CreateChannelMutation = gql`
  mutation addChannel($name: String!) {
    addChannel(name: $name) {
      id
      name
    }
  }
`;

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

const CreateChannelWithMutation = graphql(CreateChannelMutation)(CreateChannel);
export default CreateChannelWithMutation;
