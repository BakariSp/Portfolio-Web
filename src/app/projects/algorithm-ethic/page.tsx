import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './algorithm-ethic.module.css';

export default function AlgorithmEthicPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <Image 
          src="/projects/algorithm-ethic/hero-img.png" 
          alt="Algorithm Ethics Visualization" 
          fill
          className={styles.heroImage}
          priority
        />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Algorithm Ethic</h1>
          <p className={styles.subtitle}>
            Exploring ethical considerations in algorithms through interactive visualization
          </p>
          <a 
            href="https://bakarisp.github.io/web/src/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.externalLink}
          >
            Experience the Interactive Web Art
          </a>
        </div>
      </div>
      
      <div className={styles.content}>
        <section className={styles.section}>
          <h2>Technical Stack</h2>
          <div className={styles.techStack}>
            <span className={styles.techTag}>Three.js</span>
            <span className={styles.techTag}>JavaScript</span>
            <span className={styles.techTag}>WebGL</span>
            <span className={styles.techTag}>GLSL Shaders</span>
            <span className={styles.techTag}>HTML5/CSS3</span>
            <span className={styles.techTag}>Generative Art</span>
            <span className={styles.techTag}>Data Visualization</span>
          </div>
        </section>
        
        <section className={styles.section}>
          <h2>Project Overview</h2>
          <p>
            "Algorithm Ethic" is an interactive web experience that explores the ethical implications 
            of algorithms in our daily lives. Through generative art and data visualization created with 
            Three.js, the project makes abstract algorithmic concepts tangible and visually engaging.
          </p>
          <p>
            The web experience invites viewers to interact with various algorithmic systems, revealing 
            how small changes in parameters can lead to dramatically different outcomes—mirroring the 
            real-world impact of algorithmic decision-making on individuals and communities.
          </p>
          <div className={styles.imageContainer}>
            <Image
              src="/projects/algorithm-ethic/visualization-preview.png"
              alt="Algorithm Ethics Visualization Preview"
              width={1200}
              height={675}
              className={styles.visualizationPreview}
            />
            <p className={styles.imageCaption}>Interactive visualization of algorithmic bias patterns</p>
          </div>
        </section>
        
        <section className={styles.section}>
          <h2>Conceptual Framework</h2>
          <p>
            This project examines three key ethical dimensions of algorithms:
          </p>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Transparency</h3>
              <p>
                Exploring how the opacity of algorithmic systems affects our ability to understand and 
                critique their decisions. The visualization uses layers of abstraction that can be peeled 
                away through interaction, revealing the underlying logic.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Bias</h3>
              <p>
                Demonstrating how algorithms can amplify existing social biases through data selection 
                and weighting. The interactive elements allow users to see how changing input parameters 
                affects the distribution of outcomes across different groups.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Accountability</h3>
              <p>
                Questioning who bears responsibility for algorithmic decisions and their consequences. 
                The visualization traces decision paths and highlights points where human judgment 
                intersects with automated processes.
              </p>
            </div>
          </div>
        </section>
        
        <section className={styles.section}>
          <h2>Technical Implementation</h2>
          <p>
            The project utilizes 3D models created in Blender that are integrated into the web experience.
            Rather than using custom shaders, the visualization relies on pre-built 3D assets with 
            materials that dynamically respond to the user's scroll position on the page.
          </p>
          <p>
            Key technical features include:
          </p>
          <ul className={styles.step}>
            <li>Custom 3D models designed and textured in Blender</li>
            <li>Scroll-based animation that transforms models as users navigate the page</li>
            <li>Dynamic material properties that change based on user interaction</li>
            <li>Responsive design that adapts to different devices and screen sizes</li>
            <li>Optimized 3D asset loading for smooth performance across devices</li>
          </ul>
        </section>
        
        <section className={styles.section}>
          <h2>Interactive Experience</h2>
          <p>
            The web experience is divided into three interconnected chapters, each focusing on a different 
            aspect of algorithmic ethics:
          </p>
          <ol>
            <li>
              <strong>The Black Box:</strong> Users navigate through an abstract representation of an 
              algorithmic system, gradually revealing its inner workings through interaction.
            </li>
            <li>
              <strong>Patterns of Inequality:</strong> A data-driven visualization shows how algorithms 
              can reinforce existing social disparities when trained on biased data.
            </li>
            <li>
              <strong>Human in the Loop:</strong> An interactive simulation where users must decide when 
              and how to intervene in automated decision processes.
            </li>
          </ol>
          <div className={styles.imageContainer}>
            <div className={styles.videoWrapper}>
              <iframe 
                src="https://www.youtube.com/embed/DgHEwJ8Jevo" 
                title="Algorithm Ethic: Website Design" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className={styles.demoVideo}
              ></iframe>
            </div>
            <p className={styles.imageCaption}>Demonstration of the interactive experience</p>
          </div>
        </section>
        
        <section className={styles.section}>
          <h2>Research and Impact</h2>
          <p>
            This project emerged from research into how artistic visualization can make complex ethical 
            issues more accessible to non-technical audiences. By translating abstract algorithmic concepts 
            into tangible visual experiences, the project aims to:
          </p>
          <ul>
            <li>Increase public literacy around algorithmic systems and their societal impacts</li>
            <li>Provide a platform for discussion about ethical technology development</li>
            <li>Demonstrate how art and technology can combine to address complex social issues</li>
          </ul>
          <p>
            The web experience has been featured in digital art exhibitions and used as an educational 
            tool in university courses on technology ethics and digital media.
          </p>
        </section>
      </div>
    </div>
  );
} 