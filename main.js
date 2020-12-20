//
////Global variables/querySelectors
//radio buttons
var radioChoices = document.querySelectorAll('.choices');
//other buttons
var letsCookButton = document.querySelector('.lets-cook-button');
var addARecipeButton = document.querySelector('.add-recipe-button')
var addNewButton = document.querySelector('.add-button');
//left section
//right section
var cookpotContainer = document.querySelector('.cookpot-container');
var recipeContainer = document.querySelector('.recipe-container');
var recipeDisplay = document.querySelector('.recipe-display');
// other
var addRecipeView = document.querySelector('.add-recipe-view');
var recipeType = document.querySelector('.recipe-type-input');
var recipeName = document.querySelector('.recipe-name-input');



////Event Listeners

letsCookButton.addEventListener('click', showDish);
addARecipeButton.addEventListener('click', showAddRecipeView);
addNewButton.addEventListener('click', storeRecipe);

////Functions

//store recipe in array
function storeRecipe() {
  if (recipeType.value === 'Side') {
    sides.push(recipeName.value);
  } else if (recipeType.value === 'Main Dish') {
    mains.push(recipeName.value)
  } else if (recipeType.value === 'Dessert') {
    desserts.push(recipeName.value)
  } else {
    return alert('Please only use recipe types of Side, Main Dish, or Dessert');
  }
  switchRightView();
  recipeDisplay.innerText = recipeName.value;
  resetRecipeInputs();
}

//clear recipe addition inputs
function resetRecipeInputs() {
  recipeType.value = '';
  recipeName.value = '';
}

//shows add recipe FOOTER
function showAddRecipeView() {
  addRecipeView.classList.remove('hidden');
}

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
  switchRightView(); //remove cookpot image and add recipe div
  var meal = getRadioValue();
  if (meal === 'side') {
    recipeDisplay.innerText = generateSide(); // show recipe
  } else if (meal === 'main') {
    recipeDisplay.innerText = generateMain(); // show recipe
  } else if (meal === 'dessert') {
    recipeDisplay.innerText = generateDessert(); // show recipe
  } else if (meal === 'entiremeal') {
    recipeDisplay.innerText = generateEntireMeal();
  } else {
    alert ('Please select a recipe type');//error
  }
}


//generate meal functions
function generateSide() {
  return sides[getRandomIndex(sides)]; //return random string from array
}

function generateMain() {
  return mains[getRandomIndex(mains)]; //return random string from array
}

function generateDessert() {
  return desserts[getRandomIndex(desserts)]; //return random string from array
}

function generateEntireMeal() {
  return `${generateMain()} with a side of ${generateSide()} and ${generateDessert()} for dessert!`
}





function switchRightView() {
  cookpotContainer.classList.add('hidden');
  recipeContainer.classList.remove('hidden');
}
//get random index of array
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
