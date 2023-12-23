export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function SpotifyComponent() {
    var currentMusic = false;

    var Results = await(await fetch('https://newaayushbackend.onrender.com/spotify', { method: 'GET' })).json();
    Results = JSON.parse(Results.body)
    if (Results != undefined && Results.hasOwnProperty('data') && Results.data.hasOwnProperty('item') && Results.data.item.hasOwnProperty('name')) {
        Results = Results.data.item;
        currentMusic = true;
    }

    return (
        <h2 className='landing-description'>
            I love YouTube, cycling, and among other things listening to music. {currentMusic ?
                <> It looks like at this time I am listening to <a href={Results.external_urls.spotify} className='SpecialTextA'> {Results.name} by {Results.artists.map((el, ind) => { if (ind === 0) { return el.name } else { return ', ' + el.name } })}</a> on Spotify. </> : 'Looks Like I am not using Spotify at the moment.'}
            &nbsp;I feel like music makes life, liveable.
        </h2>
    )
}
