#!/usr/bin/node
const request = require('request');
const url = process.argv[2];
const characterId = 18;

let count = 0;

function fetchFilms (url) {
  request(url, (error, response, body) => {
    if (error) {
      console.error(error);
    } else {
      const data = JSON.parse(body);
      data.results.forEach((film) => {
        if (film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)) {
          count++;
        }
      });

      // Check if there is a next page
      if (data.next) {
        fetchFilms(data.next); // Fetch the next page
      } else {
        console.log(count); // Print the final count
      }
    }
  });
}

fetchFilms(url);
