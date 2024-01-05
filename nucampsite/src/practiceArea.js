const things = [
  {
    id: 0,
    title: "whiskers on kittens",
    favorite: true,
    points: 97,
  },
  {
    id: 1,
    title: "raindrops on roses",
    favorite: true,
    points: 77,
  },
  {
    id: 2,
    title: "brown paper packages tied up with string",
    favorite: true,
    points: 87,
  },
  {
    id: 3,
    title: "dog bite",
    favorite: false,
    featured: "true",
    points: 12,
  },
  {
    id: 4,
    title: "bee sting",
    favorite: false,
    points: 6,
  },
];

const myFavoriteThings = things.filter((thing) => thing.favorite === true);

const thingsOverFifthy = things.filter((thing) => thing.points > 50);

console.log(myFavoriteThings);
console.log(thingsOverFifthy);
console.log("Testing the find Method \n");

const selectedById = (id) => {
  return things.find((thing) => thing.id === id);
};


console.log(selectedById(10));