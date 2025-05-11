import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Skill = {
  name: string;
  level: number;
  category:
    | "frontend"
    | "backend"
    | "general"
    | "technologies"
    | "shopify"
    | "wordpress"
    | "mobile";
};

const skills: Skill[] = [
  { name: "HTML", level: 100, category: "frontend" },
  { name: "CSS", level: 100, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "jQuery", level: 80, category: "frontend" },
  { name: "ReactJS", level: 30, category: "frontend" },
  { name: "Tailwind CSS", level: 50, category: "frontend" },
  { name: "Bootstrap", level: 85, category: "frontend" },

  { name: "NodeJs", level: 10, category: "backend" },
  { name: "Express", level: 80, category: "backend" },
  { name: "MongoDB", level: 75, category: "backend" },
  { name: "PostgreSQL", level: 80, category: "backend" },
  { name: "GraphQL", level: 75, category: "backend" },
  { name: "PHP", level: 80, category: "backend" },
  { name: "Docker", level: 70, category: "backend" },
  { name: "Python", level: 30, category: "backend" },

  { name: "Microsoft", level: 100, category: "general" },
  { name: "Google", level: 100, category: "general" },
  { name: "Jira", level: 100, category: "general" },
  { name: "Slack", level: 100, category: "general" },
  { name: "Figma", level: 100, category: "general" },
  { name: "VS Code", level: 100, category: "general" },

  { name: "NPM", level: 80, category: "technologies" },
  { name: "Git", level: 95, category: "technologies" },
  { name: "GitHub", level: 100, category: "technologies" },
  { name: "BitBucket", level: 75, category: "technologies" },
  { name: "DeployHQ", level: 75, category: "technologies" },
  { name: "Postman", level: 75, category: "technologies" },

  { name: "Liquid", level: 100, category: "shopify" },
  { name: "Theme Customizations", level: 100, category: "shopify" },
  { name: "Shopify CLI", level: 90, category: "shopify" },
  { name: "ThemeKit", level: 80, category: "shopify" },
  { name: "JSON Templates", level: 80, category: "shopify" },
  { name: "Schemas", level: 80, category: "shopify" },
  { name: "Shopify Apps", level: 60, category: "shopify" },

  { name: "REST API", level: 85, category: "wordpress" },
  { name: "Custom Blocks", level: 85, category: "wordpress" },
  { name: "Custom Post Types", level: 85, category: "wordpress" },
  { name: "Custom Fields", level: 85, category: "wordpress" },
  { name: "Custom Plugins", level: 85, category: "wordpress" },
  { name: "Custom Themes", level: 85, category: "wordpress" },

  { name: "Kotlin", level: 40, category: "mobile" },
  { name: "Java", level: 40, category: "mobile" },
  { name: "Swift", level: 40, category: "mobile" },
];

export const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const [activeCategory, setActiveCategory] = React.useState<string>("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" ref={ref} className="section bg-slate-50 dark:bg-navy">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">Skills & Expertise</h2>
          <p className="text-slate-dark dark:text-slate max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development
            world. Here are my main areas of expertise and the technologies I
            use most frequently.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white dark:bg-navy-light p-1 rounded-md shadow-sm">
            {[
              "all",
              "frontend",
              "backend",
              "general",
              "technologies",
              "shopify",
              "wordpress",
              "mobile",
            ].map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-md transition-all text-sm font-medium ${
                  activeCategory === category
                    ? "bg-primary-500 text-navy dark:text-white"
                    : "text-slate-dark dark:text-slate hover:bg-slate-100 dark:hover:bg-navy-dark"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="card"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium text-slate-900 dark:text-white">
                  {skill.name}
                </h3>
                <span className="text-sm text-primary-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-navy-dark rounded-full h-2.5">
                <motion.div
                  className="bg-primary-500 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
