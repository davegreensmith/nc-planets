import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import * as api from '../api';

function SinglePlanet() {
  const [planet, setPlanet] = useState({});
  const { planet_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api.fetchPlanetsById(planet_id).then((planetData) => {
      setPlanet(planetData.planet);
      setIsLoading(false);
    });
  }, []);
  const { planet_name, au_from_sun, type, img, mean_diameter_miles, mean_temp_c, moon_count, fun_fact } = planet;
  return (
    <section>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div>
          <h2>{planet_name}</h2>
          <img src={img} alt="planet" />
          <h3>Information:</h3>
          <p>Type: {type}</p>
          <p>Moon Count: {moon_count}</p>
          <p>Distance from the sun: {au_from_sun}au</p>
          <p>Average Temperature in C: {mean_temp_c}</p>
          <p>Average diameter in Miles: {mean_diameter_miles}</p>
          <p>Fun Fact: {fun_fact}</p>
        </div>
      )}
    </section>
  );
}

export default SinglePlanet;
