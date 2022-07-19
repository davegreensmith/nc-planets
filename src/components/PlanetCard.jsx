export default function PlanetCard ( {planet}) {
    const {planet_id, planet_name, type, au_from_sun, moon_count} = planet
    return (
        <article className="planet-card">
            <h3>{planet_name}</h3>
            <h4>Fact File:</h4>
            <p>Type: {type}</p>
            <p>Distance from sun: {au_from_sun} au</p>
            <p>No. of Moons: {moon_count}</p>
        </article>
    )
}
