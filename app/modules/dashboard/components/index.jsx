import { useState } from 'react';
import { Button, Typography, Flex } from 'antd';
import { FrownOutlined, SmileOutlined } from '@ant-design/icons';

const DashboardPage = () => {
  const [isClick, setIsClick] = useState(false);
  const { Title } = Typography;

  return (
    <Flex gap="large">
      <Button
        type="text"
        icon={isClick ?
          <SmileOutlined style={{ color: 'red' }}/> :
          <FrownOutlined/>
        }
        style={{ fontSize: '50px', marginTop: '20px', marginLeft: '20px' }}
        onClick={() => {
          setIsClick(true);
        }}
      />
      <Title style={{ marginTop: '10px', marginLeft: '20px' }}>Hello World</Title>
    </Flex>
  );
}

export default DashboardPage;
