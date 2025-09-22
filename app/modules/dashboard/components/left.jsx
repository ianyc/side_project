import { Card, Space } from 'antd';
import { Button, Form, Input } from 'antd';
import PropTypes from 'prop-types';

const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

const Left = (props) => {

  const onFinish = values => {
    console.log('Success:', values);
    const { setUserMessage } = props;
    setUserMessage({
      username: values.username,
      message: values.message,
    })
  };

  return (
    <Space direction="vertical" size={16}>
      <Card title="即時通" style={{ width: 300 }}>
        <p>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="User"
              name="username"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Message"
              name="message"
              rules={[{ required: true, message: 'Please input your message!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item label={null}>
              <Button type="primary" htmlType="submit">
                Go
              </Button>
            </Form.Item>
          </Form>
        </p>

      </Card>

    </Space>
  );
};

export default Left;

Left.propTypes = {
  setUserMessage: PropTypes.func,
};