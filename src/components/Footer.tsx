import React from "react";
import { Github, Linkedin, Smartphone, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 bg-slate-100 dark:bg-navy-light">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-slate dark:text-slate-light text-sm">
              &copy; {year} Developer Portfolio. All Rights Reserved.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/AbedBashir/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-dark dark:text-slate hover:text-primary-500 dark:hover:text-primary-500 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/abedbashir/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-dark dark:text-slate hover:text-primary-500 dark:hover:text-primary-500 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://wa.me/+96181713782"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-dark dark:text-slate hover:text-primary-500 dark:hover:text-primary-500 transition-colors duration-300"
              aria-label="Smartphone"
            >
              <Smartphone size={20} />
            </a>
            <a
              href="mailto:dev@abedbashir.com"
              className="text-slate-dark dark:text-slate hover:text-primary-500 dark:hover:text-primary-500 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
