import React from 'react';
import { layoutConfig } from '@/lib/layout-config';
import Link from 'next/link';
import Image from 'next/image';
import styles from './about-me.module.css';

export default function AboutMe() {
  return (
    <div className={`${layoutConfig.sectionPadding} ${layoutConfig.containerMax} ${styles.aboutContainer}`}>
      <h1 className="text-4xl font-bold mb-12 text-center">Hello there! 👋</h1>
      
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Image container - left side */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className={`relative w-full max-w-sm aspect-[3/4] rounded-lg overflow-hidden shadow-lg ${styles.profileImage}`}>
            <Image 
              src="/profile_full.png" 
              alt="Linghang Cai full body portrait" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        
        {/* Content container - right side */}
        <div className="w-full md:w-2/3 space-y-8">
          <section className="mb-10">
            <h2 className={`text-2xl font-semibold mb-4 ${styles.sectionTitle}`}>Who I Am</h2>
            <p className={`text-lg ${styles.contentText}`}>
              I'm Linghang Cai, a creative technologist passionate about the intersection of design, 
              technology, and human experience. My work focuses on Human-Computer Interaction (HCI), 
              where I use rapid prototyping to build meaningful connections with users.
            </p>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-semibold mb-4 ${styles.sectionTitle}`}>My Interests</h2>
            <p className={`text-lg ${styles.contentText}`}>
              When I'm not designing or coding, you'll find me playing games, hiking in nature, 
              or simply enjoying the sunshine. I'm a social person who loves connecting with others - 
              I've built a community of over 1,000 followers on social media where I share insights 
              about VR, product design, and marketing.
            </p>
          </section>

          <section className="mb-10">
            <h2 className={`text-2xl font-semibold mb-4 ${styles.sectionTitle}`}>My Philosophy</h2>
            <p className={`text-lg ${styles.contentText}`}>
              I believe in learning through reading and practice. Many of my projects begin as 
              interesting ideas that emerge while I'm reading. I'm drawn to philosophy, particularly 
              the works of Foucault, and I firmly believe that the thoughtful application of technology 
              can help us become better humans rather than being replaced by AI. My goal is to create 
              products that genuinely improve humanity.
            </p>
          </section>

          <section className="mt-16 flex gap-4 flex-wrap">
            <Link href="/resume" className={styles.linkButton}>
              View My Resume
            </Link>
            <Link href="/projects" className={styles.linkButton}>
              Explore My Projects
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
} 