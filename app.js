const { data } = require("./data");
const filter = require("./filter");
const count = require("./count");

let args = process.argv.slice(2)[0].split("=");
console.log(JSON.stringify(data))
console.log("coucou")
switch(args[0]) {
  case "--filter": 
    console.log(JSON.stringify(filter.filterPets(data, args[1])));
  break;
  case "--count":
    console.log(JSON.stringify(count.count(data)))
}
