import React from 'react'
import './blogs.css'
import NavigationBarLand from '@/components/navcomp'

export default function page() {
    return (
        <div>
            <NavigationBarLand />
            <main className="blogs-container">
                <div className='blogs-inner-container'>
                    <h1 className='blogs-title'>A Diary of my thoughts.</h1>
                    <h2 className='blogs-description'>
                        My blogs are a diary of my thoughts, and my learnings and other random stuff. I write about things that I find interesting, and I hope you do too.
                    </h2>
                </div>
                <div className='blogs-actual'>
                    <div className='blog'>
                        <div className='blog-left'>
                            <p className='blog-type'>Game Review</p> <br></br>
                            <p className='blog-type'>12th December 2023</p>
                        </div>
                        <div>
                            <h1 className='blog-title'>My first blog</h1>
                            <h2 className='blog-description'>This is my first blog, and I am writing it to test out the blog page. I will be writing more blogs soon. Stay tuned.</h2>
                        </div>
                    </div>

                    <div className='blog'>
                        <div className='blog-left'>
                            <p className='blog-type'>Utkarsh love letter</p> <br></br>
                            <p className='blog-type'>12th December 2023</p>
                        </div>
                        <div>
                            <h1 className='blog-title'>My second blog</h1>
                            <h2 className='blog-description'>This is my first blog, and I am writing it to test out the blog page. I will be writing more blogs soon. Stay tuned.</h2>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}
