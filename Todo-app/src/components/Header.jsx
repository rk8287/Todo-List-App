import React from "react";

function Header() {
  return (
    <header className="flex justify-between items-center p-5 border-b bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md">
      <h1 className="text-3xl font-bold tracking-wide">TODO</h1>

      <div className="flex gap-4">
        <button className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition">
          Dark Mode
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 transition">
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
