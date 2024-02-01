import { useState } from 'react';

const Component1 = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const incrementCounter = () => {
    setCounter((prev) => prev + 1);
  };
  const incrementCounterBad = () => {
    setCounter2(counter2 + 1);
    setCounter2(counter2 + 1);
  };

  const decrementCounter = () => {
    setCounter((prev) => prev - 1);
  };

  const decrementCounterBad = () => {
    setCounter2(counter2 - 1);
    setCounter2(counter2 - 1);
  };

  return (
    <div className="text-white text-4xl h-full flex flex-col mt-12 items-center ">
      <div className="flex justify-center items-center">
        <button
          onClick={decrementCounter}
          className="bg-secondary-button w-16  p-2 h-16 rounded-lg border"
        >
          -
        </button>
        <div className="mx-4 w-8 text-center ">{counter}</div>
        <button
          onClick={incrementCounter}
          className="bg-secondary-button w-16 p-2 h-16 rounded-lg border"
        >
          +
        </button>
      </div>
      <h1 className="mt-10 font-bold text-2xl">
        Takeaways from learning useState
      </h1>
      <p className="mt-8 text-lg px-32 pb-32">
        useState is a hook that allows you to use state in a functional
        component. It is simple and straightforward to use, but it is important
        to remember that it is a hook and therefore must be used at the top
        level of a functional component. The hook returns an array with two
        elements, the first being the state variable and the second being a
        function to update the state variable. You can destructure this array
        with the following syntax example:
        <br></br>
        <br></br>
        <code>const [counter,setCounter] = useState(0);</code>
        <br></br>
        <br></br>
        It is important to note that using the setter function has certain
        guidelines you need to follow in order to avoid bugs and unexpected
        behaviour. The setter function does not merge the old state with the new
        state, it replaces it. Therefore, if you want to update the state based
        on the previous state, you need to pass a function to the setter
        function such as the following:
        <br></br>
        <br></br>
        <code>setCounter((prevCounter)={'>'} prevCounter+1)</code>
        <br></br>
        <br></br>
        This would then replace the old state with a completely new state using
        the previous value of the old state, it is best to follow the practice
        that old states are immutable and should not be changed. This is because
        React uses the previous state to determine whether or not to re-render
        the component. And the setter functions do not update the state, they
        only update it when you pass an updater function. Therefore it can
        appear that nothing happens if you try to update the state more than
        once. Below is an example using the BAD way of setting states with the
        example of +2 and -2. It only increments by 1 because the it only sees
        the state at the start of the render.
        <br></br>
        <br></br>
        <div className="flex justify-center items-center">
          <button
            onClick={decrementCounterBad}
            className="bg-secondary-button w-16  p-2 h-16 rounded-lg border"
          >
            -2
          </button>
          <div className="mx-4 w-8 text-center ">{counter2}</div>
          <button
            onClick={incrementCounterBad}
            className="bg-secondary-button w-16 p-2 h-16 rounded-lg border"
          >
            +2
          </button>
        </div>
        <br></br>
        <br></br>
        Dealing with objects also has similiar behaviour, you need to use the
        spread operator to copy the old state and then update the new state.
        given the following example:
        <br></br>
        <br></br>
        <code>
          setObject(prevObject={'>'}
          {'{...prevObject,prevObject.count:999}'})
        </code>
      </p>
    </div>
  );
};

export default Component1;
