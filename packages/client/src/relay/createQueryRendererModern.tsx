import React from "react";
import hoistStatics from 'hoist-non-react-statics';
import { QueryRenderer, GraphQLTaggedNode } from 'react-relay';
import { Variables } from 'relay-runtime';

import environment from './environment';

type Config = {
  query: GraphQLTaggedNode,
  queriesParams?: (props: Object) => object,
  variables?: Variables,
  hideSplash?: boolean,
};

export default function createQueryRenderer<P>(
  FragmentComponent: any,
  Component: React.ComponentType<P>,
  config: Config,
) {
  const { query, queriesParams } = config;

  const QueryRendererWrapper: React.FC<{ props?: Object }> = ({ props = {} }) => {
    const variables = queriesParams ? queriesParams(props) : config.variables;

    return (
      <QueryRenderer
        environment={environment}
        query={query}
        variables={variables || {}}
        render={({ error, props: renderProps }) => {
          if (error) {
            return <span>{error.toString()}</span>;
          }

          if (renderProps) {
            return <FragmentComponent {...props} query={renderProps} />;
          }

          return <span>Loading</span>;
        }}
      />
    )
  }

  return hoistStatics(QueryRendererWrapper, Component);
}