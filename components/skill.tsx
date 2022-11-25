import { motion } from "framer-motion";
import React from "react";

type Props = {
  directionLeft?: boolean;
};

function skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        src="data:image/png;base64,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"
        className="w-20 h-20 object-cover rounded-full border border-gray-500 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
    </div>
  );
}

export default skill;
