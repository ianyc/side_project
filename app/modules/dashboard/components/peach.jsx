import PropTypes from 'prop-types';
import { Button } from 'antd';
import { Typography } from 'antd';

const Peach = (props) => {

  const { gender, name, age } = props;
  const { Title } = Typography;
  return (
    <>
      <Button type="dashed">Dashed Button</Button>
      <Title>h1. Ant Design</Title>
      <Title level={2}>h2. Ant Design</Title>
      <div>{gender}</div>
      <div>{name}</div>
      <div>{age}</div>
      <div>123</div>
      <span>456</span>
    </>
  )
};

Peach.propTypes = {
  gender: PropTypes.string,
  name: PropTypes.string,
  age: PropTypes.number,
}

export default Peach;
