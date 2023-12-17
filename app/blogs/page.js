"use client"
import React, { useEffect, useState } from 'react'
import './blogs.css'
import NavigationBarLand from '@/components/navcomp'

export default function Page() {
    const [blogs, setBlogs] = useState()
    useEffect(() => {
        async function main() {
            const blogs = await (await fetch('https://newaayushbackend.onrender.com/blogs', { method: 'GET' })).json();
            setBlogs(blogs)
        }
        main()
    }, [])
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
                    {blogs && blogs.blogs.map((el, ind) => {
                        return (
                            <div className='blog' key={"blogs" + ind} onClick={()=>window.location.href = "/blogs/" + el.id}>
                                <div className='blog-left'>
                                    <p className='blog-type'>{el.type}</p> <br></br>
                                    <p className='blog-type'>{el.date}</p>
                                </div>
                                <div>
                                    <h1 className='blog-title'>{el.title}</h1>
                                    <h2 className='blog-description'>{el.description}</h2>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </main>
        </div>
    )
}
