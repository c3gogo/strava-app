import React from 'react'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Card } from 'antd'
import graphql from 'babel-plugin-relay/macro'
import { usePreloadedQuery } from 'react-relay/hooks'
const { Meta } = Card

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

export default function User(props) {
  const data = usePreloadedQuery(UserQuery, props.preloadedQuery)
  let user = data.athletes[0]
  return (
    <div>
      <Card
        hoverable
        style={{ width: 240 }}
      >
        <Meta title={user.username} description={user.city} />
      </Card>
    </div>
  )
}
