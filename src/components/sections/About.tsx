import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Download } from "lucide-react";
import CV from "./assets/CV.pdf";

export const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="section bg-white dark:bg-navy-dark"
    >
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <h2 className="section-title">About Me</h2>
            <p className="mb-4 text-slate-dark dark:text-slate leading-relaxed">
              Full Stack Web Developer. Created over 50+ Websites worldwide. I
              have 4+ years of expertise, and currently im focusing on ReactJS,
              NodeJs and Kotlin Mobile Development
            </p>
            <p className="mb-4 text-slate-dark dark:text-slate leading-relaxed">
              As a skilled Shopify Developer, I have successfully created and
              maintained several e-commerce websites, ensuring seamless
              functionality and exceptional user experience. My expertise
              includes implementing responsive designs, optimizing page load
              speeds, integrating third-party apps, and customizing themes to
              align with clients' branding requirements. I am proficient in
              HTML, CSS, JavaScript, and Liquid, enabling me to develop
              innovative and visually appealing online stores.
            </p>
            <p className="mb-6 text-slate-dark dark:text-slate leading-relaxed">
              One of the key strengths I bring to the table is my ability to
              work remotely with clients across the United States and Canada.
              Over the years, I have collaborated with numerous companies based
              in these regions, providing reliable support and delivering
              high-quality results. My effective communication skills, combined
              with my commitment to meeting project deadlines, have earned me a
              reputation for excellence and client satisfaction.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-3"
              >
                <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-navy-light text-slate-dark dark:text-slate">
                  Problem Solver
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-navy-light text-slate-dark dark:text-slate">
                  Team Player
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-navy-light text-slate-dark dark:text-slate">
                  Detail Oriented
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-navy-light text-slate-dark dark:text-slate">
                  Fast Learner
                </span>
              </motion.div>
            </div>

            <motion.a
              variants={itemVariants}
              href="src/components/assets/CV.pdf"
              download
              className="btn-primary inline-flex items-center"
            >
              <Download size={18} className="mr-2" />
              Download CV
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary-500/20 rounded-md transform translate-x-4 translate-y-4"></div>
              <div className="relative bg-slate-100 dark:bg-navy-light rounded-md overflow-hidden border-2 border-primary-500/30 p-2">
                <img
                  src="src/components/assets/about.jpg"
                  alt="Profile"
                  className="w-full h-auto rounded-md grayscale hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-primary-500/10 hover:opacity-0 transition-opacity duration-300"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
