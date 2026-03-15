import { motion } from 'framer-motion';

const skillGroups = [
  {
    category: "Languages & Core",
    items: [
      { name: "JavaScript", icon: "js" },
      { name: "Node.js", icon: "nodejs" },
      { name: "HTML5", icon: "html" },
      { name: "CSS3", icon: "css" },
    ]
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React.js", icon: "react" },
      { name: "Express.js", icon: "express" },
      { name: "Redux", icon: "redux" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "jQuery", icon: "jquery" },
      { name: "Socket.IO", icon: "nodejs" },
    ]
  },
  {
    category: "Database & ODM",
    items: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgres" },
      { name: "Mongoose", icon: "mongodb" },
    ]
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS (EC2/Route53)", icon: "aws" },
      { name: "GCP", icon: "gcp" },
      { name: "Firebase", icon: "firebase" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "Git & GitHub", icon: "github" },
      { name: "Postman", icon: "postman" },
    ]
  },
  {
    category: "Payments & Services",
    items: [
      { name: "Razorpay", icon: "react" },
      { name: "Stripe", icon: "stripe" },
      { name: "Cloudinary", icon: "cloudinary" },
      { name: "Twilio", icon: "react" },
      { name: "NodeMailer", icon: "nodejs" },
      { name: "ZegoCloud", icon: "react" },
    ]
  },
  {
    category: "Architecture & Patterns",
    items: [
      { name: "MVC", icon: "nodejs" },
      { name: "REST API", icon: "postman" },
      { name: "HTTP", icon: "postman" },
      { name: "API Gateway", icon: "aws" },
      { name: "Multer", icon: "nodejs" },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
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
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 text-white">Skills & Expertise</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
      </motion.div>

      <div className="space-y-12">
        {skillGroups.map((group, groupIdx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-blue-400 border-l-4 border-blue-500 pl-4">
              {group.category}
            </h3>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-4"
            >
              {group.items.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, translateY: -5 }}
                  className="glass-tag flex items-center gap-3 px-5 py-3 cursor-default group"
                >
                  <img 
                    src={`https://skillicons.dev/icons?i=${skill.icon}`} 
                    alt={skill.name}
                    className="w-6 h-6 object-contain transition-all duration-300"
                  />
                  <span className="font-medium text-gray-300 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;