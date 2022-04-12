
function count(obj) {
  obj = obj.map(country => {
    country.name = `${country.name} ${country.people.length}`
    country.people = country.people.map(people => {
      people.name = `${people.name} ${people.animals.length}`
      return people;
    })
    return country;
  })
  return obj
}

module.exports = { count }