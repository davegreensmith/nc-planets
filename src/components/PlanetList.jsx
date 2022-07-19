import { useEffect, useState } from "react";
import PlanetCard from './PlanetCard'

export default function PlanetList () {
    const [planets, setPlanets] = useState([])

    useEffect(()=>{
        fetch('https://space-facts.herokuapp.com/api/planets').then((data)=>{
            return data.json()
        }).then(data=>{
            setPlanets(data.planets)
        })
    }, [])

    return (
        <ul className="card-holder">
            {planets.map(planet=>{
                return <PlanetCard planet={planet} key={planet.planet_id}/>
            })}
        </ul>
    )
}