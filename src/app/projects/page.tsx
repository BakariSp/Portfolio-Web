'use client'
import * as React from 'react';
import { ProjectGrid } from '@/components/projects/project-card';
import projects from '@/data/projects.json';

const ProjectsPage = () => {
    return (
        <div className="container mx-auto py-12">
            <h1 className="text-3xl font-bold mb-8">My Projects</h1>
            <ProjectGrid projects={projects} />
        </div>
    )
}

export default ProjectsPage;