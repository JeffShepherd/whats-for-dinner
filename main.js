//
////Global variables/querySelectors
//radio buttons
// var sideRadioButton = ;
// var mainRadioButton = ;
// var dessertRadioButton = ;
//other buttons
var letsCookButton = document.querySelector('.lets-cook-button');
//left section

//right section
var cookpotImage = document.querySelector('.cookpot');





////Event Listeners

letsCookButton.addEventListener('click', showDish);



////Functions
//show dish and remove cookpot image
function showDish() {
  if ("input = true") {
    // show recipe
  } else if ("input = true") {
    // show recipe
  } else if ("input = true") {
    // show recipe
  } else {
    //error
  }
  removeCookpotImage(); //remove cookpot image
}

function generateSide() {
  return sides[getRandomIndex(sides)]; //return random string from array
}
function generateMain() {
  return mains[getRandomIndex(mains)]; //return random string from array
}
function generateDessert() {
  return desserts[getRandomIndex(desserts)]; //return random string from array
}






function removeCookpotImage() {
  cookpotImage.classList.toggle('hidden');
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}




////Food Arrays
var sides = [
  'Miso Glazed Carrots',
  'Coleslaw',
  'Garden Salad',
  'Crispy Potatoes',
  'Sweet Potato Tots',
  'Coconut Rice',
  'Caeser Salad',
  'Shrimp Summer Rolls',
  'Garlic Butter Mushrooms',
  'Hush Puppies'
]

var mains = [
  'Spaghetti and Meatballs',
  'Pineapple Chicken',
  'Shakshuka',
  'Thai Yellow Curry',
  'Bibimbap',
  'Chicken Parmesean',
  'Butternut Squash Soup',
  'BBQ Chicken Burgers',
  'Ramen',
  'Empanadas',
  'Chicken Fried Rice',
  'Sheet Pan Fajitas',
  'Margarita Pizza'
]

var desserts = [
  'Apple Pie',
  'Lemon Meringue Pie',
  'Black Forest Cake',
  'Banana Bread',
  'Peach Cobbler',
  'Cheesecake',
  'Funfetti Cake',
  'Baklava',
  'Flan',
  'Macarons',
  'Macaroons',
  'Chocolate Cupcakes',
  'Pavlova',
  'Pumpkin Pie',
  'Key Lime Pie',
  'Tart Tatin',
  'Croissants',
  'Eclairs'
]
