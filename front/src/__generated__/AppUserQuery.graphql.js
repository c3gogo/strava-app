/**
 * @flow
 * @relayHash 8e6fd4c798e3b8767af2f1ef0338326f
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
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "athletes",
    "storageKey": null,
    "args": null,
    "concreteType": "Athlete",
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
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AppUserQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "AppUserQuery",
    "id": null,
    "text": "query AppUserQuery {\n  athletes {\n    id\n    username\n    firstname\n    lastname\n    city\n    sex\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6119534e545b20042347088b4851976d';

module.exports = node;
