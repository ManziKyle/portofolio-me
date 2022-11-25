import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BackGroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center mt-3"
    >
      <div className="border border-[#cccc] rounded-full h-[100px] w-[100px] animate-ping mt-52" />
      <div className="border border-[#333333] rounded-full h-[200px] w-[200px] absolute mt-52" />
      <div className="border border-[#333333] rounded-full h-[300px] w-[300px] absolute mt-52" />
      <div className="border rounded-full border-[#f7AB0A] opacity-20 h-[400px] w-[400px] mt-52 absolute animate-pulse" />
      <div className="border border-[#333333] rounded-full h-[550px] w-[550px] mt-52 animate-ping absolute" />
    </motion.div>
  );
}
