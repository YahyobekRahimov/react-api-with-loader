import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Homepage.scss';
import Loader from '../Loader/Loader';

const url = 'https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2c9353eeadmshfcad58adb447731p1cb522jsn23a6a3beba72',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

export default function Homepage() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        (async () => {
            try {
            const response = await fetch(url, options);
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const result = await response.json();
            setData(result);
            } catch (error) {
                console.error(error.message);
            } finally {
                setIsLoading(false);
            }
        })()
    }, [])
  return (
    <div className="container title__container">
        <h1>Game HUB</h1>
        {isLoading && <Loader />}
        <ul className='game-list'>
            {
                data.map(element => {
                    return <Card 
                        key={element.id}
                        title={element.title}
                        imageURL={element.thumbnail}
                        link={element.game_url}
                        description={element.short_description}
                    />
                })
            }
        </ul>
    </div>
  )
}
