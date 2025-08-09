import React from "react";
import FlipWords from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Modern", "Innovative", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <motion.div
      className="z-10 mt-20 text-center 
                md:mt-40 md:text-left rounded-3xl bg-clip-text"
    >
      {/*desktop*/}
      <motion.div className="flex-col hidden md:flex c-space">
        <motion.h1
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
          className="text-4xl font-medium"
        >
          Hi there! I'm Ajnas
        </motion.h1>
        <motion.div className="flex flex-col items-start">
          <motion.p
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.3 }}
            className="text-5xl font-medium text-neutral-300"
          >
            A passionate web developer <br />
            Dedicated to crafting
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="text-8xl font-black text-white"
            />
          </motion.div>
          <motion.p
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
            className="text-4xl font-medium text-neutral-300"
          >
            Web solutions
          </motion.p>
        </motion.div>
      </motion.div>
      {/*Mobile*/}
      <motion.div className="flex-col md:hidden c-space">
        <motion.h1
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
          className="text-4xl font-medium"
        >
          Hi there! I'm Ajnas
        </motion.h1>
        <motion.div className="flex flex-col place-items-center">
          <motion.p
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.3 }}
            className="text-5xl font-medium text-neutral-300"
          >
            A web developer <br />
            Buidling
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="text-7xl font-black text-white"
            />
          </motion.div>
          <motion.p
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
            className="text-4xl font-medium text-neutral-300"
          >
            Web solutions
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroText;
