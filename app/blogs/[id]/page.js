"use client"
import { remark } from 'remark';
import remarkHtml from 'remark-html'
import remarkParse from 'remark-parse'
import { unified } from 'unified'
// import fs from 'fs'
import './blog.css'
import NavigationBarLand from '@/components/navcomp';
import BackComponent from './backComponent';
import { useEffect, useState } from 'react';


// console.log(file)

export default function Blog({ params }) {
    console.log(params)
    const [blog, setBlog] = useState()
    useEffect(() => {
        async function main() {
            const jblog = await (await fetch('https://newaayushbackend.onrender.com/blogs/' + params.id, { method: 'GET' })).json();
            jblog.blog = await unified().use(remarkParse).use(remarkHtml).process(jblog.blog)
            setBlog(jblog)
        }
        main()
    }, [])

    return (
        <>
            {blog ? <>
                <NavigationBarLand />
                <div className='blog-page'>
                    <div className='header-info'>
                        <BackComponent />
                        <div className='info'>
                            <p className='blog-type'>{blog.type}</p>
                            <p className='blog-type'>{blog.date}</p>
                            <h1 className='blog-title'>{blog.title}</h1>
                        </div>
                    </div>

                    <div className='markdown-body' dangerouslySetInnerHTML={{ __html: blog.blog }}></div>
                </div>
            </> : <></>}
        </>
    )
}
