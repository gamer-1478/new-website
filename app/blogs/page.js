import React from 'react'
import './blogs.css'
import NavigationBarLand from '@/components/navcomp'
import Link from 'next/link'
export const dynamic = 'force-dynamic';
export const revalidate = 0;
const blogs = await (await fetch('https://newaayushbackend.onrender.com/blogs', {
    method: 'GET', next: { cache: false }, cache: "no-cache"
})).json();

export const metadata = {
    title: 'Blogs',
    description: 'A diary of my thoughts.',
}

export default function Page() {
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
                            <Link key={"blogs" + ind} href={"/blogs/" + el.id}>
                                <div className='blog'>
                                    <div className='blog-left'>
                                        <p className='blog-type'>{el.type}</p> <br></br>
                                        <p className='blog-type'>{el.date}</p>
                                    </div>
                                    <div>
                                        <h1 className='blog-title'>{el.title}</h1>
                                        <h2 className='blog-description'>{el.description}</h2>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </main>
        </div>
    )
}
