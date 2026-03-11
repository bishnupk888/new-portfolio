function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6">

      <img
        src="https://github.com/bishnupk888.png"
        alt="Bishnu PK"
        className="w-40 h-40 rounded-full mb-6 border-4 border-blue-500 object-cover shadow-lg"
      />

      <h1 className="text-4xl md:text-6xl font-bold">
        Hi, I'm <span className="text-blue-500">Bishnu PK</span>
      </h1>

      <p className="mt-4 text-gray-400 max-w-xl">
        I build modern web applications using MERN Stack.
      </p>

      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600"
      >
        View Projects
      </a>

    </section>
  );
}

export default Hero;