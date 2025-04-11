'use client'
import * as React from 'react';
import { ProjectGrid } from '@/components/projects/project-card';
import projectsData from '@/data/projects.json';

const ProjectsPage = () => {
    return (
        <div className="container mx-auto py-12 pb-16">
            <h1 className="text-3xl font-bold mb-8">Featured Projects</h1>
            <ProjectGrid projects={projectsData.current_projects} />
            
            <h1 className="text-3xl font-bold mt-16 mb-8">Practice & Prototypes</h1>
            <ProjectGrid projects={projectsData.self_projects} />
        </div>
    )
}

export default ProjectsPage;