function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center p-4 bg-blue-900">
      <span className="font-bold text-lg">My Portfolio</span>
      <ul className="flex flex-row gap-6 list-none m-0 p-0">
        <li>
          <a href="#about" className="hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
        </li>
        <li>
          <a href="#experience" className="hover:underline">
            Experience
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
