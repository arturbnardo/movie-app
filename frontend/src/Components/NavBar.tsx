import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="bg-black p-4 md:py-4 md:px-8 flex justify-between items-center shadow">
      <div className="text-[1.2rem] md:text-2xl font-bold text-white">
        <Link to="/">Movie App</Link>
      </div>

      <div className="flex gap-4 md:gap-8">
        <Link
          to="/"
          className="p-2 md:p-4 hover:bg-white/10 rounded text-white"
        >
          Home
        </Link>

        <Link
          to="/favorites"
          className="p-2 md:p-4 hover:bg-white/10 rounded text-white"
        >
          Favorites
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
