import { remark } from 'remark';
import remarkHtml from 'remark-html'
import remarkParse from 'remark-parse'
import { unified } from 'unified'
// import fs from 'fs'
import './blog.css'
import NavigationBarLand from '@/components/navcomp';
import BackComponent from './backComponent';
import { redirect } from 'next/navigation'
var metadata;
export default async function Blog({ params }) {

    const blog = await (await fetch('https://test-app.projects.aayushgarg.net/blogs/' + params.id, { method: 'GET' })).json();
    if (blog.status == 404) {
        return redirect('/blogs')
    }
    blog.blog = (await unified().use(remarkParse).use(remarkHtml).process(blog.blog)).value
    metadata = {
        title: blog.title,
        description: blog.type,
    }

    console.log(blog)
    return (
        <>
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

                <div className='markdown-body' dangerouslySetInnerHTML={{ __html: blog.blog }}>
                </div>
            </div>
        </>
    )
}

export {metadata};
