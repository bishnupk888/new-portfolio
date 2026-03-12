function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Tailwind", "MongoDB", "Express"];

  return (
    <section id="skills" className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span key={skill} className="glass-tag">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;