import React from 'react';
import Image from 'next/image';
import styles from './altrudata.module.css';

export default function AltruDataPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <Image 
          src="/projects/altrudata/hero_img.png" 
          alt="AltruData Project" 
          width={1920}
          height={1080}
          className={styles.heroImage}
          priority
        />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>AltruData</h1>
          <p className={styles.subtitle}>
            Trustworthy AI and Confidential Computing for Marketing Analytics
          </p>
        </div>
      </div>
      
      <div className={styles.content}>
        <section className={styles.section}>
          <h2>Project Overview</h2>
          <p>
            AltruData is an innovative platform that leverages trustworthy AI and confidential computing 
            to generate reliable data for marketing analysis. As the lead of the UIUX team, I collaborated 
            closely with engineering and product management to define project functionality and create 
            an intuitive user experience.
          </p>
          <div className={styles.imageContainer}>
            <Image
              src="/projects/altrudata/project_description.png"
              alt="AltruData Platform Overview"
              width={800}
              height={475}
              className={styles.contentImage}
            />
            <p className={styles.imageCaption}>AltruData platform dashboard overview</p>
          </div>
          <p>
            The platform addresses a critical challenge in the marketing industry: accessing reliable 
            consumer data while maintaining privacy and ethical standards. Through advanced confidential 
            computing techniques, AltruData enables marketers to gain valuable insights without 
            compromising individual privacy.
          </p>
        </section>
        
        <section className={styles.section}>
          <h2>My Role</h2>
          <p>
            As the UIUX team lead, I was responsible for:
          </p>
          <ul className={styles.step}>
            <li>Leading a talented team of designers (Boxi Liu, Luoyi Guan, Xier Lu, Mika Hu)</li>
            <li>Collaborating with engineering to ensure technical feasibility of design solutions</li>
            <li>Working closely with product management to align user experience with business goals</li>
            <li>Creating user flows, wireframes, and high-fidelity prototypes</li>
            <li>Conducting user testing and iterating based on feedback</li>
            <li>Establishing design systems and guidelines for consistent user experience</li>
          </ul>
          <div className={styles.imageContainer}>
            <Image
              src="/projects/altrudata/design_process.png"
              alt="Team Collaboration Session"
              width={1200}
              height={675}
              className={styles.contentImage}
            />
            <p className={styles.imageCaption}>Collaborative design session with the UIUX team</p>
          </div>
        </section>
        
        <section className={styles.section}>
          <h2>Key Features</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Confidential Computing</h3>
              <p>
                Secure data processing within protected enclaves, ensuring sensitive information 
                remains encrypted even during analysis.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Trustworthy AI Models</h3>
              <p>
                Transparent algorithms with built-in fairness measures to prevent bias and ensure 
                ethical data analysis.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Interactive Dashboards</h3>
              <p>
                Intuitive visualization tools that transform complex data into actionable marketing insights.
              </p>
            </div>
          </div>
        </section>
        
        <section className={styles.section}>
          <h2>Design Process</h2>
          <p>
            Our design approach centered on creating a platform that balanced powerful functionality 
            with ease of use. We followed a user-centered design process:
          </p>
          
          <div className={styles.processContainer}>
            <div className={styles.processImage}>
              <Image
                src="/projects/altrudata/design_process.png"
                alt="Design Process Visualization"
                width={600}
                height={400}
                className={styles.processMainImage}
              />
            </div>
            
            <div className={styles.processSteps}>
              <div className={styles.step}>
                <h3>Research</h3>
                <p>
                  We conducted extensive interviews with marketing professionals to understand their 
                  data needs, pain points, and workflow.
                </p>
              </div>
              
              <div className={styles.step}>
                <h3>Ideation</h3>
                <p>
                  Through collaborative workshops with engineering and product teams, we generated 
                  innovative solutions that balanced technical constraints with user needs.
                </p>
              </div>
              
              <div className={styles.step}>
                <h3>Prototyping</h3>
                <p>
                  We created interactive prototypes to test our concepts, focusing on the data 
                  visualization and analysis workflows.
                </p>
              </div>
              
              <div className={styles.step}>
                <h3>Testing & Iteration</h3>
                <p>
                  Regular user testing sessions helped us refine the interface and interaction patterns, 
                  ensuring the platform was intuitive for marketing professionals.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className={styles.section}>
          <h2>Technical Challenges</h2>
          <div className={styles.splitSection}>
            <div className={styles.splitContent}>
              <p>
                Designing for confidential computing presented unique challenges:
              </p>
              <ul>
                <li>
                  <strong>Communicating Security:</strong> Creating visual cues that instill trust and 
                  communicate the secure nature of data processing
                </li>
                <li>
                  <strong>Balancing Transparency:</strong> Providing enough information about AI processes 
                  without overwhelming users with technical details
                </li>
                <li>
                  <strong>Performance Feedback:</strong> Designing appropriate loading states and feedback 
                  mechanisms for secure computing operations that inherently take longer
                </li>
              </ul>
            </div>
            <div className={styles.splitImage}>
              <Image
                src="/projects/altrudata/taskpage_taskdetail.png"
                alt="Technical Challenges Visualization"
                width={500}
                height={350}
                className={styles.sideImage}
              />
            </div>
          </div>
        </section>
        
        <section className={styles.section}>
          <h2>Design Solutions</h2>
          <div className={styles.splitSection}>
            <div className={styles.splitImage}>
              <Image
                src="/projects/altrudata/homepage_cards_view.png"
                alt="Design Solutions"
                width={500}
                height={350}
                className={styles.sideImage}
              />
            </div>
            <div className={styles.splitContent}>
              <p>
                Our design solutions focused on:
              </p>
              <ul>
                <li>Creating intuitive task management interfaces for marketing teams</li>
                <li>Developing clear visualization of complex data relationships</li>
                <li>Designing seamless workflows that guide users through secure data operations</li>
                <li>Implementing a consistent design system that reinforces trust and usability</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className={styles.section}>
          <h2>Task Management Interface</h2>
          <p>
            A core component of the AltruData platform is the task management system that allows marketing teams to organize and track their data analysis projects.
          </p>
          <div className={styles.imageContainer}>
            <Image
              src="/projects/altrudata/create_new_task.png"
              alt="Task Creation Interface"
              width={1200}
              height={675}
              className={styles.contentImage}
            />
            <p className={styles.imageCaption}>Task creation interface with privacy-preserving controls</p>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="/projects/altrudata/taskpage_Task-Owner.png"
              alt="Task Owner View"
              width={1200}
              height={675}
              className={styles.contentImage}
            />
            <p className={styles.imageCaption}>Task owner dashboard with progress tracking and security indicators</p>
          </div>
        </section>
      </div>
    </div>
  );
} 