import PropTypes from 'prop-types';
import { UserOutlined } from '@ant-design/icons';
import { Flex, Avatar } from 'antd';

const Right = (props) => {
  const { messageObj } = props;

  return (
    <>
      {
        messageObj &&
        <Flex gap="large">
          <Flex gap="small" align="center" vertical>
            <Avatar
              style={{ backgroundColor: '#87d068' }}
              icon={<UserOutlined />}
            />
            <div style={{ marginTop: '-10px' }}>
              {messageObj.name}
            </div>
          </Flex>
          <div style={{ marginTop: '5px' }}>
            {messageObj.message}
          </div>
        </Flex>
      }
    </>
  );
};

Right.propTypes = {
  messageObj: PropTypes.object,
};

export default Right;
