// Import necessary dependencies and components
import React, { useEffect, useState } from 'react';
import Carditem from './Carditem';
import '../assets/styles/Cardrow.css';
import axios from 'axios';

// Define the Cardrow functional component that receives 'props' as its argument
const Cardrow = (props) => {
    // Define state to store search results and access the 'setProgress' function from props
    const [searchResults, setSearchResults] = useState();
    const { setProgress } = props;

    // Use the 'useEffect' hook to fetch data from an API when 'props.searchInput' changes
    useEffect(() => {
        const fetchData = async () => {
            try {
                setProgress(30)
                const response = await axios.get('https://spotify23.p.rapidapi.com/search/', {
                    params: {
                        q: props.searchInput,
                        type: 'multi',
                        offset: '0',
                        limit: '10',
                        numberOfTopResults: '5'
                    },
                    headers: {
                        'X-RapidAPI-Key': 'b857f2cb62mshce140dc12a58600p12bc9cjsnd5f2d3158cc9',
                        // 'X-RapidAPI-Key': '4517bbd6ebmshe9629e692269ed0p162efejsn836c5460d85f',
                        // 'X-RapidAPI-Key': '24f9957d56msh9432b6575a9faefp18148cjsn0ab591f4301b',
                        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
                    }
                });
                setProgress(60)
                setSearchResults(response.data);
                setProgress(100)
            } catch (error) {
                console.log(error);
                setProgress(100)
            }
        };

        fetchData();
    }, [props.searchInput, setProgress]);

    // If there are no search results, return null
    if (!searchResults) {
        return null;
    }

    // Define arrays to store different types of content
    let songs = []
    let playlist = []
    let tracks = []
    let podcasts = []

    // Extract and format data from search results for each content type
    searchResults.albums.items.forEach(album => {
        const songData = {
            song_name: album.data.name,
            artist_name: album.data.artists.items[0].profile.name,
            song_image: album.data.coverArt.sources[2].url,
        };
        songs.push(songData);
    });

    searchResults.playlists.items.forEach(list => {
        const listData = {
            list_name: list.data.name,
            list_image: list.data.images.items[0].sources[0].url,
        };
        playlist.push(listData);
    })

    searchResults.tracks.items.forEach(track => {
        const trackData = {
            track_name: track.data.albumOfTrack.name,
            track_image: track.data.albumOfTrack.coverArt.sources[2].url,
            track_artist_name: track.data.artists.items[0].profile.name,
        }
        tracks.push(trackData);
    })

    searchResults.podcasts.items.forEach(podcast => {
        const podcastData = {
            podcast_name: podcast.data.name,
            podcast_image: podcast.data.coverArt.sources[2].url,
            podcast_type: podcast.data.type,
        }
        podcasts.push(podcastData);
    })

    // Render the content based on the extracted data
    return (
        <>
            <div className='cards container'>
                <div className='mx-4 my-4 row justify-content-center'>
                    {songs.map((song, index) => (
                        <div className='col-md-3' key={index}>
                            <Carditem
                                song_name={song.song_name}
                                artist_name={song.artist_name}
                                song_image={song.song_image}
                            />
                        </div>
                    ))}
                    {tracks.map((track, index) => (
                        <div className='col-md-3' key={index}>
                            <Carditem
                                song_name={track.track_name}
                                artist_name={track.track_artist_name}
                                song_image={track.track_image}
                            />
                        </div>
                    ))}
                    {playlist.map((list, index) => (
                        <div className='col-md-3' key={index}>
                            <Carditem
                                song_name={list.list_name}
                                song_image={list.list_image}
                            />
                        </div>
                    ))}
                    {podcasts.map((podcast, index) => (
                        <div className='col-md-3' key={index}>
                            <Carditem
                                song_name={podcast.podcast_name}
                                artist_name={podcast.podcast_type}
                                song_image={podcast.podcast_image}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

// Export the Cardrow component as the default export
export default Cardrow;
