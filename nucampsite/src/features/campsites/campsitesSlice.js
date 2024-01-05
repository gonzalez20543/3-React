import CAMPSITES from "../../app/shared/CAMPSITES";

const selectAllCampsites = () => {
  return CAMPSITES;
};

const randomCampsite = () => {
  return CAMPSITES[Math.floor(Math.random() * CAMPSITES.length)];
};

console.log(randomCampsite());
