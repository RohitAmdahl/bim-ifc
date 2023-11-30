import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="pb-4  ">
      <header className="container mx-auto border-b-2 pb-2 flex justify-between items-baseline max-w-4xl px-2 ">
        <Navbar />
      </header>
    </div>
  );
};

export default Header;
