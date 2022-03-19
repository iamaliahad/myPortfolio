import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";

import "./Header.scss";



const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Ali Ahad</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Full Stack Developer</p>
        </div>
        <div className="button">
          <a href="/aliahad.pdf" class="btn">
            My Resume
          </a>
          <a href="#contact" class="btn">
            Hire me
          </a>
        </div>
        
      </div>
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
