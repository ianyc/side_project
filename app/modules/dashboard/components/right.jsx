import { Card, Avatar, Col, Row, Input, Flex } from 'antd';
import PropTypes from 'prop-types';

const Right = ({ userMessage }) => {

  const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
  const [color, setColor] = useState(ColorList[0]);

  return (
    <Flex >
      <Card title="留言板" style={{ width: 300 }}>
        <Row>
          <Col span={8}>
            <Flex vertical>
              <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>{userMessage.username}
              </Avatar>
              <Input style={{ width: '100%' }} value={userMessage.username} />
            </Flex>
          </Col>
          <Col span={16}>
            <Input value={userMessage.message} />
          </Col>
        </Row>
      </Card>

    </Flex>
  );
};

export default Right;

Right.propTypes = {
  userMessage: PropTypes.obj,
};
