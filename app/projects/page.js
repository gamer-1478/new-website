import NavigationBarLand from '@/components/navcomp'
import React from 'react'
import './projects.css'
import "../blogs/blogs.css"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

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
                    <div class="project-blob">
                        <Image className='project-image' src="https://socialify.git.ci/techsyndicate/codimg/image?description=1&language=1&owner=1&stargazers=1&theme=Dark" width={0} height={0} alt='project-image' sizes='1000px' />
                        <div class="project-header">
                            <h2 class="project-heading">Toycathon <span className='project-year'>2023</span></h2>
                            <p class="project-desc">Convert your resume into a personal portfolio website in seconds.</p>
                            <a href="/resources/dev/app" style={{ display: 'flex', paddingTop: "10px" }} target="_blank" class="project-redirect">Project Code &nbsp;&nbsp;
                            </a>
                            <a href="/resources/dev/app" style={{ display: 'flex', paddingTop: "10px" }} target="_blank" class="project-redirect">Live &nbsp;&nbsp;
                            </a>
                        </div>
                    </div>
                    <div class="project-blob">
                        <Image className='project-image' src="https://socialify.git.ci/techsyndicate/codimg/image?description=1&language=1&owner=1&stargazers=1&theme=Dark" width={0} height={0} alt='project-image' sizes='1000px' />
                        <div class="project-header">
                            <h2 class="project-heading">Toycathon <span className='project-year'>2023</span></h2>
                            <p class="project-desc">Convert your resume into a personal portfolio website in seconds.</p>
                            <a href="/resources/dev/app" style={{ display: 'flex', paddingTop: "10px" }} target="_blank" class="project-redirect">Project Code &nbsp;&nbsp;
                            </a>
                            <a href="/resources/dev/app" style={{ display: 'flex', paddingTop: "10px" }} target="_blank" class="project-redirect">Live &nbsp;&nbsp;
                            </a>
                        </div>
                    </div>
                    <div class="project-blob">
                        <Image className='project-image' src="https://socialify.git.ci/techsyndicate/codimg/image?description=1&language=1&owner=1&stargazers=1&theme=Dark" width={0} height={0} alt='project-image' sizes='1000px' />
                        <div class="project-header">
                            <h2 class="project-heading">Toycathon <span className='project-year'>2023</span></h2>
                            <p class="project-desc">Convert your resume into a personal portfolio website in seconds.</p>
                            <a href="/resources/dev/app" style={{ display: 'flex', paddingTop: "10px" }} target="_blank" class="project-redirect">Project Code &nbsp;&nbsp;
                            </a>
                            <a href="/resources/dev/app" style={{ display: 'flex', paddingTop: "10px" }} target="_blank" class="project-redirect">Live &nbsp;&nbsp;
                            </a>
                        </div>
                    </div>
                    <div class="project-blob">
                        <Image className='project-image' src="https://socialify.git.ci/techsyndicate/codimg/image?description=1&language=1&owner=1&stargazers=1&theme=Dark" width={0} height={0} alt='project-image' sizes='1000px' />
                        <div class="project-header">
                            <h2 class="project-heading">Toycathon <span className='project-year'>2023</span></h2>
                            <p class="project-desc">Convert your resume into a personal portfolio website in seconds.</p>
                            <a href="/resources/dev/app" style={{ display: 'flex', paddingTop: "10px" }} target="_blank" class="project-redirect">Project Code &nbsp;&nbsp;
                            </a>
                            <a href="/resources/dev/app" style={{ display: 'flex', paddingTop: "10px" }} target="_blank" class="project-redirect">Live &nbsp;&nbsp;
                            </a>
                        </div>
                    </div>
                    <div class="project-blob">
                        <Image className='project-image' src="https://socialify.git.ci/techsyndicate/codimg/image?description=1&language=1&owner=1&stargazers=1&theme=Dark" width={0} height={0} alt='project-image' sizes='1000px' />
                        <div class="project-header">
                            <h2 class="project-heading">Toycathon <span className='project-year'>2023</span></h2>
                            <p class="project-desc">Convert your resume into a personal portfolio website in seconds.</p>
                            <a href="/resources/dev/app" style={{ display: 'flex', paddingTop: "10px" }} target="_blank" class="project-redirect">Project Code &nbsp;&nbsp;
                            </a>
                            <a href="/resources/dev/app" style={{ display: 'flex', paddingTop: "10px" }} target="_blank" class="project-redirect">Live &nbsp;&nbsp;
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
