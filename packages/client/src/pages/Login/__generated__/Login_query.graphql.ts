/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Login_query = {
    readonly users: ReadonlyArray<{
        readonly id: string;
        readonly name: string;
        readonly email: string;
        readonly password: string;
    }>;
    readonly " $refType": "Login_query";
};
export type Login_query$data = Login_query;
export type Login_query$key = {
    readonly " $data"?: Login_query$data;
    readonly " $fragmentRefs": FragmentRefs<"Login_query">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "Login_query",
  "type": "Query",
  "metadata": null,
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
};
(node as any).hash = '623695f3c7feeab4d4e1a51960cad370';
export default node;
