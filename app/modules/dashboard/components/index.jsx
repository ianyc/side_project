/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from 'react';
import { Button, Typography, Flex } from 'antd';
import { FrownOutlined, SmileOutlined } from '@ant-design/icons';
import Peach from './peach.jsx';

const DashboardPage = () => {
  const [isClick, setIsClick] = useState(false);
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
  }

  fc1();


  return (
    <>
      <Peach
        gender={'male'}
        name={'alice'}
        age={10}>
      </Peach>
      <Button type="dashed">Dashed Button2</Button>
    </>
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
