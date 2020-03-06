/**
 * @flow
 * @relayHash c042fde1ed518207ccf8b19d5f612b54
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppUserQueryVariables = {||};
export type AppUserQueryResponse = {|
  +athletes: ?$ReadOnlyArray<?{|
    +id: ?string,
    +username: ?string,
    +firstname: ?string,
    +lastname: ?string,
    +city: ?string,
    +sex: ?string,
    +activities: ?$ReadOnlyArray<?{|
      +id: ?string,
      +name: ?string,
      +date: ?string,
      +averageSpeed: ?number,
      +distance: ?number,
    |}>,
  |}>
|};
export type AppUserQuery = {|
  variables: AppUserQueryVariables,
  response: AppUserQueryResponse,
|};
*/


/*
query AppUserQuery {
  athletes {
    id
    username
    firstname
    lastname
    city
    sex
    activities {
      id
      name
      date
      averageSpeed
      distance
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "athletes",
    "storageKey": null,
    "args": null,
    "concreteType": "Athlete",
    "plural": true,
    "selections": [
      (v0/*: any*/),
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "username",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "firstname",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "lastname",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "city",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "sex",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "activities",
        "storageKey": null,
        "args": null,
        "concreteType": "Activity",
        "plural": true,
        "selections": [
          (v0/*: any*/),
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
            "name": "date",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "averageSpeed",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "distance",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppUserQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AppUserQuery",
    "argumentDefinitions": [],
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "AppUserQuery",
    "id": null,
    "text": "query AppUserQuery {\n  athletes {\n    id\n    username\n    firstname\n    lastname\n    city\n    sex\n    activities {\n      id\n      name\n      date\n      averageSpeed\n      distance\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '55b40dae512abc19d399db1e04ccf655';

module.exports = node;
