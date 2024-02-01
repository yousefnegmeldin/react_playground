import PropTypes from 'prop-types';

const InputNumber = ({min,max,value,setterFunction}) => {

    const handleChange = (e)=>{
        setterFunction(e.target.value);
    }

  return (
    <input type="number" min={min} max={max} value={value} onChange={handleChange}/>
  )
}

InputNumber.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  setterFunction: PropTypes.func.isRequired
};

export default InputNumber