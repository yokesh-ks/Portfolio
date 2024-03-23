import React from "react";
import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <motion.a
        href=""
        className="w-16 h-16 bg-primary text-primary-foreground flex items-center justify-center rounded-full text-2xl font-bold"
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        KS
      </motion.a>
    </div>
  );
};
