"use client"

import React from 'react';
import Link from 'next/link';
import { layoutConfig } from '@/lib/layout-config';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-border mt-auto">
      <div className={`${layoutConfig.containerMax} mx-auto px-4`}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1 */}
          <div>
            <h3 className="font-medium text-lg mb-4">Linghang Cai</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Creative engineer exploring 3D space and interaction design.
            </p>
          </div>
          
          {/* Column 2 */}
          <div>
            <h3 className="font-medium text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about-me" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 */}
          <div>
            <h3 className="font-medium text-lg mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://github.com/BakariSp" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/linghangdesign/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="mailto:lcai@inside.artcenter.edu" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Email
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4 */}
          <div>
            <h3 className="font-medium text-lg mb-4">Location</h3>
            <p className="text-sm text-muted-foreground">
              Pasadena, California<br />
              United States
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Linghang Cai. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <Link href="/credits" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Credits
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 