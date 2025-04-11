import React from 'react';
import Image from 'next/image';
import styles from './perceptar.module.css';

export default function PerceptarPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        
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
        <h1>Perceptar — A Speculative Interface for Spatial Imagination</h1>
        <section className={styles.section}>
          <h2>Technical Stack</h2>
          <div className={styles.techStack}>
            <span className={styles.techTag}>Unity</span>
            <span className={styles.techTag}>Oculus Interaction SDK</span>
            <span className={styles.techTag}>C#</span>
            <span className={styles.techTag}>Custom Dialogue Engine</span>
            <span className={styles.techTag}>Spatial Sound Design</span>
            <span className={styles.techTag}>3D Modeling</span>
          </div>
        </section>
        
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
        
        <div className={styles.imageGallery}>
          <h2>Research & Development Process</h2>
          <div className={styles.galleryGrid}>
            <div className={styles.galleryItem}>
              <Image 
                src="/projects/perceptar/research-0.png" 
                alt="Research diagram showing embodied interactions in virtual spatial design" 
                className={styles.galleryImage}
                width={800}
                height={600}
              />
              <p className={styles.caption}>Exploring embodied interactions in virtual spatial design</p>
            </div>
            <div className={styles.galleryItem}>
              <Image 
                src="/projects/perceptar/research-1.png" 
                alt="Research diagram exploring natural interaction concepts" 
                className={styles.galleryImage}
                width={800}
                height={600}
              />
              <p className={styles.caption}>Defining natural interaction through bodily inputs, context understanding, and verbal commands</p>
            </div>
            <div className={styles.galleryItem}>
              <Image 
                src="/projects/perceptar/process-1.png" 
                alt="Process diagram showing gesture-based spatial design" 
                className={styles.galleryImage}
                width={800}
                height={600}
              />
              <p className={styles.caption}>Users making spatial adjustments through intuitive body movements and gestures</p>
            </div>
            <div className={styles.galleryItem}>
              <Image 
                src="/projects/perceptar/mapping-diagram.png" 
                alt="Spatial mapping diagram" 
                className={styles.galleryImage}
                width={800}
                height={600}
              />
              <p className={styles.caption}>Mapping function translating user's mental model to actual spatial coordinates</p>
            </div>
          </div>


          <h2>Visual Design</h2>
          <div className={styles.galleryGrid}>
            <div className={styles.galleryItem}>
              <Image 
                src="/projects/perceptar/visual-design-0.png" 
                alt="Visual design concepts for the Perceptar interface" 
                className={styles.galleryImage}
                width={800}
                height={600}
              />
              <p className={styles.caption}>Early visual design concepts exploring the interface aesthetics</p>
            </div>
            <div className={styles.galleryItem}>
              <Image 
                src="/projects/perceptar/visual-design-1.png" 
                alt="Advanced visual design for Perceptar" 
                className={styles.galleryImage}
                width={800}
                height={600}
              />
              <p className={styles.caption}>Refined visual language for the spatial interaction system</p>
            </div>
          </div>

        </div>
        
        <div className={styles.prototypes}>
          <h2>Prototype Evolution</h2>
          
          <div className={styles.prototypeItem}>
            <h3>Prototype 1: Gesture Recognition & Auto-Smoothing</h3>
            <div className={styles.prototypeContent}>
              <div className={styles.prototypeMedia}>
                <Image 
                  src="/projects/perceptar/prototype1.gif" 
                  alt="Demonstration of auto-smoothing for rectangles and circles" 
                  className={styles.prototypeGif}
                  width={800}
                  height={600}
                />
              </div>
              <div className={styles.prototypeDescription}>
                <p>
                  The first prototype focused on understanding how users naturally draw in 3D space. 
                  We implemented an auto-smoothing algorithm that detects symmetrical patterns in user gestures, 
                  automatically refining rough drawings into perfect rectangles or circles.
                </p>
                <p>
                  This system recognizes the intent behind the gesture rather than requiring precise movements, 
                  making spatial creation more intuitive and forgiving.
                </p>
              </div>
            </div>
          </div>
          
          <div className={styles.prototypeItem}>
            <h3>Prototype 2: Mental-to-Physical Space Mapping</h3>
            <div className={styles.prototypeContent}>
              <div className={styles.prototypeMedia}>
                <Image 
                  src="/projects/perceptar/prototype2.gif" 
                  alt="Demonstration of mental to physical space mapping" 
                  className={styles.prototypeGif}
                  width={800}
                  height={600}
                />
              </div>
              <div className={styles.prototypeDescription}>
                <p>
                  Our research revealed that users often draw based on their mental model of space rather than 
                  physical reality. Prototype 2 introduced a sophisticated mapping function that translates 
                  gestures from the user's perspective to the correct position in virtual space.
                </p>
                <p>
                  This allows users to draw walls and structures as they imagine them, with the system 
                  handling the spatial translation—bridging the gap between mental conception and virtual creation.
                </p>
              </div>
            </div>
          </div>
          
          <div className={styles.prototypeItem}>
            <h3>Prototype 3: Perceptar - Full Functional Experience</h3>
            <div className={styles.prototypeContent}>
              <div className={styles.prototypeMedia}>
                <Image 
                  src="/projects/perceptar/perceptar-visual.png" 
                  alt="Perceptar environment visualization" 
                  className={styles.prototypeImage}
                  width={800}
                  height={600}
                />
              </div>
              <div className={styles.prototypeDescription}>
                <p>
                  The culmination of our research, Perceptar creates a complete spatial imagination environment 
                  where users can experience the full range of embodied interactions. Key features include:
                </p>
                <ul>
                  <li>Distance control for manipulating objects regardless of proximity</li>
                  <li>Object transformation controls, including the ability to scale and "explode" large structures</li>
                  <li>Free-form drawing to create "keystones"—platforms that users can traverse</li>
                  <li>Integrated spatial audio that responds to user creations and movements</li>
                </ul>
                <p>
                  This prototype demonstrates how spatial design can become an intuitive language when 
                  the interface adapts to human perception rather than forcing users to adapt to technology.
                </p>
              </div>
            </div>
          </div>
          
          <div className={styles.prototypeItem}>
            <h3>System Architecture</h3>
            <div className={styles.prototypeContent}>
              <div className={styles.prototypeMedia}>
                <Image 
                  src="/projects/perceptar/perceptar-diagram.png" 
                  alt="Perceptar system architecture diagram" 
                  className={styles.prototypeImage}
                  width={800}
                  height={600}
                />
              </div>
              <div className={styles.prototypeDescription}>
                <p>
                  The Perceptar system integrates multiple components to create a seamless spatial design experience:
                </p>
                <ul>
                  <li>Gesture recognition system with symmetry detection</li>
                  <li>Mental-to-physical space mapping algorithm</li>
                  <li>Spatial audio engine that responds to user creations</li>
                  <li>Conversational AI guide that adapts to user behavior</li>
                </ul>
                <p>
                  This architecture allows for a fluid experience where users can focus on creation rather than learning complex controls.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.features}>
          <h2>🔍 Core Features</h2>
          <ul className={styles.step}>
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
          <h3>Defining &apos;Natural Interaction&apos; in Virtual Spatial Design</h3>
          <p>
            What are the design and research avenues for creating more &apos;natural interactions&apos; in virtual spatial design?
          </p>
          <p>
            This involves exploring how users can engage with virtual environments in ways that feel intuitive and satisfying,
            emphasizing the natural integration of human gestures, cognition, and technology.
          </p>
          
          <h3>Applying &apos;Natural Interaction&apos; to a Spatial Design Tool</h3>
          <p>
            How can we integrate natural interactions into a spatial design tool to enable users to build worlds with satisfaction?
          </p>
          <p>
            The tool should enhance the user&apos;s creative experience by providing seamless, intuitive interaction methods that 
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
            <ul className={styles.step}>
              <li>Gesture Recognition</li>
              <li>Building Game</li>
              <li>AR Place</li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h2>Current Progress</h2>
            <ul className={styles.step}>
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
        
        <div className={styles.thesisPaper}>
          <h2>Research Thesis</h2>
          <p>
            For a deeper understanding of the theoretical framework and research methodology behind Perceptar, 
            you can download my complete thesis paper which explores the intersection of embodied cognition, 
            spatial design, and virtual reality interfaces.
          </p>
          <a 
            href="/projects/perceptar/thesis-paper.pdf" 
            download 
            className={styles.downloadButton}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className={styles.downloadIcon}
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download Thesis Paper (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}
