import { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Flex, Card, Button, Form, Input, Avatar } from 'antd';

const MessageBoard = () => {
  const [messageObj, setMessageObj] = useState();

  const onFinish = (params) => {
    setMessageObj({
      name: params.name,
      message: params.message,
    });
  };

  return (
    <Flex
      gap={70}
      style={{ marginTop: '20px', marginLeft: '20px' }}
    >
      {/* 左邊區塊 */}
      <Card
        hoverable
        title="Message Board"
        style={{ width: 400 }}
      >
        <Form
          name="messageBoard"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          onFinish={(params) => onFinish(params)}
        >
          <Form.Item
            label="name"
            name="name"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="message"
            name="message"
            rules={[{ required: true, message: 'Please input some message!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
            Go
            </Button>
          </Form.Item>
        </Form>
      </Card>

      {/* 右邊區塊 */}
      {/* 「messageObj &&」代表messageObj不等於null或undefined才執行&&之後的程式 */}
      {messageObj &&
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
    </Flex>
  );
}

export default MessageBoard;
