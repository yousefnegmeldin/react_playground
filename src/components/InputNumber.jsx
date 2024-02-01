import PropTypes from 'prop-types';

const InputNumber = ({ min, max, value, setterFunction }) => {
  const handleChange = (e) => {
    setterFunction(e.target.value);
  };

  return (
    <div className="p-4">
      <input
        className="w-14 text-xl h-8 text center rounded-sm border-2 text-center shadow-xl"
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

InputNumber.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  setterFunction: PropTypes.func.isRequired,
};

export default InputNumber;
