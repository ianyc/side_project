/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from 'react';
import { Button, Typography, Flex } from 'antd';
import Peach from './peach.jsx';
import Left from './Left.jsx';
import Right from './right.jsx';

const DashboardPage = () => {

  const [userMessage, setUserMessage] = useState({
    username: '',
    message: '',
  });

/*   const [isClick, setIsClick] = useState(false);
  const { Title } = Typography;

  const car2 = {
    color: 'red',
    type: 'toyota',
    age: 10,
  }

  const fc1 = () => {
    const car = {
      color: 'red',
      type: 'toyota',
      age: 10,
      driver: ['dad', 'mom'],
    };

    const { type } = car;

    console.log(car);
    console.log('type=' + type);
    console.log(`type=${type}`);
    console.log(car.driver[0]);
  } */

  // fc1();


  return (
    <Flex gap="middle">
      <Left setUserMessage={setUserMessage}></Left>
      <Right userMessage={userMessage}></Right>
    </Flex>
    // <Flex gap="large">
    //   <Button
    //     type="text"
    //     icon={isClick ?
    //       <SmileOutlined style={{ color: 'red' }}/> :
    //       <FrownOutlined/>
    //     }
    //     style={{ fontSize: '50px', marginTop: '20px', marginLeft: '20px' }}
    //     onClick={() => {
    //       setIsClick(true);
    //     }}
    //   />
    //   <Title style={{ marginTop: '10px', marginLeft: '20px' }}>Hello World</Title>
    //   <div>{car2.color}</div>
    //   <div>{car2}</div>
    // </Flex>
  );
}

export default DashboardPage;
