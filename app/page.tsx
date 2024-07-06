'use client'
import React from 'react';
import { motion } from 'framer-motion';
import HomePage from './components/Home';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Home() {
  return (
    <motion.main
      className="px-8 py-8 scroll-smooth"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <HomePage />
    </motion.main>
  );
}
