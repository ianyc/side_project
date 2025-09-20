import PropTypes from 'prop-types';
import { Button } from 'antd';
import { GiftOutlined } from '@ant-design/icons';
import { useState } from 'react';

const Peach = () => {
  const [ ifClick, setIfClick ] = useState(false);
  const clickMe = () => {
    setIfClick(!ifClick);
  }


  return (
    <>
      <Button color={'red'} variant="outlined"></Button>
      <Button
        className="button-field"
        type="text"
        icon={<GiftOutlined />}
        style={{
          fontSize: '50px',
          marginTop: '20px',
          marginLeft: '20px',
          color: ifClick ? 'red' : 'green',
        }}
        onClick={() => {
          clickMe();
        }}
        // onClick={clickMe()}
      >
        123
      </Button>

    </>
  )
};

Peach.propTypes = {
  gender: PropTypes.string,
  name: PropTypes.string,
  age: PropTypes.number,
}

export default Peach;
