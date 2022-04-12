const { data } = require("./data");

let filtered = [
  {
    name: 'Uzuzozne',
    people: [
      {
        name: 'Lillie Abbott',
        animals: [
          {
            name: 'John Dory'
          }
        ]
      }
    ]
  },
  {
    name: 'Satanwi',
    people: [
      {
        name: 'Anthony Bruno',
        animals: [
          {
            name: 'Oryx'
          }
        ]
      }
    ]
  }
];

const filter = require("./filter");

test('filter object', () => {
  expect(filter.filterPets(data, "ry")).toEqual(filtered);
});