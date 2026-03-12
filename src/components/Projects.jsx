const projects = [
  {
    title: "Project One",
    desc: "A full-stack React + Node.js web application.",
    link: "#",
  },
  {
    title: "Project Two",
    desc: "A responsive MERN stack e-commerce platform.",
    link: "#",
  },
  {
    title: "Project Three",
    desc: "A real-time chat application using Socket.IO.",
    link: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div key={project.title} className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
            <a href={project.link} className="glass-btn text-sm">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;