// var drinkRecipes [
// {name:'Old Fashioned', image:'src="Images/drank.jpg"', drinkType: 'whiskey', flavor: 'sour', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'} 
// {name:'Pear Martini', image:'src="Images/pearMartini.jpg"', drinkType: 'vodka', flavor: 'fruity', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'} 
// {name:'Blueberry Mojitos', image:'src="Images/mojito.jpg"', drinkType: 'rum', flavor: 'fruity', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'} 
// {name:'Paloma', image:'src="Images/paloma.jpg"', drinkType: 'tequila', flavor: 'fruity', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'} 
// {name:'Peach Bellini', image:'src="Images/drank.jpg"', drinkType: 'champagne', flavor: 'fruity', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'} 
// {name:'Gin Fizz', image:'src="Images/ginDrink.jpg"', drinkType: 'gin', flavor: 'botanical', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}]

$(document).ready(function() {
  if(window.location.pathname === '/recipe.html' && localStorage.getItem('drinkType') && localStorage.getItem('flavor')) {
    var drinkType = localStorage.getItem('drinkType');
    var flavor = localStorage.getItem('flavor');
  }

  // for (i = 0; i < fLen; i++) {
  //   text += "<li>" + fruits[i] + "</li>";
  // }

var checkRecipe = function() {
  if(drinkType === 'whiskey') {
    if(flavor === 'sour') {
      console.log('drink one');
    } else if (flavor === 'fruity') {
      console.log('drink two');
    } else if (flavor === 'botanical') {
      console.log('drink three'); 
    } else if(flavor === 'smoky') {
      console.log('drink four');
    } else if (flavor === 'spicy') {
      console.log('drink five');
    } else if (flavor == 'frosty') {
      console.log('drink six');
    }
  } 
}


  $(".alc").click(function(event) {
    var elem = $(this);
    var drinkType = elem.attr('drink');
    
    localStorage.setItem('drinkType', drinkType);
    window.location = 'flavor.html'
  });

  $(".taste").click(function(event) {
    var elem = $(this);
    var flavorType = elem.attr('flavor');

    localStorage.setItem('flavorType', flavorType);
    window.location = 'recipe.html'
  });
});