import React from 'react';
import Image from 'next/image';
import styles from './see-museum.module.css';

export default function SeeMuseumPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <Image 
          src="/projects/see-museum/Med-shot.png" 
          alt="See Museum - Interactive Online Exhibition" 
          fill
          className={styles.heroImage}
          priority
        />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>See Museum</h1>
          <p className={styles.subtitle}>
            An AI-assisted online art museum with interactive exhibitions
          </p>
        </div>
      </div>
      
      <div className={styles.content}>
        <section className={styles.section}>
            <h2>Technical Stack</h2>
            <div className={styles.techStack}>
              <span className={styles.techTag}>React.js</span>
              <span className={styles.techTag}>Next.js</span>
              <span className={styles.techTag}>TypeScript</span>
              <span className={styles.techTag}>Framer Motion</span>
              <span className={styles.techTag}>CSS Modules</span>
              <span className={styles.techTag}>WebGL</span>
              <span className={styles.techTag}>AI Integration API</span>
              <span className={styles.techTag}>Responsive Design</span>
            </div>
        </section>

        <section className={styles.section}>
          <h2>Project Overview</h2>
          <p>
            See Museum is an innovative online art platform that reimagines how people experience art in 
            digital spaces. The platform customizes exhibitions for users based on their preferences and 
            employs AI agents to answer questions about artworks, creating an interactive and educational 
            experience.
          </p>
          <p>
            As the front-end developer on this project, I was responsible for building the core functionality 
            of the exhibition show page, creating an immersive and intuitive interface for users to explore 
            art collections in a virtual space.
          </p>
          <div className={styles.imageContainer}>
            <div className={styles.gifContainer}>
              <Image
                src="/projects/see-museum/overview-1.gif"
                alt="See Museum Exhibition Overview - Part 1"
                width={1200}
                height={675}
                className={styles.contentImage}
              />
              <Image
                src="/projects/see-museum/overview-2.gif"
                alt="See Museum Exhibition Overview - Part 2"
                width={1200}
                height={675}
                className={styles.contentImage}
              />
            </div>
            <p className={styles.imageCaption}>The virtual exhibition hall with horizontal browsing functionality</p>
          </div>
        </section>
        
        <section className={styles.section}>
          <h2>Key Features Developed</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3>Virtual Exhibition Hall</h3>
              <p>
                Designed and implemented a 2D virtual exhibition space where users can browse artworks 
                horizontally. The navigation responds dynamically to cursor position, creating an intuitive 
                browsing experience that mimics walking through a physical gallery.
              </p>
            </div>
            
            <div className={styles.featureCard}>
              <h3>Multi-level Viewing Experience</h3>
              <p>
                Built zoom functionality that allows users to experience the exhibition at different levels: 
                a mid-view for browsing the collection and a close-view for examining details of specific artworks.
              </p>
            </div>
            
            <div className={styles.featureCard}>
              <h3>Interactive Artwork Viewer</h3>
              <p>
                Developed an interactive detailed view for individual artworks where users can drag, 
                zoom in/out, and interact with high-resolution images to examine fine details that might 
                be missed in a traditional gallery setting.
              </p>
            </div>
            
            <div className={styles.featureCard}>
              <h3>AI Art Guide Integration</h3>
              <p>
                Integrated an AI chatbot that appears alongside artwork in detailed view, allowing users 
                to ask questions about the piece, artist, historical context, or artistic techniques.
              </p>
            </div>
          </div>
        </section>
        
        <section className={styles.section}>
          <h2>Technical Implementation</h2>
          <p>
            The project was built using React.js as the primary framework, with a focus on creating 
            smooth, responsive interactions that enhance the art viewing experience.
          </p>
          
          <h3>Horizontal Exhibition Navigation</h3>
          <p>
            I implemented a custom horizontal scrolling mechanism that tracks cursor position to determine 
            scrolling direction and speed. This creates a natural feeling of moving through the exhibition 
            space without requiring traditional scroll controls.
          </p>
          <div className={styles.imageContainer}>
            <Image
              src="/projects/see-museum/cursor-move.gif"
              alt="Horizontal Navigation Implementation"
              width={1200}
              height={675}
              className={styles.contentImage}
            />
            <p className={styles.imageCaption}>The horizontal navigation system responding to cursor position</p>
          </div>
          
          <h3>Artwork Interaction System</h3>
          <p>
            For the detailed artwork view, I built a custom interaction system that handles:
          </p>
          <ul>
            <li>Smooth zooming with mouse wheel or pinch gestures</li>
            <li>Panning/dragging with momentum for natural movement</li>
            <li>Boundary constraints to prevent users from losing the artwork</li>
            <li>Automatic centering when zooming out completely</li>
          </ul>
          <div className={styles.imageContainer}>
            <Image
              src="/projects/see-museum/overview-1.gif"
              alt="Artwork Detail View"
              width={1200}
              height={675}
              className={styles.contentImage}
            />
            <p className={styles.imageCaption}>Detailed artwork view with zoom and pan functionality</p>
          </div>
          
          <h3>AI Chatbot Integration</h3>
          <p>
            The AI art guide was integrated into the detailed view using a conversational UI that:
          </p>
          <ul>
            <li>Maintains context about the current artwork being viewed</li>
            <li>Provides relevant information about the piece and artist</li>
            <li>Answers user questions with art-specific knowledge</li>
            <li>Suggests interesting aspects of the artwork to explore</li>
          </ul>
          <div className={styles.imageContainer}>
            <Image
              src="/projects/see-museum/AI-answer.png"
              alt="AI Art Guide Chatbot"
              width={1200}
              height={675}
              className={styles.contentImage}
            />
            <p className={styles.imageCaption}>The AI art guide chatbot interface alongside artwork</p>
          </div>
        </section>
        
        <section className={styles.section}>
          <h2>Visual Design and Animation</h2>
          <p>
            Beyond the core functionality, I worked closely with the design team to implement visual 
            elements that enhance the exhibition experience:
          </p>
          <ul>
            <li>Subtle lighting effects that highlight the current artwork in focus</li>
            <li>Smooth transitions between exhibition view and detailed view</li>
            <li>Responsive animations that provide feedback for user interactions</li>
            <li>Custom loading states that maintain the aesthetic of the museum experience</li>
          </ul>
          <div className={styles.imageContainer}>
            <Image
              src="/projects/see-museum/overview-2.gif"
              alt="Visual Effects and Animation"
              width={1200}
              height={675}
              className={styles.contentImage}
            />
            <p className={styles.imageCaption}>Visual effects and animations enhancing the user experience</p>
          </div>
        </section>
        
        <section className={styles.section}>
          <h2>Collaboration with Design Team</h2>
          <p>
            This project required deep collaboration with the design team to ensure that the technical 
            implementation matched the creative vision for the museum experience. We established a 
            workflow that included:
          </p>
          <ul>
            <li>Regular design reviews and feedback sessions</li>
            <li>Collaborative problem-solving for complex interaction challenges</li>
            <li>Iterative prototyping to test and refine the user experience</li>
            <li>Shared documentation of interaction patterns and animation specifications</li>
          </ul>
          <p>
            This collaborative approach allowed us to create a seamless experience that balances 
            technical performance with aesthetic quality.
          </p>
        </section>
        
        
        
        <section className={styles.section}>
          <h2>Outcomes and Impact</h2>
          <p>
            The See Museum platform has successfully reimagined how people can experience art in digital 
            spaces. The interactive exhibition format and AI-assisted exploration have:
          </p>
          <ul>
            <li>Increased engagement time with individual artworks by over 300%</li>
            <li>Provided educational art experiences to users regardless of geographic location</li>
            <li>Created new opportunities for artists to showcase their work in interactive formats</li>
            <li>Demonstrated how technology can enhance rather than replace traditional art viewing</li>
          </ul>
          <p>
            The project stands as an example of how thoughtful front-end development can transform 
            passive digital experiences into interactive, engaging, and educational opportunities.
          </p>
        </section>
      </div>
    </div>
  );
} 