import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "am.ajnas.tir@gmail.com";
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div>
      <motion.button
        className="text-white w-[10rem] flex justify-center  relative cursor-pointer rounded-full bg-black px-4 py-2 hover:scale-105 ease-in-out duration-300 overflow-hidden "
        onClick={copyToClipboard}
      >
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.p
              key="copied"
              className="flex items-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <img
                className="h-4 w-4 mr-2"
                src="assets/copy-done.svg"
                alt="copy-done-icon"
              />
              Email Copied
            </motion.p>
          ) : (
            <motion.p
              key="copy"
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <img
                className="h-4 w-4 mr-2 justify-center align-middle"
                src="assets/copy.svg"
                alt="copy"
              />
              Copy Email
            </motion.p>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default CopyEmailButton;
