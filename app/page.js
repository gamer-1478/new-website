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
          <h2 className='landing-description'>I am Aayush Garg a senior at Amity International School, Gurgaon, where I currently serve as the President of Tech Syndicate (Tech Society), and ATL Lab (Hardware Club).
          </h2>
          <h2 className='landing-description'>I like to build useful products, yes, but more than that <i>FUNNNN</i> products.
            I am interested in the web, and furthering it. I primarily work with JavaScript, Python and Dart.</h2>
          <SpotifyComponent />
          <div className='landing-social-links mt-10' style={{ display: 'flex', width: 'min-content'}}>
            <FontAwesomeIcon icon={faSquareTwitter} className='h-7' />
            <FontAwesomeIcon icon={faSquareGithub} className='h-7 ml-3' />
            <FontAwesomeIcon icon={faDiscord} className='h-7 ml-3' />
            <FontAwesomeIcon icon={faEnvelope} className='h-7 ml-3' />
          </div>
        </div>
      </main>
    </>
  )
}
