import PropTypes from 'prop-types';

const InputNumber = ({ min, max, value, setterFunction, labelName }) => {
  const handleChange = (e) => {
    setterFunction(parseInt(e.target.value));
  };

  return (
    <div className="p-4 flex justify-center items-center">
      <input
        className="w-14 text-xl h-8 text center rounded-sm border-2 text-center shadow-xl"
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        name={labelName}
      />
      <label className=" px-4 text-center w-[100px] text-xl">{labelName}</label>
      <div className="text-sm rounded-full text-center w-[60px] text-white font-bold bg-indigo-700 p-1">
        {((value / 168) * 100).toFixed(2)}%
      </div>
    </div>
  );
};

InputNumber.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  setterFunction: PropTypes.func.isRequired,
  labelName: PropTypes.string.isRequired,
};

export default InputNumber;
