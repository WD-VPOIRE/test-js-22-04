
function filterPets(obj, filterValue) {
  obj = obj.map(country => {
    country.people = country.people.map(people => {
      people.animals = people.animals.filter(animal => {
        return animal.name.includes(filterValue)
        })
      return people;
    })
    country.people = country.people.filter(people => {
      return people.animals.length > 0
    })
    return country;
  })
  obj = obj.filter(country => {
    return country.people.length > 0
  })
  return obj
}

module.exports = { filterPets }