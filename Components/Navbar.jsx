import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-wrap justify-around py-3">
      <h1 className="text-lg font-semibold">ToDo App</h1>
      <ul className="flex gap-[40px] text-lg">
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
