

function Header() {

  const currentDate = new Date().toLocaleDateString();

  return (
    <header className="flex px-4 py-4 bg-blue-900 text-center sm:text-left justify-between items-center p-5 border-b bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md">
      <h1 className="text-3xl font-bold tracking-wide">TODO ➕</h1>

      <div className="flex gap-4">
        <a href="https://personal-portfolio-qxcs.vercel.app/" target="_blank" className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition">
          Check My Portfolio
        </a>
        <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-red-700 transition">
          Date 📅 :{currentDate}
        </button>
      </div>
    </header>
  );
}

export default Header;
