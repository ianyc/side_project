import PropTypes from 'prop-types';
import { Button } from 'antd';
import { GiftOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Flex, Input } from 'antd';

const Peach = () => {

  const [inputString, setInputString] = useState('');
  const [copyString, setCopyString] = useState('');

  const [ifClick, setIfClick] = useState(false);
  const clickMe = () => {
    setIfClick(!ifClick);
    setCopyString(inputString);
  }


  return (
    <>
      <Flex style={{ marginTop: '20px' }}>
        <Input placeholder="請輸入文字"
          onChange={(e) => {
            setInputString(e.target.value);
            console.log(e.target.value);
          }}
          style={{
            width: '20%',
            marginLeft: '20px',
          }} />
        <Button
          className="button-field"
          type="text"
          icon={<GiftOutlined />}
          style={{
            fontSize: '30px',
            marginLeft: '20px',
            color: ifClick ? 'red' : 'green',
          }}
          onClick={() => {
            clickMe();
          }}
        // onClick={clickMe()}
        >
          複製字串到隔壁
        </Button>
        <Input placeholder="等等看我變魔術"
          variant="filled"
          value={copyString}
          style={{
            width: '20%',
            marginLeft: '20px',
          }} />
      </Flex>

    </>
  )
};

Peach.propTypes = {
  gender: PropTypes.string,
  name: PropTypes.string,
  age: PropTypes.number,
}

export default Peach;
