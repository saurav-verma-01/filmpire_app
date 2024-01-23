const NavBar = () => {
  return (
    <header className="bg-green-900 text-green-50 uppercase  px-6 py-3 ">
      <div className="container flex justify-between">
        <a href="#">
          <h1>Filmpire</h1>
        </a>

        <nav>
          <ul className="flex gap-4">
            <li>
              <a href="#">MovieInfo</a>
            </li>

            <li>
              <a href="#">Actors</a>
            </li>

            <li>
              <a href="#">Profile</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
