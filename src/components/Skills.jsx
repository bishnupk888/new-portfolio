import { motion } from 'framer-motion';

const skills = [
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "JavaScript", icon: "js" },
  { name: "React", icon: "react" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Tailwind", icon: "tailwind" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Express", icon: "express" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4 text-white">Skills</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-6"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            className="glass-tag flex items-center gap-3 px-6 py-3 cursor-default"
          >
            <img 
              src={`https://skillicons.dev/icons?i=${skill.icon}`} 
              alt={skill.name}
              className="w-6 h-6 object-contain"
            />
            <span className="font-medium text-gray-200">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;