import { Card, Avatar, Col, Row, Input, Flex } from 'antd';

const Right = ({ username, message }) => {
  return (
    <Flex >
      <Card title="留言板" style={{ width: 300 }}>
        <Row>
          <Col span={8}>
            <Flex vertical>
              <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>Remi
              </Avatar>
              <Input style={{ width: '20%' }} value={username} />
            </Flex>
          </Col>
          <Col span={16}>
            <Input value={message} />
          </Col>
        </Row>
      </Card>

    </Flex>
  );
};

export default Right;
