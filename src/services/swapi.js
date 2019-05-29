import axios from 'axios';

class Swapi {
  static getPeople(page) {
    if (!page) page = 1;
    const requestUrl = `${this.url}/people/?page=${page}`;
    const people = this.peopleRepo.find(p => p.requestUrl === requestUrl);
    if (people) return people.data;

    return axios.get(requestUrl)
      .then((result) => {
        this.peopleRepo.push({
          requestUrl,
          data: result.data.results
        });
        
        return result.data.results;
      })
  }

  static getDetails(requestUrl) {
    const person = this.personRepo.find(p => p.requestUrl === requestUrl);
    if (person) return person.data;

    return axios.get(requestUrl)
      .then((result) => {
        this.personRepo.push({
          requestUrl,
          data: result.data.results
        });

        return result.data.results;
      })
  }

  static getSpecies(requestUrl) {
    const species = this.speciesRepo.find(p => p.requestUrl === requestUrl);
    if (species) return species.data;

    return axios.get(requestUrl)
      .then((result) => {
        this.speciesRepo.push({
          requestUrl,
          data: result.data.results
        })

        return result.data.results;
      })
  }
}

Swapi.peopleRepo = [];
Swapi.personRepo = [];
Swapi.speciesRepo = [];
Swapi.url = 'https://swapi.co/api';

export default Swapi;