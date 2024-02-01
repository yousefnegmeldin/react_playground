import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <header className="bg-primary border-b text-white border-slate-300 w-full relative p-4 mx-auto flex items-center justify-between ">
      <div className="flex items-center justify-center ">
        <Link className=" p-4" to="/">
          Home
        </Link>
        {/* <Link className=' p-4' href="">Playground</Link> */}
      </div>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.github.com/yousefnegmeldin"
      >
        Yousef Negmeldin
      </a>
    </header>
  );
};

export default Navbar;
