/* tslint:disable */
/* @relayHash a6ee6bf7f941f1f5e513a47792dfaca5 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type LoginQueryVariables = {};
export type LoginQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"Login_query">;
};
export type LoginQuery = {
    readonly response: LoginQueryResponse;
    readonly variables: LoginQueryVariables;
};



/*
query LoginQuery {
  ...Login_query
}

fragment Login_query on Query {
  users {
    id
    name
    email
    password
  }
}
*/

const node: ConcreteRequest = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "LoginQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "Login_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "LoginQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "users",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "email",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "password",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "LoginQuery",
    "id": null,
    "text": "query LoginQuery {\n  ...Login_query\n}\n\nfragment Login_query on Query {\n  users {\n    id\n    name\n    email\n    password\n  }\n}\n",
    "metadata": {}
  }
};
(node as any).hash = 'ced4f13acaf1a13bc17b2cb9385a1b8a';
export default node;
