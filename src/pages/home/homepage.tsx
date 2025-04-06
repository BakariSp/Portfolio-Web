"use client"

import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { useState } from 'react';

const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-8 p-20">
      <h1 className="text-4xl font-bold">Linghang Cai</h1>
      <p className="text-muted-foreground text-lg">Exploring the 3D space and interaction</p>
      <Card className="w-full max-w-2xl border-none shadow-none">
        <CardContent className="p-6">
          <div 
            className="flex justify-center relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative w-[500px] h-[300px]">
              <Image 
                src="/portrait_diagram.png" 
                alt="3D Interaction"
                fill
                priority
                className={`rounded-md transition-opacity duration-300 ease-in-out ${isHovered ? 'opacity-0' : 'opacity-100'}`}
              />
              <Image 
                src="/portrait_selected.png" 
                alt="3D Interaction Selected"
                fill
                priority
                className={`rounded-md transition-opacity duration-300 ease-in-out absolute top-0 left-0 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePage;
