"use client";
import dynamic from 'next/dynamic';
import { motion } from "framer-motion";  

// Lazy load components
const Hero = dynamic(() => import('@/components/main/Hero'), {
  loading: () => <div>Loading Hero...</div>,
  ssr: true, // Keep SSR enabled for Hero (above the fold, likely critical)
});

const Skills = dynamic(() => import('@/components/main/Skills'), {
  loading: () => <div>Loading Skills...</div>,
  ssr: false, // Disable SSR for below-the-fold components
});

const Encryption = dynamic(() => import('@/components/main/Encryption'), {
  loading: () => <div>Loading Encryption...</div>,
  ssr: false,
});

const Project = dynamic(() => import('@/components/main/Project'), {
  loading: () => <div>Loading Projects...</div>,
  ssr: false,
});

const WorkExperience = dynamic(() => import('@/components/main/WorkExperience'), {
  loading: () => <div>Loading Experience...</div>,
  ssr: false,
});

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <motion.section
          id="hero"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          
          <Hero />
        </motion.section>

        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Skills />
        </motion.section>

        <motion.section
          id="encryption"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Encryption />
        </motion.section>

        <motion.section
          id="project"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Project />
        </motion.section>

        <motion.section
          id="experience"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <WorkExperience />
        </motion.section>
      </div>
    </main>
  );
}