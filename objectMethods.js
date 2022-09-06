/* Write an ES2015 Version */
function createInstructor(firstName, lastName){
   return {
      firstName,
      lastName
    }
  };

  const favoriteNumber = 42;

  const instructor = {
    firstName: "Colt",
    [favoriteNumber] : "That is my favorite!"
  };


  const d = createAnimal("dog", "bark", "Woooof!")
  // {species: "dog", bark: ƒ}
  d.bark()  //"Woooof!"
  
  const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
  // {species: "sheep", bleet: ƒ}
  s.bleet() //"BAAAAaaaa"

  function createAnimal(species, verb, noise) {
    return {
        species,
        [verb](){
          return noise;
        }
      }
    }