// this higher order component is used to wrap sections of the page to implement animations

"use client";
import { fadeIn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

function Section(
  { children }: { children: React.ReactNode },
) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
      variants={fadeIn("up", "tween", 0.2, 1.25)}
    >
      {children}
    </motion.div>
  );
}

export default Section;
