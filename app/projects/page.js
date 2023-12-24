import NavigationBarLand from '@/components/navcomp'
import React from 'react'
import './projects.css'
import "../blogs/blogs.css"
import Image from 'next/image'
import projects from "./projects.json"

export const metadata = {
    title: 'Projects',
    description: 'Does it really need a description...',
}

export default function Projects() {
    return (
        <div>
            <NavigationBarLand />
            <main className="projects-container">
                <div className='blogs-inner-container'>
                    <h1 className='blogs-title'>Projects.</h1>
                    <h2 className='blogs-description'>
                        Does it really need a description...
                    </h2>
                </div>
                <div className='projects-actual'>
                    {
                        projects.projects.map((project, i) => {
                            return (
                                <div class="project-blob" key={"projects" + i}>
                                    <Image className='project-image' src={project["project-image"]} width={0} height={0} alt='project-image' sizes='1000px' />
                                    <div class="project-header">
                                        <h2 class="project-heading">{project["project-name"]} <span className='project-year'>{project["project-year"]}</span></h2>
                                        <p class="project-desc">{project["project-description"]}</p>
                                        <a href={project["project-code"]} style={{ display: 'flex', paddingTop: "10px" }} target="_blank" class="project-redirect">Project Code &nbsp;&nbsp;
                                        </a>
                                        <a href={project["project-demo"]} style={{ display: 'flex', paddingTop: "10px" }} target="_blank" class="project-redirect">Live &nbsp;&nbsp;
                                        </a>
                                    </div>
                                </div>
                            )
                        })

                    }
                </div>
            </main>
        </div>
    )
}
