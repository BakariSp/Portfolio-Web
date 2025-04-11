import React from 'react';
import Image from 'next/image';
import styles from './embodied-interaction.module.css';

export default function EmbodiedInteractionPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <section className={styles.section}>
          <h1>Embodied Interaction</h1>
          <p className={styles.subtitle}>
            Exploring the relationship between physical movement and digital interfaces
          </p>
        </section>

        <section className={styles.section}>
          <h2>Technical Stack</h2>
          <div className={styles.techStack}>
            <span className={styles.techTag}>Unity</span>
            <span className={styles.techTag}>C#</span>
            <span className={styles.techTag}>Motion Capture</span>
            <span className={styles.techTag}>Computer Vision</span>
            <span className={styles.techTag}>Spatial Computing</span>
            <span className={styles.techTag}>Gesture Recognition</span>
          </div>
        </section>
        
        <section className={styles.section}>
          <h2>Project Overview</h2>
          <p>
            Embodied Interaction explores how our physical bodies can become the primary interface for digital experiences. 
            Moving beyond traditional input devices, this research investigates gesture recognition, spatial awareness, 
            and movement-based interaction to create more intuitive and engaging digital experiences.
          </p>
          <p>
            This project draws from theories of embodied cognition, which suggest that our understanding of the world 
            is fundamentally shaped by our physical experiences within it. By designing interfaces that respond to 
            natural body movements, we can create digital systems that feel more intuitive and connected to our 
            physical reality.
          </p>
        </section>
        
        <section className={styles.section}>
          <h2>Research Questions</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Natural Movement</h3>
              <p>
                How can we design digital interfaces that respond to the full range of human movement 
                capabilities without requiring users to learn artificial gestures?
              </p>
            </div>
            <div className={styles.card}>
              <h3>Spatial Awareness</h3>
              <p>
                How does our perception of physical space influence our understanding of digital environments, 
                and how can we leverage this relationship in interaction design?
              </p>
            </div>
            <div className={styles.card}>
              <h3>Feedback Loops</h3>
              <p>
                What types of sensory feedback most effectively communicate the relationship between 
                physical movement and digital response?
              </p>
            </div>
          </div>
        </section>
        
        <section className={styles.section}>
          <h2>Methodology</h2>
          <p>
            This project employs a mixed-methods approach combining technical development with user research:
          </p>
          <ul className={styles.step}>
            <li>Motion capture and gesture recognition using computer vision</li>
            <li>Spatial mapping to create responsive environments</li>
            <li>Iterative prototyping with diverse user groups</li>
            <li>Qualitative analysis of user experiences through interviews and observation</li>
          </ul>
          <p>
            By combining technical innovation with rigorous user research, we aim to develop interaction 
            paradigms that feel natural and intuitive while expanding the expressive potential of digital interfaces.
          </p>
        </section>

        <div className={styles.hero}>
          <Image 
            src="/projects/embodied-interaction/bg_img.png" 
            alt="Embodied Interaction" 
            fill
            className={styles.heroImage}
            style={{ objectFit: 'contain', objectPosition: 'center' }}
            priority
          />
        </div>
        
        <section className={styles.section}>
          <h2>Key Findings</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Gesture Vocabulary</h3>
              <p>
                Users naturally develop a consistent "vocabulary" of gestures when interacting with spatial interfaces, 
                suggesting the possibility of universal gestural languages for digital interaction.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Spatial Memory</h3>
              <p>
                Participants demonstrate improved recall and navigation when digital information is mapped to physical space, 
                leveraging our evolved capacity for spatial memory.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Embodied Learning</h3>
              <p>
                Complex concepts become more accessible when represented through embodied interaction, 
                particularly in educational contexts involving abstract or multidimensional information.
              </p>
            </div>
          </div>
        </section>
        
        <section className={styles.section}>
          <h2>Applications</h2>
          <p>
            The principles and technologies developed through this research have applications across multiple domains:
          </p>
          <ul>
            <li><strong>Education:</strong> Creating embodied learning experiences for complex subjects</li>
            <li><strong>Healthcare:</strong> Developing movement-based therapies and rehabilitation tools</li>
            <li><strong>Creative Expression:</strong> Enabling new forms of digital art and performance</li>
            <li><strong>Accessibility:</strong> Designing interfaces that accommodate diverse physical capabilities</li>
            <li><strong>Spatial Computing:</strong> Informing the design of AR/VR experiences</li>
          </ul>
        </section>
        
        <section className={styles.section}>
          <h2>Future Directions</h2>
          <p>
            As this research continues, we are exploring several promising directions:
          </p>
          <ul>
            <li>Integration with machine learning to create adaptive interfaces that evolve with user behavior</li>
            <li>Exploration of multi-person embodied interaction for collaborative environments</li>
            <li>Development of haptic feedback systems to enhance the sensory experience of embodied interaction</li>
            <li>Investigation of cross-cultural differences in movement patterns and gestural communication</li>
          </ul>
          <p>
            Through this ongoing work, we aim to develop a comprehensive framework for embodied interaction 
            design that can inform the next generation of human-computer interfaces.
          </p>
        </section>

       
      </div>
    </div>
  );
} 