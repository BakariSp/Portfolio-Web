import React from 'react';
import Image from 'next/image';
import styles from './about-me.module.css';
import { layoutConfig } from '@/lib/layout-config';

export default function AboutMe() {
  return (
    <div className={`${layoutConfig.sectionPadding} ${layoutConfig.containerMax}`}>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left column - Profile */}
        <div className="md:w-1/3 lg:w-1/4">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">Lǐnghàng Cài</h1>
            <p className="text-gray-600">lcai@inside.artcenter.edu</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3 border-b pb-1">Software</h2>
            <ul className="space-y-1">
              <li>Figma, Adobe Creative Suite</li>
              <li>IDE, Microsoft Office</li>
              <li>Arduino, Rhinoceros 3D, Grasshopper</li>
              <li>Unreal Engine</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3 border-b pb-1">Programming</h2>
            <ul className="space-y-1">
              <li>Python, C#, Javascript</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3 border-b pb-1">Framework</h2>
            <ul className="space-y-1">
              <li>Three.js, OpenCV, WebGL</li>
              <li>OpenGL, Yolo</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3 border-b pb-1">Methods</h2>
            <ul className="space-y-1">
              <li>User Research and Experience Design</li>
              <li>Prototyping, Physical Computing</li>
              <li>Interaction Design</li>
              <li>Human-centric Design</li>
              <li>AI-assisted Tools</li>
              <li>Computational and Parametric Design</li>
              <li>Narrative, Storytelling</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3 border-b pb-1">Relevant Courses</h2>
            <ul className="space-y-1">
              <li>Critical Worldview</li>
              <li>Philosophy of Cognitive Science</li>
              <li>User Experience Design</li>
              <li>Computer Science</li>
              <li>Artificial Intelligence</li>
              <li>Calculus, Linear Algebra & Statistics</li>
            </ul>
          </div>
        </div>
        
        {/* Right column - Experience */}
        <div className="md:w-2/3 lg:w-3/4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">Education</h2>
            
            <div className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">Art Center College of Design</h3>
                  <p className="text-gray-700">Computer Software and Media Application</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">MFA | STEM</p>
                  <p className="text-gray-600">2022 Sep - 2025 Jun</p>
                  <p className="text-gray-600">Pasadena</p>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">Tsinghua University</h3>
                  <p className="text-gray-700">Environmental Design</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">Bachelor of Art</p>
                  <p className="text-gray-600">2017 Sep - 2022 Jun</p>
                  <p className="text-gray-600">Beijing</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">Research</h2>
            
            <div className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">HCI Researcher</h3>
                  <p className="text-gray-700">HKUST, CityU</p>
                  <p className="text-gray-600 italic">Design and prototype the AI-assisted Spatial Design Tools in VR environment.</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">2024 Jun - now</p>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">Summer Researcher</h3>
                  <p className="text-gray-700">Art Center College of Design, IKEA</p>
                  <p className="text-gray-600 italic">Developed and designed an interactive website, virtual spatial experience design, flow and prototyping.</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">2023 Jun - 2023 Sep</p>
                  <p className="text-gray-600">Pasadena</p>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">Design Researcher</h3>
                  <p className="text-gray-700">TsinghuaUniversity, DesignFuturesGroup</p>
                  <p className="text-gray-600 italic">3D space visual design in metaverse, cooperating with generative AI and developing immersive, interactive experiences in.</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">2023 Feb - 2023 Jun</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">Work</h2>
            
            <div className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">Lead UI/UX Designer</h3>
                  <p className="text-gray-700">Artfuture, UCLA, TikTok</p>
                  <p className="text-gray-600 italic">Leading the design of a B2B platform using confidential technology and generative AI to help marketers identify, clean, analyze, report, and collaborate on data.</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">2024 Aug-Dec</p>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">Frontend Developer</h3>
                  <p className="text-gray-700">SeeM, Carnegie Mellon University</p>
                  <p className="text-gray-600 italic">Developed the frontend for a 3D online exhibition, allowing users to view and interact with artifacts in a virtual museum-like environment. Implemented responsive design to enhance user engagement and ensure a seamless experience.</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">2024 Jun-Present</p>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">Interaction Design Intern</h3>
                  <p className="text-gray-700">Tencent Technology</p>
                  <p className="text-gray-600 italic">Website developing, interaction prototyping, cooperating with Tencent Pattern recognition Department.</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">2023 Mar - 2022 Jun</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">Awards and Certificates</h2>
            
            <div className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">Graduate Scholarship</h3>
                  <p className="text-gray-700">Art Center College of Design</p>
                  <p className="text-gray-600">Media Design Practice</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">Sep 2022</p>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">Science and Technology Award Scholarship</h3>
                  <p className="text-gray-700">Tsinghua University</p>
                  <p className="text-gray-600">Academy of Arts & Design</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">Aug 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
