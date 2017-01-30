var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (drinkRecipes.length));
}


var drinkRecipes = [
{name:'old fashioned', image:'src="Images/drank.jpg"', drinkType: 'whiskey', flavor: 'sour', strength:'xxx', ingredients: '1 scant teaspoon simple syrup 2 dashes Angostura Bitters, plus more to taste 1 half dollar–sized slice orange peel, including pith 2 ounces good-quality rye or bourbon 1 maraschino cherry', recipe: 'In old-fashioned glass, combine simple syrup and bitters. Fill glass halfway with ice, then stir about a dozen times. Add enough ice to fill glass. <br> <br> Squeeze orange peel over glass to extract oils, add peel to glass, and add whiskey. Stir just until drink is cold and alcoholic bite has softened, about a dozen times. Garnish with cherry, swizzle stick, and straw.', music: 'url=""'},
{name:'ROSEMARY PEACH MAPLE LEAF COCKTAIL', image:'src="Images/drank.jpg"', drinkType: 'whiskey', flavor: 'fruity', strength:'xxx', ingredients: '1 scant teaspoon simple syrup 2 dashes Angostura Bitters, plus more to taste 1 half dollar–sized slice orange peel, including pith 2 ounces good-quality rye or bourbon 1 maraschino cherry', recipe: 'In old-fashioned glass, combine simple syrup and bitters. Fill glass halfway with ice, then stir about a dozen times. Add enough ice to fill glass. <br> <br> Squeeze orange peel over glass to extract oils, add peel to glass, and add whiskey. Stir just until drink is cold and alcoholic bite has softened, about a dozen times. Garnish with cherry, swizzle stick, and straw.', music: 'url=""'},
{name:'BLACKBERRY SMASH', image:'src="Images/drank.jpg"', drinkType: 'whiskey', flavor: 'botanical', strength:'xxx', ingredients: '1 scant teaspoon simple syrup 2 dashes Angostura Bitters, plus more to taste 1 half dollar–sized slice orange peel, including pith 2 ounces good-quality rye or bourbon 1 maraschino cherry', recipe: 'In old-fashioned glass, combine simple syrup and bitters. Fill glass halfway with ice, then stir about a dozen times. Add enough ice to fill glass. <br> <br> Squeeze orange peel over glass to extract oils, add peel to glass, and add whiskey. Stir just until drink is cold and alcoholic bite has softened, about a dozen times. Garnish with cherry, swizzle stick, and straw.', music: 'url=""'},
{name:'SMOKEY WHISKEY SOUR', image:'src="Images/drank.jpg"', drinkType: 'whiskey', flavor: 'smoky', strength:'xxx', ingredients: '1 scant teaspoon simple syrup 2 dashes Angostura Bitters, plus more to taste 1 half dollar–sized slice orange peel, including pith 2 ounces good-quality rye or bourbon 1 maraschino cherry', recipe: 'In old-fashioned glass, combine simple syrup and bitters. Fill glass halfway with ice, then stir about a dozen times. Add enough ice to fill glass. <br> <br> Squeeze orange peel over glass to extract oils, add peel to glass, and add whiskey. Stir just until drink is cold and alcoholic bite has softened, about a dozen times. Garnish with cherry, swizzle stick, and straw.', music: 'url=""'},
{name:'SRIRACHA HOT TODDY', image:'src="Images/drank.jpg"', drinkType: 'whiskey', flavor: 'spicy', strength:'xxx', ingredients: '1 scant teaspoon simple syrup 2 dashes Angostura Bitters, plus more to taste 1 half dollar–sized slice orange peel, including pith 2 ounces good-quality rye or bourbon 1 maraschino cherry', recipe: 'In old-fashioned glass, combine simple syrup and bitters. Fill glass halfway with ice, then stir about a dozen times. Add enough ice to fill glass. <br> <br> Squeeze orange peel over glass to extract oils, add peel to glass, and add whiskey. Stir just until drink is cold and alcoholic bite has softened, about a dozen times. Garnish with cherry, swizzle stick, and straw.', music: 'url=""'},
{name:'BOURBON SLUSH PUNCH', image:'src="Images/drank.jpg"', drinkType: 'whiskey', flavor: 'frosty', strength:'xxx', ingredients: '1 scant teaspoon simple syrup 2 dashes Angostura Bitters, plus more to taste 1 half dollar–sized slice orange peel, including pith 2 ounces good-quality rye or bourbon 1 maraschino cherry', recipe: 'In old-fashioned glass, combine simple syrup and bitters. Fill glass halfway with ice, then stir about a dozen times. Add enough ice to fill glass. <br> <br> Squeeze orange peel over glass to extract oils, add peel to glass, and add whiskey. Stir just until drink is cold and alcoholic bite has softened, about a dozen times. Garnish with cherry, swizzle stick, and straw.', music: 'url=""'},

{name:'LEMON DROP', image:'src="Images/pearMartini.jpg"', drinkType: 'vodka', flavor: 'sour', strength:'xxx', ingredients: '1 ½ Parts Absolut Pears ½ Part Lemon Juice ¾ Part Simple Syrup ½ Part Pear Puree 1 Slice Pear', recipe: 'Fill a shaker with ice cubes. Add all ingredients. Shake and strain into a chilled cocktail glass. Garnish with pear.', music: 'url=""'},
{name:'PEAR MARTINI', image:'src="Images/pearMartini.jpg"', drinkType: 'vodka', flavor: 'fruity', strength:'xxx', ingredients: '1 ½ Parts Absolut Pears ½ Part Lemon Juice ¾ Part Simple Syrup ½ Part Pear Puree 1 Slice Pear', recipe: 'Fill a shaker with ice cubes. Add all ingredients. Shake and strain into a chilled cocktail glass. Garnish with pear.', music: 'url=""'},
{name:'EARL GREY MARTINI', image:'src="Images/pearMartini.jpg"', drinkType: 'vodka', flavor: 'botanical', strength:'xxx', ingredients: '1 ½ Parts Absolut Pears ½ Part Lemon Juice ¾ Part Simple Syrup ½ Part Pear Puree 1 Slice Pear', recipe: 'Fill a shaker with ice cubes. Add all ingredients. Shake and strain into a chilled cocktail glass. Garnish with pear.', music: 'url=""'},
{name:'SMOKEHOUSE', image:'src="Images/pearMartini.jpg"', drinkType: 'vodka', flavor: 'smoky', strength:'xxx', ingredients: '1 ½ Parts Absolut Pears ½ Part Lemon Juice ¾ Part Simple Syrup ½ Part Pear Puree 1 Slice Pear', recipe: 'Fill a shaker with ice cubes. Add all ingredients. Shake and strain into a chilled cocktail glass. Garnish with pear.', music: 'url=""'},
{name:'SPICY WHITE RUSSIAN', image:'src="Images/pearMartini.jpg"', drinkType: 'vodka', flavor: 'spicy', strength:'xxx', ingredients: '1 ½ Parts Absolut Pears ½ Part Lemon Juice ¾ Part Simple Syrup ½ Part Pear Puree 1 Slice Pear', recipe: 'Fill a shaker with ice cubes. Add all ingredients. Shake and strain into a chilled cocktail glass. Garnish with pear.', music: 'url=""'},
{name:'SPIKED FROSTY LEMONADE', image:'src="Images/pearMartini.jpg"', drinkType: 'vodka', flavor: 'frosty', strength:'xxx', ingredients: '1 ½ Parts Absolut Pears ½ Part Lemon Juice ¾ Part Simple Syrup ½ Part Pear Puree 1 Slice Pear', recipe: 'Fill a shaker with ice cubes. Add all ingredients. Shake and strain into a chilled cocktail glass. Garnish with pear.', music: 'url=""'},

{name:'Blueberry Mojitos', image:'src="Images/mojito.jpg"', drinkType: 'rum', flavor: 'sour', strength:'xxx', ingredients: '8 blueberries (fresh or frozen and thawed), plus more for serving 2 tablespoons (1 ounce) fresh squeezed lime juice 2 teaspoons sugar 8 fresh mint leaves, plus more for serving 1/4 cup (2 ounces) white rum Ice 2 tablespoons (1 ounce) club soda Lime slice for serving', recipe: 'Add blueberries, lime juice, sugar and eight mint leaves to a cocktail shaker. Use the end of a wooden spoon or cocktail muddler to bash (or muddle) the mint into the lime juice and sugar. This releases oils from the mint, breaks up the blueberries and helps the sugar dissolve into the lime juice.<br><br>Add rum, stir well then pour into a glass filled with ice, leaving about an inch of room then top with club soda. Garnish with extra blueberries, mint leaves and a lime slice.', music: 'url=""'},
{name:'BLUEBERRY MOJITIS', image:'src="Images/mojito.jpg"', drinkType: 'rum', flavor: 'fruity', strength:'xxx', ingredients: '8 blueberries (fresh or frozen and thawed), plus more for serving 2 tablespoons (1 ounce) fresh squeezed lime juice 2 teaspoons sugar 8 fresh mint leaves, plus more for serving 1/4 cup (2 ounces) white rum Ice 2 tablespoons (1 ounce) club soda Lime slice for serving', recipe: 'Add blueberries, lime juice, sugar and eight mint leaves to a cocktail shaker. Use the end of a wooden spoon or cocktail muddler to bash (or muddle) the mint into the lime juice and sugar. This releases oils from the mint, breaks up the blueberries and helps the sugar dissolve into the lime juice.<br><br>Add rum, stir well then pour into a glass filled with ice, leaving about an inch of room then top with club soda. Garnish with extra blueberries, mint leaves and a lime slice.', music: 'url=""'},
{name:'ROSEMARY TANGERINE COOLER', image:'src="Images/mojito.jpg"', drinkType: 'rum', flavor: 'botanical', strength:'xxx', ingredients: '8 blueberries (fresh or frozen and thawed), plus more for serving 2 tablespoons (1 ounce) fresh squeezed lime juice 2 teaspoons sugar 8 fresh mint leaves, plus more for serving 1/4 cup (2 ounces) white rum Ice 2 tablespoons (1 ounce) club soda Lime slice for serving', recipe: 'Add blueberries, lime juice, sugar and eight mint leaves to a cocktail shaker. Use the end of a wooden spoon or cocktail muddler to bash (or muddle) the mint into the lime juice and sugar. This releases oils from the mint, breaks up the blueberries and helps the sugar dissolve into the lime juice.<br><br>Add rum, stir well then pour into a glass filled with ice, leaving about an inch of room then top with club soda. Garnish with extra blueberries, mint leaves and a lime slice.', music: 'url=""'},
{name:'THE PAINKILLER', image:'src="Images/mojito.jpg"', drinkType: 'rum', flavor: 'smoky', strength:'xxx', ingredients: '8 blueberries (fresh or frozen and thawed), plus more for serving 2 tablespoons (1 ounce) fresh squeezed lime juice 2 teaspoons sugar 8 fresh mint leaves, plus more for serving 1/4 cup (2 ounces) white rum Ice 2 tablespoons (1 ounce) club soda Lime slice for serving', recipe: 'Add blueberries, lime juice, sugar and eight mint leaves to a cocktail shaker. Use the end of a wooden spoon or cocktail muddler to bash (or muddle) the mint into the lime juice and sugar. This releases oils from the mint, breaks up the blueberries and helps the sugar dissolve into the lime juice.<br><br>Add rum, stir well then pour into a glass filled with ice, leaving about an inch of room then top with club soda. Garnish with extra blueberries, mint leaves and a lime slice.', music: 'url=""'},
{name:'SPICY GRAPEFRUIT RUM PUNCH', image:'src="Images/mojito.jpg"', drinkType: 'rum', flavor: 'spicy', strength:'xxx', ingredients: '8 blueberries (fresh or frozen and thawed), plus more for serving 2 tablespoons (1 ounce) fresh squeezed lime juice 2 teaspoons sugar 8 fresh mint leaves, plus more for serving 1/4 cup (2 ounces) white rum Ice 2 tablespoons (1 ounce) club soda Lime slice for serving', recipe: 'Add blueberries, lime juice, sugar and eight mint leaves to a cocktail shaker. Use the end of a wooden spoon or cocktail muddler to bash (or muddle) the mint into the lime juice and sugar. This releases oils from the mint, breaks up the blueberries and helps the sugar dissolve into the lime juice.<br><br>Add rum, stir well then pour into a glass filled with ice, leaving about an inch of room then top with club soda. Garnish with extra blueberries, mint leaves and a lime slice.', music: 'url=""'},
{name:'PINA COLADA', image:'src="Images/mojito.jpg"', drinkType: 'rum', flavor: 'frosty', strength:'xxx', ingredients: '8 blueberries (fresh or frozen and thawed), plus more for serving 2 tablespoons (1 ounce) fresh squeezed lime juice 2 teaspoons sugar 8 fresh mint leaves, plus more for serving 1/4 cup (2 ounces) white rum Ice 2 tablespoons (1 ounce) club soda Lime slice for serving', recipe: 'Add blueberries, lime juice, sugar and eight mint leaves to a cocktail shaker. Use the end of a wooden spoon or cocktail muddler to bash (or muddle) the mint into the lime juice and sugar. This releases oils from the mint, breaks up the blueberries and helps the sugar dissolve into the lime juice.<br><br>Add rum, stir well then pour into a glass filled with ice, leaving about an inch of room then top with club soda. Garnish with extra blueberries, mint leaves and a lime slice.', music: 'url=""'},

{name:'Paloma', image:'src="Images/paloma.jpg"', drinkType: 'tequila', flavor: 'fruity', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'},

{name:'Peach Bellini', image:'src="Images/drank.jpg"', drinkType: 'champagne', flavor: 'fruity', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'},

{name:'Gin Fizz', image:'src="Images/ginDrink.jpg"', drinkType: 'gin', flavor: 'botanical', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}

]

$(document).ready(function() {
  if(window.location.pathname === '/recipe.html' && localStorage.getItem('drinkType') && localStorage.getItem('flavor')) {
    var drinkType = localStorage.getItem('drinkType');
    var flavor = localStorage.getItem('flavor');
  }

var checkRecipe = function() {
  var drinkType = localStorage.getItem('drinkType');
  var flavor = localStorage.getItem('flavorType');

  if(drinkType === 'whiskey') {
    if(flavor === 'sour') {
      $('.drinkTitle').html(drinkRecipes[0].name);
      $('.spiritsList').html(drinkRecipes[0].drinkType);
      $('.flavorList').html(drinkRecipes[0].flavor);
      $('.ingredients').html(drinkRecipes[0].ingredients);
      $('.recipeText').html(drinkRecipes[0].recipe);
    } else if (flavor === 'fruity') {
      $('.drinkTitle').html(drinkRecipes[1].name);
      $('.spiritsList').html(drinkRecipes[1].drinkType);
      $('.flavorList').html(drinkRecipes[1].flavor);
      $('.ingredients').html(drinkRecipes[1].ingredients);
      $('.recipeText').html(drinkRecipes[1].recipe);
    } else if (flavor === 'botanical') {
      $('.drinkTitle').html(drinkRecipes[2].name);
      $('.spiritsList').html(drinkRecipes[2].drinkType);
      $('.flavorList').html(drinkRecipes[2].flavor);
      $('.ingredients').html(drinkRecipes[2].ingredients);
      $('.recipeText').html(drinkRecipes[2].recipe); 
    } else if(flavor === 'smoky') {
      $('.drinkTitle').html(drinkRecipes[3].name);
      $('.spiritsList').html(drinkRecipes[3].drinkType);
      $('.flavorList').html(drinkRecipes[3].flavor);
      $('.ingredients').html(drinkRecipes[3].ingredients);
      $('.recipeText').html(drinkRecipes[3].recipe);
    } else if (flavor === 'spicy') {
      $('.drinkTitle').html(drinkRecipes[4].name);
      $('.spiritsList').html(drinkRecipes[4].drinkType);
      $('.flavorList').html(drinkRecipes[4].flavor);
      $('.ingredients').html(drinkRecipes[4].ingredients);
      $('.recipeText').html(drinkRecipes[4].recipe);
    } else if (flavor == 'frosty') {
      $('.drinkTitle').html(drinkRecipes[5].name);
      $('.spiritsList').html(drinkRecipes[5].drinkType);
      $('.flavorList').html(drinkRecipes[5].flavor);
      $('.ingredients').html(drinkRecipes[5].ingredients);
      $('.recipeText').html(drinkRecipes[5].recipe);
    }
  }

  if(drinkType === 'vodka') {
    if(flavor === 'sour') {
      $('.drinkTitle').html(drinkRecipes[6].name);
      $('.spiritsList').html(drinkRecipes[6].drinkType);
      $('.flavorList').html(drinkRecipes[6].flavor);
      $('.ingredients').html(drinkRecipes[6].ingredients);
      $('.recipeText').html(drinkRecipes[6].recipe);
    } else if (flavor === 'fruity') {
      $('.drinkTitle').html(drinkRecipes[7].name);
      $('.spiritsList').html(drinkRecipes[7].drinkType);
      $('.flavorList').html(drinkRecipes[7].flavor);
      $('.ingredients').html(drinkRecipes[7].ingredients);
      $('.recipeText').html(drinkRecipes[7].recipe);
    } else if (flavor === 'botanical') {
      $('.drinkTitle').html(drinkRecipes[8].name);
      $('.spiritsList').html(drinkRecipes[8].drinkType);
      $('.flavorList').html(drinkRecipes[8].flavor);
      $('.ingredients').html(drinkRecipes[8].ingredients);
      $('.recipeText').html(drinkRecipes[8].recipe); 
    } else if(flavor === 'smoky') {
      $('.drinkTitle').html(drinkRecipes[9].name);
      $('.spiritsList').html(drinkRecipes[9].drinkType);
      $('.flavorList').html(drinkRecipes[9].flavor);
      $('.ingredients').html(drinkRecipes[9].ingredients);
      $('.recipeText').html(drinkRecipes[9].recipe);
    } else if (flavor === 'spicy') {
      $('.drinkTitle').html(drinkRecipes[10].name);
      $('.spiritsList').html(drinkRecipes[10].drinkType);
      $('.flavorList').html(drinkRecipes[10].flavor);
      $('.ingredients').html(drinkRecipes[10].ingredients);
      $('.recipeText').html(drinkRecipes[10].recipe);
    } else if (flavor == 'frosty') {
      $('.drinkTitle').html(drinkRecipes[11].name);
      $('.spiritsList').html(drinkRecipes[11].drinkType);
      $('.flavorList').html(drinkRecipes[11].flavor);
      $('.ingredients').html(drinkRecipes[11].ingredients);
      $('.recipeText').html(drinkRecipes[11].recipe);
    }
  }
  if(drinkType === 'rum') {
    if(flavor === 'sour') {
      $('.drinkTitle').html(drinkRecipes[12].name);
      $('.spiritsList').html(drinkRecipes[12].drinkType);
      $('.flavorList').html(drinkRecipes[12].flavor);
      $('.ingredients').html(drinkRecipes[12].ingredients);
      $('.recipeText').html(drinkRecipes[12].recipe);
    } else if (flavor === 'fruity') {
      $('.drinkTitle').html(drinkRecipes[13].name);
      $('.spiritsList').html(drinkRecipes[13].drinkType);
      $('.flavorList').html(drinkRecipes[13].flavor);
      $('.ingredients').html(drinkRecipes[13].ingredients);
      $('.recipeText').html(drinkRecipes[13].recipe);
    } else if (flavor === 'botanical') {
      $('.drinkTitle').html(drinkRecipes[14].name);
      $('.spiritsList').html(drinkRecipes[14].drinkType);
      $('.flavorList').html(drinkRecipes[14].flavor);
      $('.ingredients').html(drinkRecipes[14].ingredients);
      $('.recipeText').html(drinkRecipes[14].recipe); 
    } else if(flavor === 'smoky') {
      $('.drinkTitle').html(drinkRecipes[15].name);
      $('.spiritsList').html(drinkRecipes[15].drinkType);
      $('.flavorList').html(drinkRecipes[15].flavor);
      $('.ingredients').html(drinkRecipes[15].ingredients);
      $('.recipeText').html(drinkRecipes[15].recipe);
    } else if (flavor === 'spicy') {
      $('.drinkTitle').html(drinkRecipes[16].name);
      $('.spiritsList').html(drinkRecipes[16].drinkType);
      $('.flavorList').html(drinkRecipes[16].flavor);
      $('.ingredients').html(drinkRecipes[16].ingredients);
      $('.recipeText').html(drinkRecipes[16].recipe);
    } else if (flavor == 'frosty') {
      $('.drinkTitle').html(drinkRecipes[17].name);
      $('.spiritsList').html(drinkRecipes[17].drinkType);
      $('.flavorList').html(drinkRecipes[17].flavor);
      $('.ingredients').html(drinkRecipes[17].ingredients);
      $('.recipeText').html(drinkRecipes[17].recipe);
    }

}

// var surpriseMe = function() {
//   var randNum = getRandomInt(1, 3);
// }

// var generateComputerChoice = function() {
//   var randNum = getRandomInt(1, 3);
//   if(randNum === 1) {
//     computerChoice = 'rock';
//   } else if (randNum === 2) {
//     computerChoice = 'paper';
//   } else {
//     computerChoice = 'scissors';
//   }
// }

checkRecipe ();




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