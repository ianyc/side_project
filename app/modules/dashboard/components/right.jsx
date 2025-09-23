import { Card, Avatar, Col, Row, Input, Flex } from 'antd';
import PropTypes from 'prop-types';

const Right = ({ userMessage }) => {

  const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

  return (
    <Flex >
      <Card title="留言板" style={{ width: 300 }}>
        {userMessage.map((msg, index) => (
          <Row style={{ marginBottom: '2px'}}>
            <Col span={8}>
              <Flex vertical>
                <Avatar style={{ backgroundColor: colorList[index%colorList.length], color: 'white' }}>{msg.username}
                </Avatar>
                <Input style={{ width: '100%' }} value={msg.username} />
              </Flex>
            </Col>
            <Col span={16}>
              <Input value={msg.message} />
            </Col>
          </Row>
        ))}
      </Card>

    </Flex>
  );
};

export default Right;

Right.propTypes = {
  userMessage: PropTypes.array,
};
