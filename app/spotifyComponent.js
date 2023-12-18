"use client"
export const dynamic = 'force-dynamic';
export const revalidate = 0;
import { useEffect, useState } from 'react';

export default function SpotifyComponent() {
    const [currentMusic, setCurrentMusic] = useState(false);
    const [Results, setResults] = useState();

    useEffect(() => {
        async function main() {
            var Resultsi = await (await fetch('https://newaayushbackend.onrender.com/spotify', {method: 'GET'})).json();
            console.log(Resultsi);
            Resultsi = JSON.parse(Resultsi.body)
            setResults(Resultsi);
            console.log(Resultsi);
            if (Resultsi != undefined && Resultsi.hasOwnProperty('data') && Resultsi.data.hasOwnProperty('item') && Resultsi.data.item.hasOwnProperty('name')) {
                setResults(Resultsi.data.item);
                setCurrentMusic(true);
            }
        }
        main();
    }, [])
    
    return (
        <h2 className='landing-description'>
            I love YouTube, cycling, and among other things listening to music. {currentMusic ?
                <> It looks like at this time I am listening to <a href={Results.external_urls.spotify} className='SpecialTextA'> {Results.name} by {Results.artists.map((el, ind) => { if (ind === 0) { return el.name } else { return ', ' + el.name } })}</a> on Spotify. </> : 'Looks Like I am not using Spotify at the moment.'}
            &nbsp;I feel like music makes life, liveable.
        </h2>
    )
}
