import Image from 'next/image'
import "./page.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faSquareGithub, faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMailForward } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import NavigationBarLand from '@/components/navcomp';
import SpotifyComponent from './spotifyComponent';
export const dynamic = 'force-dynamic';
export const revalidate = 0;
import Link from 'next/link';

export const metadata = {
  title: 'Aayush Garg',
  description: 'Just open it...',
}

export default function Home() {
  return (
    <>
      <NavigationBarLand />
      <main className="landing-container">
        <Image className='landing-left' alt='my-image' src="/main.jpg" width={0} height={0} sizes={400} />
        <div className='landing-right'>
          <h1 className='landing-title'>Messing around trying to be human, since 2017. Developer.</h1>
          <h2 className='landing-description'>I am <span style={{color:'white'}}>Aayush Garg</span> a senior at Amity International School, Gurgaon, where I currently serve as the President of Tech Syndicate (Tech Society), and ATL Lab (Hardware Club).
          </h2>
          <h2 className='landing-description'>I like to build useful products, yes, but more than that <i>FUNNNN</i> products.
            I am interested in the web, and furthering it. I primarily work with JavaScript, Python and Dart.</h2>
          <SpotifyComponent />
          <h2 className='landing-description' style={{ color: 'white' }}>Reach out! <Link href="mailto:contact@aayushgarg.net"><span className='hello'>Say Hello</span></Link></h2>
          <div className='landing-social-links mt-10' style={{ display: 'flex', width: 'min-content'}}>
            <Link target="_blank" href="https://twitter.com/gamer_1478"><FontAwesomeIcon icon={faSquareTwitter} className='h-7' /></Link>
            <Link target="_blank" href="https://github.com/gamer-1478"><FontAwesomeIcon icon={faSquareGithub} className='h-7 ml-3' /></Link>
            <Link target="_blank" href="https://discord.com/users/823237564130525184"><FontAwesomeIcon icon={faDiscord} className='h-7 ml-3' /></Link>
            <Link target="_blank" href="mailto:contact@aayushgarg.net"><FontAwesomeIcon icon={faEnvelope} className='h-7 ml-3' /></Link>
          </div>
        </div>
      </main>
    </>
  )
}
