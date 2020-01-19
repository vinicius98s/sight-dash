import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

import createQueryRendererModern from '../relay/createQueryRendererModern';

const Login: React.FC<{ query?: any }> = ({ query }) => {
  return (
    <h1>
      working :)
      {console.log(query.users)}
    </h1>
  );
};

export const LoginFragmentContainer = createFragmentContainer(Login, {
  query: graphql`
    fragment Login_query on Query {
      users {
        id
        name
        email
        password
      }
    }
  `,
});

export default createQueryRendererModern(LoginFragmentContainer, Login, {
  query: graphql`
    query LoginQuery {
      ...Login_query
    }
  `,
});
