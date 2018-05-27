const allTheCities = require('all-the-cities');
const mongoose = require('mongoose');

const db = require('../db');

const minPopulation = 500000;

function clean() {
  console.log('Dropping database...');
  return db.connection.dropDatabase()
    .then(() => {
      console.log('Database dropped.');
    });
}

function populate() {
  console.log(`Fetching cities with more than ${minPopulation}...`);
  let cities = allTheCities.filter(city => {
    return city.population > minPopulation;
  });
  console.log(`${cities.length} cities found.`);
  return db.City.create(cities)
    .then(() => {
      console.log('Cities stored in the database');
    });
}

function init() {
  db.open()
    .then(clean)
    .then(populate)
    .then(db.close);
}

init();