import { useState } from 'react';
import Left from './left';
import Right from './right';
import { Flex } from 'antd';

const DashboardPage = () => {
  const [messageObjArray, setMessageObjArray] = useState([]);

  return (
    <Flex
      gap={70}
      style={{ marginTop: '20px', marginLeft: '20px' }}
    >
      <Left
        messageObjArray={messageObjArray}
        setMessageObjArray={setMessageObjArray}
      />
      <Right
        messageObjArray={messageObjArray}
      />
    </Flex>
  );
}

export default DashboardPage;
