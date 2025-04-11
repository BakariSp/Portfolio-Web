import React from 'react';
import Image from 'next/image';
import styles from './ev-air-quality.module.css';

export default function EVAirQualityPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <Image 
          src="/projects/ev-air-quality/0-hero.png" 
          alt="EV and Air Quality Project" 
          fill
          className={styles.heroImage}
          priority
        />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>EV and Air Quality</h1>
          <p className={styles.subtitle}>
            Visualizing the health benefits of fleet electrification in China
          </p>
          <a 
            href="https://www.nature.com/articles/s41893-019-0398-8" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.externalLink}
          >
            View Research Paper in Nature Sustainability
          </a>
        </div>
      </div>
      
      <div className={styles.content}>
        <section className={styles.section}>
          <h2>Design Tools</h2>
          <div className={styles.techStack}>
            <span className={styles.techTag}>Figma</span>
            <span className={styles.techTag}>Rhino</span>
            <span className={styles.techTag}>Grasshopper</span>
            <span className={styles.techTag}>Algorithmic Data Visualization</span>
            <span className={styles.techTag}>GIS Mapping</span>
            <span className={styles.techTag}>Information Design</span>
            <span className={styles.techTag}>Scientific Communication</span>
          </div>
        </section>
        
        <section className={styles.section}>
          <h2>Project Overview</h2>
          <p>
            This project is a collaboration with researchers from MIT City Science Lab and Tsinghua University's 
            School of Environment to create an interactive data visualization platform showcasing the findings 
            from their groundbreaking research published in Nature Sustainability.
          </p>
          <p>
            As the UIUX lead, I independently designed the web interface and led the visual direction, 
            using Figma for interface design and Rhino with Grasshopper as algorithmic data visualization 
            tools to transform complex scientific data into accessible, engaging visualizations that clearly 
            communicate the significant air quality and health benefits of electric vehicle adoption in China.
          </p>
          <div className={styles.imageContainer}>
            <Image
              src="/projects/ev-air-quality/1-detail-0.png"
              alt="China Air Quality Map Visualization"
              width={1200}
              height={675}
              className={styles.contentImage}
            />
            <p className={styles.imageCaption}>Interactive map showing PM2.5 concentration changes across China</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Project Video</h2>
          <p>
            Watch this video demonstration of the interactive data visualization platform:
          </p>
          <div className={styles.videoWrapper}>
            <iframe 
              src="https://www.youtube.com/embed/LvbdMJRqZd0?si=JKPf3SS3QpI_pmCv" 
              title="EV and Air Quality Visualization" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        </section>
        
        <section className={styles.section}>
          <h2>Research Background</h2>
          <p>
            The research, published in Nature Sustainability, demonstrates how electrifying China's vehicle 
            fleet can deliver significant air quality improvements and health benefits. Key findings include:
          </p>
          <ul>
            <li>
              Electrifying 27% of private vehicles and a larger proportion of commercial fleets can reduce 
              annual concentrations of fine particulate matter (PM2.5), nitrogen dioxide (NO2), and summer 
              ozone by 2030
            </li>
            <li>
              This scenario could prevent approximately 17,456 premature deaths annually nationwide
            </li>
            <li>
              The Beijing-Tianjin-Hebei, Yangtze River Delta, and Pearl River Delta regions would see the 
              most significant health benefits, accounting for about 37% of the total
            </li>
          </ul>
          <div className={styles.imageContainer}>
            <Image
              src="/projects/ev-air-quality/1-detail-1.png"
              alt="Key Research Findings"
              width={1200}
              height={675}
              className={styles.contentImage}
            />
            <p className={styles.imageCaption}>Visualization of key research findings and health impacts</p>
          </div>
        </section>
        
        <section className={styles.section}>
          <h2>My Role and Contributions</h2>
          <p>
            As the UIUX lead for this project, my responsibilities included:
          </p>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Information Architecture</h3>
              <p>
                Developed a structured approach to presenting complex scientific data in a logical, 
                accessible format for both expert and non-expert audiences.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Algorithmic Data Visualization</h3>
              <p>
                Utilized Rhino and Grasshopper to create parametric data visualizations that effectively 
                communicate the spatial and temporal patterns of air quality improvements and health benefits.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Interface Design</h3>
              <p>
                Created the complete web interface in Figma, designing intuitive navigation and interaction 
                patterns that guide users through the research findings in a compelling narrative format.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Collaboration with Scientists</h3>
              <p>
                Worked closely with environmental researchers to ensure scientific accuracy while 
                making complex data accessible to policymakers and the general public.
              </p>
            </div>
          </div>
        </section>
        
        <section className={styles.section}>
          <h2>Design Process</h2>
          <p>
            The design process for this project involved several key phases:
          </p>
          <div className={styles.step}>
            <h3>Research and Data Analysis</h3>
            <p>
              Collaborated with scientists to understand the research methodology, data structure, and key 
              findings. Identified the most important metrics and relationships to highlight in the visualization.
            </p>
            <div className={styles.imageContainer}>
              <Image
                src="/projects/ev-air-quality/design-process.png"
                alt="Research and planning documentation"
                width={1200}
                height={675}
                className={styles.contentImage}
              />
              <p className={styles.imageCaption}>Initial research documentation and data analysis planning</p>
            </div>
          </div>
          <div className={styles.step}>
            <h3>Conceptualization and Wireframing</h3>
            <p>
              Developed multiple visualization concepts in Figma, testing them with researchers 
              to ensure they accurately represented the data while being accessible to non-expert audiences.
            </p>
            <div className={styles.imageContainer}>
              <Image
                src="/projects/ev-air-quality/design-process-2.png"
                alt="Early wireframes and concept sketches"
                width={1200}
                height={675}
                className={styles.contentImage}
              />
              <p className={styles.imageCaption}>Early wireframes exploring different visualization approaches</p>
            </div>
          </div>
          <div className={styles.step}>
            <h3>Algorithmic Visualization Development</h3>
            <p>
              Used Rhino and Grasshopper and TouchDesigner to create parametric data models that could generate visualizations 
              directly from the research data, ensuring accuracy while creating visually compelling representations.
            </p>
            <div className={styles.imageContainer}>
              <Image
                src="/projects/ev-air-quality/visual-explore.gif"
                alt="Grasshopper algorithmic visualization development"
                width={1200}
                height={675}
                className={styles.contentImage}
              />
              <p className={styles.imageCaption}>Grasshopper parametric modeling for data visualization</p>
            </div>
          </div>
          <div className={styles.step}>
            <h3>Interface Design and Refinement</h3>
            <p>
              Finalized the web interface design in Figma, creating a comprehensive design system and 
              interactive prototype to guide implementation.
            </p>
          </div>
        </section>
        
        <section className={styles.section}>
          <h2>Site Details</h2>
          
          <div className={styles.subsection}>
            <h3>Navigation System</h3>
            <p>
              Designed a progressive navigation system that guides users through the research narrative, 
              from introduction to detailed findings. The vertical timeline navigation allows users to 
              track their progress through the content while maintaining context.
            </p>
            <div className={styles.imageContainer}>
              <Image
                src="/projects/ev-air-quality/0-main-page.png"
                alt="Navigation System Design"
                width={1200}
                height={675}
                className={styles.contentImage}
              />
              <p className={styles.imageCaption}>Vertical timeline navigation with progress indicators</p>
            </div>
          </div>
          
          <div className={styles.subsection}>
            <h3>Regional Comparison Interface</h3>
            <p>
              Created an interactive interface for comparing air quality changes across the three key regions 
              of China (Beijing-Tianjin-Hebei, Yangtze River Delta, and Pearl River Delta). The interface 
              allows users to toggle between different pollutants (PM2.5, NO2, O3) and see their spatial distribution.
            </p>
            <div className={styles.imageContainer}>
              <Image
                src="/projects/ev-air-quality/4-sites.png"
                alt="Regional Comparison Interface"
                width={1200}
                height={675}
                className={styles.contentImage}
              />
              <p className={styles.imageCaption}>Interactive regional comparison showing pollutant distribution</p>
            </div>
          </div>
          
          <div className={styles.subsection}>
            <h3>Data Visualization Color System</h3>
            <p>
              Developed a carefully calibrated color system to represent pollution concentration changes, 
              with blue tones indicating improvements (reductions) and red tones showing increases. The 
              color scale was designed to be both scientifically accurate and intuitively understandable.
            </p>
            <div className={styles.imageContainer}>
              <Image
                src="/projects/ev-air-quality/4-sites-detail-1.png"
                alt="Data Visualization Color System"
                width={1200}
                height={675}
                className={styles.contentImage}
              />
              <p className={styles.imageCaption}>Color system for representing pollution concentration changes</p>
            </div>
          </div>
          
          <div className={styles.subsection}>
            <h3>Interactive Scenario Comparison</h3>
            <p>
              Designed an interactive tool that allows users to directly compare the "With EVs" and 
              "Without EVs" scenarios, highlighting the differences in air quality and health outcomes. 
              The interface includes animated transitions to help users understand the relationship 
              between the two scenarios.
            </p>
            <div className={styles.imageContainer}>
              <Image
                src="/projects/ev-air-quality/interaction.gif"
                alt="Interactive Scenario Comparison"
                width={1200}
                height={675}
                className={styles.contentImage}
              />
              <p className={styles.imageCaption}>Interactive tool for comparing EV adoption scenarios</p>
            </div>
          </div>
        </section>
        
        <section className={styles.section}>
          <h2>Key Visualization Features</h2>
          <div className={styles.splitSection}>
            <div className={styles.splitContent}>
              <h3>Interactive Regional Maps</h3>
              <p>
                Designed interactive maps that visualize air quality changes across different regions of China, 
                allowing users to compare scenarios with and without EV adoption.
              </p>
              <p>
                The maps use a carefully selected color palette to represent pollution concentration levels, 
                with interactive elements that reveal detailed data for specific regions.
              </p>
            </div>
            <div className={styles.splitImage}>
              <Image
                src="/projects/ev-air-quality/0-main-page.png"
                alt="Interactive Regional Map"
                width={500}
                height={350}
                className={styles.sideImage}
              />
            </div>
          </div>
          
          <div className={styles.splitSection}>
            <div className={styles.splitImage}>
              <Image
                src="/projects/ev-air-quality/2-menu.png"
                alt="Health Benefits Visualization"
                width={500}
                height={350}
                className={styles.sideImage}
              />
            </div>
            <div className={styles.splitContent}>
              <h3>Health Impact Visualizations</h3>
              <p>
                Created visualizations that translate abstract health statistics into more tangible representations, 
                showing the number of premature deaths avoided through EV adoption across different regions.
              </p>
              <p>
                These visualizations include comparative elements that highlight the disproportionate benefits 
                in densely populated urban areas.
              </p>
            </div>
          </div>
          
          <div className={styles.splitSection}>
            <div className={styles.splitContent}>
              <h3>Temporal Comparison Tools</h3>
              <p>
                Designed interactive tools that allow users to explore how air quality changes over time 
                in different scenarios, with options to view monthly, seasonal, and annual patterns.
              </p>
              <p>
                These tools help illustrate the delayed time between emissions reductions and air quality 
                improvements due to atmospheric chemistry processes.
              </p>
            </div>
            <div className={styles.splitImage}>
              <Image
                src="/projects/ev-air-quality/4-sites.png"
                alt="Temporal Comparison Tool"
                width={500}
                height={350}
                className={styles.sideImage}
              />
            </div>
          </div>
        </section>
        
        <section className={styles.section}>
          <h2>Design Innovations</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Algorithmic Data Representation</h3>
              <p>
                Used Grasshopper's parametric modeling capabilities to create data-driven visualizations 
                that automatically update when the underlying data changes, ensuring accuracy and consistency.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Multi-dimensional Data Visualization</h3>
              <p>
                Developed novel ways to represent multiple pollutants (PM2.5, NO2, O3) and their 
                varying impacts across different regions and timeframes in a single, coherent visual system.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Progressive Disclosure Interface</h3>
              <p>
                Designed an interface that layers information, allowing users to progressively explore 
                deeper levels of detail according to their interest and expertise.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Comparative Visualization Framework</h3>
              <p>
                Created a visual framework that enables direct comparison between different scenarios, 
                making it easy to understand the impact of EV adoption on air quality and health outcomes.
              </p>
            </div>
          </div>
        </section>
        
        <section className={styles.section}>
          <h2>Impact and Outcomes</h2>
          <p>
            This project has had significant impact in several areas:
          </p>
          <ul>
            <li>
              <strong>Policy Influence:</strong> The visualizations have been used in presentations to 
              policymakers, helping inform decisions about EV incentives and infrastructure development in China.
            </li>
            <li>
              <strong>Public Awareness:</strong> The accessible format has helped raise public awareness 
              about the health benefits of EV adoption beyond just carbon emission reductions.
            </li>
            <li>
              <strong>Scientific Communication:</strong> The project serves as a model for effective 
              communication of complex environmental research to diverse audiences.
            </li>
            <li>
              <strong>Cross-disciplinary Collaboration:</strong> The successful collaboration between 
              designers and scientists demonstrates the value of interdisciplinary approaches 
              to addressing environmental challenges.
            </li>
          </ul>
          <div className={styles.imageContainer}>
            <Image
              src="/projects/ev-air-quality/3-main-innovation-1.png"
              alt="Project Innovation Visualization"
              width={1200}
              height={675}
              className={styles.contentImage}
            />
            <p className={styles.imageCaption}>Innovative visualization approach showing the relationship between EV adoption and health outcomes</p>
          </div>
        </section>
        
        <section className={styles.section}>
          <h2>Conclusion</h2>
          <p>
            This project demonstrates how effective data visualization and user experience design can 
            bridge the gap between complex scientific research and public understanding. By making the 
            health benefits of EV adoption more tangible and accessible, the platform helps support 
            informed decision-making by policymakers and the public.
          </p>
          <p>
            The collaboration between MIT City Science Lab, Tsinghua University, and our design team 
            showcases the power of interdisciplinary approaches to addressing environmental challenges 
            and communicating scientific findings in ways that can drive meaningful action.
          </p>
        </section>
        
        
      </div>
    </div>
  );
} 