const people = {
  "count": 87,
  "next": "https://swapi.co/api/people/?page=2",
  "previous": null,
  "results": [
    {
      "name": "Test User",
      "height": "172",
      "mass": "77",
      "hair_color": "blond",
      "skin_color": "fair",
      "eye_color": "blue",
      "birth_year": "19BBY",
      "gender": "male",
      "species": [{
        "name": "Mock"
      }],
      "url": "https://swapi.co/api/people/1/"
    },
    {
      "name": "Another Test User",
      "height": "100",
      "mass": "55",
      "hair_color": "blond",
      "skin_color": "fair",
      "eye_color": "blue",
      "birth_year": "19BBY",
      "gender": "male",
      "species": [{
        "name": "Mock"
      }],
      "url": "https://swapi.co/api/people/1/"
    }
  ]
};

const details = {
  "name": "Mock Char",
  "height": "96",
  "mass": "32",
  "hair_color": "red",
  "skin_color": "white, blue",
  "eye_color": "red",
  "birth_year": "33BBY",
  "gender": "test"
};

const species = {
  "name": "Mock"
};

class Swapi {
  static getPeople(page) {
    return people;
  }

  static getDetails(requestUrl) {
    return details;
  }

  static getSpecies(requestUrl) {
    return species;
  }
}