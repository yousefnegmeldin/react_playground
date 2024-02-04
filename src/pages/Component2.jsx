import { useEffect, useState } from 'react';

const Component2 = () => {
  const [data, setData] = useState('posts');
  const [dataArr, setDataArr] = useState([]);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handleReisze = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${data}`)
      .then((response) => response.json())
      .then((json) => setDataArr(json));
  }, [data]);

  useEffect(() => {
    window.addEventListener('resize', handleReisze);
    return () => {
      window.removeEventListener('resize', handleReisze);
    };
  }, [windowSize]);

  return (
    <div className="text-white h-full flex flex-col items-center pt-16">
      <h1 className="mt-10 font-bold text-2xl">
        Takeaways from learning useState
      </h1>
      <p className="mt-8 text-lg px-32 pb-16">
        The useEffect hook is used to activate side effects when a component is
        rendered and also when a variable changes, you can add it to a
        dependency array to trigger the hook. The useEffect hook can be useful
        when fetching data from an api as you can see below i used the free REST
        API of{' '}
        <a
          className="underline"
          href="https://jsonplaceholder.typicode.com/guide/"
        >
          https://jsonplaceholder.typicode.com/guide/
        </a>
        . It is also useful for events such as resizing and so on. One thing I
        learned is that you can return a function in the useEffect hook which
        will be called when the component is unmounted, meaning you can clean up
        after your event listeners so you don&apos;t have any memory leaks.
      </p>
      <div className="mb-[20px]">
        Window Size: {windowSize} {'(Resize to see changes)'}
      </div>
      <div className="mb-[30px]">
        <button
          className="bg-secondary-button w-16 mx-8 p-2 h-16 rounded-lg border"
          onClick={() => setData('posts')}
        >
          posts
        </button>
        <button
          className="bg-secondary-button w-auto mx-8 p-2 h-16 rounded-lg border"
          onClick={() => setData('comments')}
        >
          comments
        </button>
        <button
          className="bg-secondary-button w-16 mx-8 p-2 h-16 rounded-lg border"
          onClick={() => setData('users')}
        >
          users
        </button>
      </div>
      <div className="truncate w-3/4">
        {dataArr.map((item) => {
          return (
            <p className="text-sm" key={item}>
              {JSON.stringify(item)}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Component2;
