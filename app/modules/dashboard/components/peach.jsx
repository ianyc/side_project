import PropTypes from 'prop-types';


const Peach = (props) => {

  const { gender, name, age } = props;
  return (
    <>
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
