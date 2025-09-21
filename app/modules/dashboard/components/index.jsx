import { useState } from 'react';
import Left from './left';
import Right from './right';
import { Flex } from 'antd';

const DashboardPage = () => {
  const [messageObj, setMessageObj] = useState();

  return (
    <Flex
      gap={70}
      style={{ marginTop: '20px', marginLeft: '20px' }}
    >
      <Left
        setMessageObj={setMessageObj}
      />
      <Right
        messageObj={messageObj}
      />
    </Flex>
  );
}

export default DashboardPage;
