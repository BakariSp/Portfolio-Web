import React from 'react';
import styles from './perceptar.module.css';

export default function PerceptarPage() {
  return (
    <div className={styles.container}>
      <div className={styles.videoWrapper}>
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/vNHnjQEOBsA?si=It_zu1tl7-nOx84z" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
      </div>
      
      <div className={styles.content}>
        <h1>Perceptar — A Speculative Interface for Spatial Imagination</h1>
        
        <p>
          Perceptar is an experimental interface that explores how the body, space, and interaction can form a new grammar of creation. 
          Set in a responsive virtual environment, the system invites users to reshape themselves, manipulate objects from a distance, 
          and traverse space beyond scale—using only gesture, gaze, and presence.
        </p>
        
        <p>
          Rather than presenting space as a static backdrop, Perceptar turns it into a living, reactive medium. 
          Users are guided by a conversational system that responds like a companion—teaching through dialogue, 
          encouraging exploration, and eventually stepping back as users build worlds of their own.
        </p>
        
        <p>
          This project is inspired by cinematic storytelling, speculative interfaces, and embodied interaction research. 
          It asks not how we can design in space, but how space can become a language—one that remembers, responds, and evolves.
        </p>
        
        <div className={styles.features}>
          <h2>🔍 Core Features</h2>
          <ul>
            <li>Embodied interaction: gesture-based scaling, drawing, teleportation</li>
            <li>Narrative AI system: reactive voice-driven guide</li>
            <li>Multi-scale environment: from intimate space to cosmic architecture</li>
            <li>Free creation mode: no goals, no rules—just your spatial grammar</li>
          </ul>
        </div>
        
        <div className={styles.tech}>
          <h2>🛠 Built with</h2>
          <p>Unity · VR Interaction Toolkit · Custom Dialogue Engine · Spatial Sound Design</p>
        </div>
        
        <div className={styles.research}>
          <h2>Research Focus</h2>
          <h3>Defining 'Natural Interaction' in Virtual Spatial Design</h3>
          <p>
            What are the design and research avenues for creating more 'natural interactions' in virtual spatial design?
          </p>
          <p>
            This involves exploring how users can engage with virtual environments in ways that feel intuitive and satisfying,
            emphasizing the natural integration of human gestures, cognition, and technology.
          </p>
          
          <h3>Applying 'Natural Interaction' to a Spatial Design Tool</h3>
          <p>
            How can we integrate natural interactions into a spatial design tool to enable users to build worlds with satisfaction?
          </p>
          <p>
            The tool should enhance the user's creative experience by providing seamless, intuitive interaction methods that 
            feel aligned with how humans naturally interact with physical space.
          </p>
        </div>
        
        <div className={styles.challenges}>
          <h2>Challenges and Opportunities</h2>
          <h3>Subjectivity:</h3>
          <p>
            Designing for subjectivity means acknowledging that users may have different approaches to creating virtual spaces. 
            A flexible tool must accommodate various design philosophies and personal styles.
          </p>
          
          <h3>Cultural Understanding:</h3>
          <p>
            Different cultural interpretations of gestures and interactions may require adaptable systems 
            that can account for these variations in user behavior.
          </p>
        </div>
        
        <div className={styles.progress}>
          <div className={styles.column}>
            <h2>Previous Projects</h2>
            <ul>
              <li>Gesture Recognition</li>
              <li>Building Game</li>
              <li>AR Place</li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h2>Current Progress</h2>
            <ul>
              <li>Insights: gesture + function</li>
              <li>Prototype: VR → Draw rectangle/circle</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.future}>
          <h2>Future Directions for Discussion</h2>
          <h3>Adaptive Systems - A system can learn.</h3>
          <p>
            How can a system learn user intentions? The next step is to design adaptive systems 
            that evolve based on user behavior, helping users refine their interactions over time.
          </p>
          
          <h3>Verbal Cues/Prompts - Embodiment</h3>
          <p>
            Introducing verbal inputs to refine AI algorithms and enhance context understanding, 
            allowing users to interact with the system using both gestures and voice commands.
          </p>
        </div>
      </div>
    </div>
  );
}
