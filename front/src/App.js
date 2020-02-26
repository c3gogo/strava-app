import React from "react";
import User from './user';
import graphql from 'babel-plugin-relay/macro'
import {
  RelayEnvironmentProvider,
  preloadQuery,
} from 'react-relay/hooks'
import RelayEnvironment from './RelayEnvironment'

const { Suspense } = React

const UserQuery = graphql`
  query AppUserQuery { 
    athletes {
      id,
      username,
      firstname,
      lastname,
      city,
      sex
    }
  }
`
const preloadedQuery = preloadQuery(RelayEnvironment, UserQuery)

function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'loading...'}>
        <User preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  )
}

export default App;
