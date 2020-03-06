import React from "react";
import graphql from 'babel-plugin-relay/macro'
import {
  useLazyLoadQuery,
  RelayEnvironmentProvider,
} from 'react-relay/hooks'
import RelayEnvironment from './RelayEnvironment'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Row, Col, Card, Avatar, Spin } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import { LoadingOutlined, EnvironmentOutlined } from '@ant-design/icons';

const { Suspense, SuspenseList } = React
const { Meta } = Card
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const UserQuery = graphql`query AppUserQuery {
  athletes {
    id,
    username,
    firstname,
    lastname,
    city,
    sex,
    activities {
      id,
      name,
      date,
      averageSpeed,
      distance

    }
  }
}
`

function Activity(props) {
  return <Card
    hoverable
    bordered={true}
    style={{ marginTop: '20px', width: '80%', marginLeft: '10%'}}
  >
    <Meta avatar={<Avatar size={64} icon={<EnvironmentOutlined />} />} title={props.activity.name} style={{ textAlign: "center" }} description={<div>
      <p>date: {props.activity.date}</p>
      <p>distance: {props.activity.distance}</p>
      <p>average speed: {props.activity.averageSpeed}</p>
    </div>}/>
  </Card>
}


function User(props) {
  const data = useLazyLoadQuery(UserQuery)

  let user = data.athletes[0]
  console.log(user.activities)
  return (
    <div>
      <Card
        hoverable
        bordered={true}
        style={{ marginTop: '20px' }}
      >
        <Meta avatar={<Avatar size={64} icon={<UserOutlined />} />} title={user.username} style={{ textAlign: "center" }} description={<div>
          <p>firstname: {user.firstname}</p>
          <p>lastname: {user.lastname}</p>
          <p>city: {user.city}</p>
          <p>sex: {user.sex}</p>
        </div>}/>
      </Card>
      <SuspenseList revealOrder="backwards">
        {user.activities.map(activity => <Suspense fallback={<Spin style={{ marginLeft: '50%', marginTop: '50px' }} indicator={antIcon}/>}>
          <Activity key={activity.id} activity={activity} />
        </Suspense>
        )}
      </SuspenseList>
    </div>
  )
}

function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Row gutter={16}>
        <Col span={8} offset={8}>
          <Suspense fallback={<Spin style={{ marginLeft: '50%', marginTop: '50px' }} indicator={antIcon}/>}>
            <User />
          </Suspense>
        </Col>
      </Row>
    </RelayEnvironmentProvider>
  )
}

export default App;
