import { remark } from 'remark';
import remarkHtml from 'remark-html'
import remarkParse from 'remark-parse'
import { unified } from 'unified'
import fs from 'fs'
import './blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faBackward } from '@fortawesome/free-solid-svg-icons';
import NavigationBarLand from '@/components/navcomp';
import BackComponent from './backComponent';

const file = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(fs.readFileSync(process.cwd() + '/app//blogs/[id]/example.md', 'utf8'))

console.log(file)

export default function blog({ params }) {
    return (
        <>
            <NavigationBarLand />
            <div className='blog-page'>
                <div className='header-info'>
                    <BackComponent />
                    <div className='info'>
                        <p className='blog-type'>Game Review</p>
                        <p className='blog-type'>12th December 2023</p>
                        <h1 className='blog-title'>My First Blog</h1>
                    </div>
                </div>

                <div className='markdown-body' dangerouslySetInnerHTML={{ __html: file.value }}></div>
            </div>
        </>
    )
}
