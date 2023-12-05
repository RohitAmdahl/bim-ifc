const DemoPage = () => {
  return (
    <div>
      <div className="  flex justify-between items-center w-full container bg-red-200  mx-auto">
        <nav className="flex max-w-3xl container mx-auto">
          <ul className="flex p-2 gap-1">
            <li className=" flex text-center p-3 text-md bg-slate-800 text-option">
              Load IFC
            </li>
            <li className=" flex text-center p-3 text-md bg-slate-800 text-option">
              Camera
            </li>
            <li className=" flex text-center p-3 text-md bg-slate-800 text-option">
              Exploded view
            </li>
            <li className=" flex text-center p-3 text-md bg-slate-800 text-option">
              Filter and Hide
            </li>
            <li className=" flex text-center p-3 text-md bg-slate-800 text-option">
              Exploded view
            </li>
            <li className=" flex text-center p-3 text-md bg-slate-800 text-option">
              Clipping / sections
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DemoPage;
