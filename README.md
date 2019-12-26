# swapi-BE
node server with express and conection with mongoDB

## Heroku app page

http://swapi-front-end.herokuapp.com/
work in a bug that return incorrect data format in my starships


# ENDPOINTS

## Get all starships

http://swapi-front-end.herokuapp.com/MyStarships

return array with all values of Starships in MongoDB

## Get specific starship

http://swapi-front-end.herokuapp.com/MyStarships/:id

Is possible get specific starship with the ID of starships in mongoDB

## Save a new Starships
 
http://swapi-front-end.herokuapp.com/saveStarship

Require 3 parameters from return a new starship value
 - name: A string with the name of new starship
 - Manufacturer: A string with the name of manufacturer
 - Cost: The cost in units of the new starship

