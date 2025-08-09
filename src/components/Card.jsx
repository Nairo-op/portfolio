import { motion } from "framer-motion";

export const Card = ({ text, style, image, containerRef }) => {
  const glowRingStyle = {
    boxShadow: "0 0 2px 2px rgba(255,255,255,0.3)",
    border: ".5px solid rgba(255,255,255,0.3)",
  };

  return image ? (
    <motion.img
      className="absolute w-15 cursor-grab"
      src={image}
      alt={text}
      style={style}
      whileHover={{ scale: 1.1 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    />
  ) : (
    <motion.div
      className="absolute px-1 py-4 text-xl text-center ring rounded-full font-extralight w-[12rem] cursor-grab"
      style={{
        ...style,
        ...glowRingStyle,
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(8px)",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
      }}
      whileHover={{ scale: 1.1 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    >
      {text}
    </motion.div>
  );
};
