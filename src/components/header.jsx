// import React from 'react'

const header = () => {
  return (
    <div>
      <header className="bg-orange-300 flex justify-between h-24 items-center px-10">
        <div>
          <h2 className="text-3xl">Pravesh</h2>
        </div>
        <nav className="flex gap-5">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact Us</li>
        </nav>
      </header>
    </div>
  );
};

export default header;
