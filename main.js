//
////Global variables/querySelectors
//radio buttons
var radioChoices = document.querySelectorAll('.choices');
// var sideRadioButton = document.querySelector('#sides');
// var mainRadioButton = document.querySelector('#mains');
// var dessertRadioButton = document.querySelector('#desserts');

//other buttons
var letsCookButton = document.querySelector('.lets-cook-button');
//left section

//right section
var cookpotImage = document.querySelector('.cookpot');





////Event Listeners

letsCookButton.addEventListener('click', showDish);



////Functions

//gets value of radio button selected
function getRadioValue() {
  for (i = 0; i < radioChoices.length; i++) {
    if (radioChoices[i].checked) {
      return radioChoices[i].value
    }
  }
}





//show dish and remove cookpot image
function showDish() {
  var meal = getRadioValue();
  if (meal === 'side') {
    console.log(generateSide()) // show recipe
  } else if (meal === 'main') {
    console.log(generateMain()) // show recipe
  } else if (meal === 'dessert') {
    console.log(generateDessert()) // show recipe
  } else {
    console.log('nothing selected') //error
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
