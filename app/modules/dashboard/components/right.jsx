import PropTypes from 'prop-types';
import { UserOutlined } from '@ant-design/icons';
import { Flex, Avatar } from 'antd';

const Right = (props) => {
  const { messageObjArray } = props;
  const colors = ['#87d068', '#eb4abbff', '#6d69d8ff', '#e96f5cff', '#e8ed57ff'];

  return (
    <>
      <Flex gap="large" vertical>
        {
          messageObjArray.map((item, index) =>
            <Flex gap="large" key={index}>
              <Flex gap="small" align="center" vertical>
                <Avatar
                  style={{ backgroundColor: colors[index % 5] }}
                  icon={<UserOutlined />}
                />
                <div style={{ marginTop: '-10px' }}>
                  {item.name}
                </div>
              </Flex>
              <div style={{ marginTop: '5px' }}>
                {item.message}
              </div>
            </Flex>,
          )
        }
      </Flex>
    </>
  );
};

Right.propTypes = {
  messageObjArray: PropTypes.object,
};

export default Right;
