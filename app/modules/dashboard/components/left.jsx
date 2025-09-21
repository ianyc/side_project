import { Card, Button, Form, Input } from 'antd';
import PropTypes from 'prop-types';

const Left = (props) => {

  const onFinish = (params) => {
    const { setMessageObj } = props;
    setMessageObj({
      name: params.name,
      message: params.message,
    });
  };

  return (
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
  );
};

Left.propTypes = {
  setMessageObj: PropTypes.func,
};

export default Left;
