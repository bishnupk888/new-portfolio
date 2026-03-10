function Navbar() {
  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-md text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">MyPortfolio</h1>

      <div className="hidden md:flex gap-6">
        <a href="#about" className="hover:text-blue-400">About</a>
        <a href="#skills" className="hover:text-blue-400">Skills</a>
        <a href="#projects" className="hover:text-blue-400">Projects</a>
        <a href="#contact" className="hover:text-blue-400">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;