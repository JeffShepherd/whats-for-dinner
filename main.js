var radioChoices = document.querySelectorAll('.choices');
var letsCookButton = document.querySelector('.lets-cook-button');
var addARecipeButton = document.querySelector('.add-recipe-button')
var addNewButton = document.querySelector('.add-button');
var cookpotContainer = document.querySelector('.cookpot-container');
var recipeContainer = document.querySelector('.recipe-container');
var recipeDisplay = document.querySelector('.recipe-display');
var addRecipeView = document.querySelector('.add-recipe-view');
var recipeType = document.querySelector('.recipe-type-input');
var recipeName = document.querySelector('.recipe-name-input');

letsCookButton.addEventListener('click', showDish);
addARecipeButton.addEventListener('click', showAddRecipeView);
addNewButton.addEventListener('click', storeRecipe);

function getRadioValue() {
  for (i = 0; i < radioChoices.length; i++) {
    if (radioChoices[i].checked) {
      return radioChoices[i].value
    }
  }
}

function showDish() {
  var meal = getRadioValue();
  if (meal === 'side') {
    recipeDisplay.innerText = generateSide();
  } else if (meal === 'main') {
    recipeDisplay.innerText = generateMain();
  } else if (meal === 'dessert') {
    recipeDisplay.innerText = generateDessert();
  } else if (meal === 'entiremeal') {
    recipeDisplay.innerText = generateEntireMeal();
  } else {
    return alert('Please select a recipe type');
  }
  switchRightView();
}

function generateSide() {
  return sides[getRandomIndex(sides)];
}

function generateMain() {
  return mains[getRandomIndex(mains)];
}

function generateDessert() {
  return desserts[getRandomIndex(desserts)];
}

function generateEntireMeal() {
  return `${generateMain()} with a side of ${generateSide()} and ${generateDessert()} for dessert!`
}

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

function resetRecipeInputs() {
  recipeType.value = '';
  recipeName.value = '';
}

function showAddRecipeView() {
  addRecipeView.classList.remove('hidden');
}

function switchRightView() {
  cookpotContainer.classList.add('hidden');
  recipeContainer.classList.remove('hidden');
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

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
