import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { layoutConfig } from '@/lib/layout-config';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  tags?: string[];
  className?: string;
}

export function ProjectCard({
  title,
  description,
  imageUrl,
  projectUrl,
  tags = [],
  className,
}: ProjectCardProps) {
  return (
    <Link href={projectUrl} className="block group">
      <div className={cn(
        "h-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] dark:border-gray-800 dark:bg-gray-900",
        className
      )}>
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src= {imageUrl || "/thumb-img.png"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-5">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{description}</p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export function ProjectGrid({ projects }: { projects: ProjectCardProps[] }) {
  return (
    <div className={`grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ${layoutConfig.containerMax}`}>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}
