import axios from 'axios';

// export const fetchPlanets = () ={
//     return fetch("https://space-facts.herokuapp.com/api/planets").then((res)=>{
//         res.json()
//     })
// }

export const fetchPlanetsById = (id) => {
  const spaceApi = axios.create({
    baseURL: 'https://space-facts.herokuapp.com/api',
  });
  return spaceApi.get(`/planets/${id}`).then(({ data }) => {
    return data;
  });
};
