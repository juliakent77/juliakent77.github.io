var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (drinkRecipes.length));
}



var drinkRecipes = [
{name:'OLD FASHIONED', image:'src="Images/drank.jpg"', drinkType: 'whiskey', flavor: 'sour', strength:'xxx', ingredients: '1 scant teaspoon simple syrup 2 dashes Angostura Bitters, plus more to taste 1 half dollar–sized slice orange peel, including pith 2 ounces good-quality rye or bourbon 1 maraschino cherry', recipe: 'In old-fashioned glass, combine simple syrup and bitters. Fill glass halfway with ice, then stir about a dozen times. Add enough ice to fill glass. <br> <br> Squeeze orange peel over glass to extract oils, add peel to glass, and add whiskey. Stir just until drink is cold and alcoholic bite has softened, about a dozen times. Garnish with cherry, swizzle stick, and straw.', music: 'url=""'},
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
{name:'SPICY GRAPEFRUIT RUM', image:'src="Images/mojito.jpg"', drinkType: 'rum', flavor: 'spicy', strength:'xxx', ingredients: '8 blueberries (fresh or frozen and thawed), plus more for serving 2 tablespoons (1 ounce) fresh squeezed lime juice 2 teaspoons sugar 8 fresh mint leaves, plus more for serving 1/4 cup (2 ounces) white rum Ice 2 tablespoons (1 ounce) club soda Lime slice for serving', recipe: 'Add blueberries, lime juice, sugar and eight mint leaves to a cocktail shaker. Use the end of a wooden spoon or cocktail muddler to bash (or muddle) the mint into the lime juice and sugar. This releases oils from the mint, breaks up the blueberries and helps the sugar dissolve into the lime juice.<br><br>Add rum, stir well then pour into a glass filled with ice, leaving about an inch of room then top with club soda. Garnish with extra blueberries, mint leaves and a lime slice.', music: 'url=""'},
{name:'PINA COLADA', image:'src="Images/mojito.jpg"', drinkType: 'rum', flavor: 'frosty', strength:'xxx', ingredients: '8 blueberries (fresh or frozen and thawed), plus more for serving 2 tablespoons (1 ounce) fresh squeezed lime juice 2 teaspoons sugar 8 fresh mint leaves, plus more for serving 1/4 cup (2 ounces) white rum Ice 2 tablespoons (1 ounce) club soda Lime slice for serving', recipe: 'Add blueberries, lime juice, sugar and eight mint leaves to a cocktail shaker. Use the end of a wooden spoon or cocktail muddler to bash (or muddle) the mint into the lime juice and sugar. This releases oils from the mint, breaks up the blueberries and helps the sugar dissolve into the lime juice.<br><br>Add rum, stir well then pour into a glass filled with ice, leaving about an inch of room then top with club soda. Garnish with extra blueberries, mint leaves and a lime slice.', music: 'url=""'},

{name:'TQUILA SPRITZER', image:'src="Images/paloma.jpg"', drinkType: 'tequila', flavor: 'sour', strength:'xxx', ingredients: 'Kosher salt1 grapefruit wedge ¼ cup fresh grapefruit juice 1 tablespoon fresh lime juice 1 teaspoon sugar ¼ cup mescal or tequila ¼ cup club soda', recipe: 'Pour some kosher salt on a plate. Rub half of rim of a highball glass with grapefruit wedge; dip rim of glass in salt. Combine grapefruit juice, lime juice, and sugar in glass; stir until sugar is dissolved. Stir in mescal, add ice, and top off with club soda. Garnish with grapefruit wedge.', music: 'url=""'},
{name:'PALOMA', image:'src="Images/paloma.jpg"', drinkType: 'tequila', flavor: 'fruity', strength:'xxx', ingredients: 'Kosher salt1 grapefruit wedge ¼ cup fresh grapefruit juice 1 tablespoon fresh lime juice 1 teaspoon sugar ¼ cup mescal or tequila ¼ cup club soda', recipe: 'Pour some kosher salt on a plate. Rub half of rim of a highball glass with grapefruit wedge; dip rim of glass in salt. Combine grapefruit juice, lime juice, and sugar in glass; stir until sugar is dissolved. Stir in mescal, add ice, and top off with club soda. Garnish with grapefruit wedge.', music: 'url=""'},
{name:'BLACKBERRY SAGE SMASH', image:'src="Images/paloma.jpg"', drinkType: 'tequila', flavor: 'botanical', strength:'xxx', ingredients: 'Kosher salt1 grapefruit wedge ¼ cup fresh grapefruit juice 1 tablespoon fresh lime juice 1 teaspoon sugar ¼ cup mescal or tequila ¼ cup club soda', recipe: 'Pour some kosher salt on a plate. Rub half of rim of a highball glass with grapefruit wedge; dip rim of glass in salt. Combine grapefruit juice, lime juice, and sugar in glass; stir until sugar is dissolved. Stir in mescal, add ice, and top off with club soda. Garnish with grapefruit wedge.', music: 'url=""'},
{name:'MEZCAL MARGERITA', image:'src="Images/paloma.jpg"', drinkType: 'tequila', flavor: 'smoky', strength:'xxx', ingredients: 'Kosher salt1 grapefruit wedge ¼ cup fresh grapefruit juice 1 tablespoon fresh lime juice 1 teaspoon sugar ¼ cup mescal or tequila ¼ cup club soda', recipe: 'Pour some kosher salt on a plate. Rub half of rim of a highball glass with grapefruit wedge; dip rim of glass in salt. Combine grapefruit juice, lime juice, and sugar in glass; stir until sugar is dissolved. Stir in mescal, add ice, and top off with club soda. Garnish with grapefruit wedge.', music: 'url=""'},
{name:'HABENERO TEQUILA FIZZ', image:'src="Images/paloma.jpg"', drinkType: 'tequila', flavor: 'spicy', strength:'xxx', ingredients: 'Kosher salt1 grapefruit wedge ¼ cup fresh grapefruit juice 1 tablespoon fresh lime juice 1 teaspoon sugar ¼ cup mescal or tequila ¼ cup club soda', recipe: 'Pour some kosher salt on a plate. Rub half of rim of a highball glass with grapefruit wedge; dip rim of glass in salt. Combine grapefruit juice, lime juice, and sugar in glass; stir until sugar is dissolved. Stir in mescal, add ice, and top off with club soda. Garnish with grapefruit wedge.', music: 'url=""'},
{name:'SLUSHY TEQUILA SUNRISE', image:'src="Images/paloma.jpg"', drinkType: 'tequila', flavor: 'frosty', strength:'xxx', ingredients: 'Kosher salt1 grapefruit wedge ¼ cup fresh grapefruit juice 1 tablespoon fresh lime juice 1 teaspoon sugar ¼ cup mescal or tequila ¼ cup club soda', recipe: 'Pour some kosher salt on a plate. Rub half of rim of a highball glass with grapefruit wedge; dip rim of glass in salt. Combine grapefruit juice, lime juice, and sugar in glass; stir until sugar is dissolved. Stir in mescal, add ice, and top off with club soda. Garnish with grapefruit wedge.', music: 'url=""'},

{name:'AIR MAIL', image:'src="Images/drank.jpg"', drinkType: 'champagne', flavor: 'sour', strength:'xxx', ingredients: '2 ripe peaches, seeded and diced 1 tablespoon freshly squeezed lemon juice 1 teaspoon sugar 1 bottle chilled prosecco sparkling wine', recipe: 'Place the peaches, lemon juice, and sugar in the bowl of a food processor fitted with a steel blade and process until smooth. Press the mixture through a sieve and discard the peach solids in the sieve. Place 2 tablespoons of the peach puree into each Champagne glass and fill with cold prosecco. Serve immediately.' , music: 'url=""'},
{name:'PEACH BELLINI', image:'src="Images/drank.jpg"', drinkType: 'champagne', flavor: 'fruity', strength:'xxx', ingredients: '2 ripe peaches, seeded and diced 1 tablespoon freshly squeezed lemon juice 1 teaspoon sugar 1 bottle chilled prosecco sparkling wine', recipe: 'Place the peaches, lemon juice, and sugar in the bowl of a food processor fitted with a steel blade and process until smooth. Press the mixture through a sieve and discard the peach solids in the sieve. Place 2 tablespoons of the peach puree into each Champagne glass and fill with cold prosecco. Serve immediately.' , music: 'url=""'},
{name:'THYME GRAPEFRUIT CHAMPAGNE PUNCH', image:'src="Images/drank.jpg"', drinkType: 'champagne', flavor: 'botanical', strength:'xxx', ingredients: '2 ripe peaches, seeded and diced 1 tablespoon freshly squeezed lemon juice 1 teaspoon sugar 1 bottle chilled prosecco sparkling wine', recipe: 'Place the peaches, lemon juice, and sugar in the bowl of a food processor fitted with a steel blade and process until smooth. Press the mixture through a sieve and discard the peach solids in the sieve. Place 2 tablespoons of the peach puree into each Champagne glass and fill with cold prosecco. Serve immediately.' , music: 'url=""'},
{name:'BLACK VELVET', image:'src="Images/drank.jpg"', drinkType: 'champagne', flavor: 'smoky', strength:'xxx', ingredients: '2 ripe peaches, seeded and diced 1 tablespoon freshly squeezed lemon juice 1 teaspoon sugar 1 bottle chilled prosecco sparkling wine', recipe: 'Place the peaches, lemon juice, and sugar in the bowl of a food processor fitted with a steel blade and process until smooth. Press the mixture through a sieve and discard the peach solids in the sieve. Place 2 tablespoons of the peach puree into each Champagne glass and fill with cold prosecco. Serve immediately.' , music: 'url=""'},
{name:'PINK PEPPERCORN CHAMPAGNE PUNCH', image:'src="Images/drank.jpg"', drinkType: 'champagne', flavor: 'spicy', strength:'xxx', ingredients: '2 ripe peaches, seeded and diced 1 tablespoon freshly squeezed lemon juice 1 teaspoon sugar 1 bottle chilled prosecco sparkling wine', recipe: 'Place the peaches, lemon juice, and sugar in the bowl of a food processor fitted with a steel blade and process until smooth. Press the mixture through a sieve and discard the peach solids in the sieve. Place 2 tablespoons of the peach puree into each Champagne glass and fill with cold prosecco. Serve immediately.' , music: 'url=""'},
{name:'FROSTY FRENCH 75', image:'src="Images/drank.jpg"', drinkType: 'champagne', flavor: 'frosty', strength:'xxx', ingredients: '2 ripe peaches, seeded and diced 1 tablespoon freshly squeezed lemon juice 1 teaspoon sugar 1 bottle chilled prosecco sparkling wine', recipe: 'Place the peaches, lemon juice, and sugar in the bowl of a food processor fitted with a steel blade and process until smooth. Press the mixture through a sieve and discard the peach solids in the sieve. Place 2 tablespoons of the peach puree into each Champagne glass and fill with cold prosecco. Serve immediately.' , music: 'url=""'},

{name:'RHUBARB GIN SOUR', image:'src="Images/ginDrink.jpg"', drinkType: 'gin', flavor: 'sour', strength:'xxx', ingredients: '1 oz Club soda 2 oz Plymouth gin 1 oz Lemon juice .75 oz Simple syrup 1  Egg white (about .5 oz)', recipe: 'Add the club soda to a Fizz or Collins glass and set aside. Add the remaining ingredients to a shaker and shake without ice for about 10 seconds. Add 3 or 4 ice cubes and shake very well. Double-strain into the prepared glass.', music: 'url=""'},
{name:'GRILLED CHERRY SOUR', image:'src="Images/ginDrink.jpg"', drinkType: 'gin', flavor: 'fruity', strength:'xxx', ingredients: '1 oz Club soda 2 oz Plymouth gin 1 oz Lemon juice .75 oz Simple syrup 1  Egg white (about .5 oz)', recipe: 'Add the club soda to a Fizz or Collins glass and set aside. Add the remaining ingredients to a shaker and shake without ice for about 10 seconds. Add 3 or 4 ice cubes and shake very well. Double-strain into the prepared glass.', music: 'url=""'},
{name:'SAGE HONEY GIN FIZZ', image:'src="Images/ginDrink.jpg"', drinkType: 'gin', flavor: 'botanical', strength:'xxx', ingredients: '1 oz Club soda 2 oz Plymouth gin 1 oz Lemon juice .75 oz Simple syrup 1  Egg white (about .5 oz)', recipe: 'Add the club soda to a Fizz or Collins glass and set aside. Add the remaining ingredients to a shaker and shake without ice for about 10 seconds. Add 3 or 4 ice cubes and shake very well. Double-strain into the prepared glass.', music: 'url=""'},
{name:'CEDAR GIN RICKY', image:'src="Images/ginDrink.jpg"', drinkType: 'gin', flavor: 'smoky', strength:'xxx', ingredients: '1 oz Club soda 2 oz Plymouth gin 1 oz Lemon juice .75 oz Simple syrup 1  Egg white (about .5 oz)', recipe: 'Add the club soda to a Fizz or Collins glass and set aside. Add the remaining ingredients to a shaker and shake without ice for about 10 seconds. Add 3 or 4 ice cubes and shake very well. Double-strain into the prepared glass.', music: 'url=""'},
{name:'BOLLYWOOD MARTINI', image:'src="Images/ginDrink.jpg"', drinkType: 'gin', flavor: 'spicy', strength:'xxx', ingredients: '1 oz Club soda 2 oz Plymouth gin 1 oz Lemon juice .75 oz Simple syrup 1  Egg white (about .5 oz)', recipe: 'Add the club soda to a Fizz or Collins glass and set aside. Add the remaining ingredients to a shaker and shake without ice for about 10 seconds. Add 3 or 4 ice cubes and shake very well. Double-strain into the prepared glass.', music: 'url=""'},
{name:'GIN RICKY SLUSHY', image:'src="Images/ginDrink.jpg"', drinkType: 'gin', flavor: 'frosty', strength:'xxx', ingredients: '1 oz Club soda 2 oz Plymouth gin 1 oz Lemon juice .75 oz Simple syrup 1  Egg white (about .5 oz)', recipe: 'Add the club soda to a Fizz or Collins glass and set aside. Add the remaining ingredients to a shaker and shake without ice for about 10 seconds. Add 3 or 4 ice cubes and shake very well. Double-strain into the prepared glass.', music: 'url=""'},
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
  } if(drinkType === 'vodka') {
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
  } if(drinkType === 'rum') {
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
  } if(drinkType === 'tequila') {
    if(flavor === 'sour') {
      $('.drinkTitle').html(drinkRecipes[18].name);
      $('.spiritsList').html(drinkRecipes[18].drinkType);
      $('.flavorList').html(drinkRecipes[18].flavor);
      $('.ingredients').html(drinkRecipes[18].ingredients);
      $('.recipeText').html(drinkRecipes[18].recipe);
    } else if (flavor === 'fruity') {
      $('.drinkTitle').html(drinkRecipes[19].name);
      $('.spiritsList').html(drinkRecipes[19].drinkType);
      $('.flavorList').html(drinkRecipes[19].flavor);
      $('.ingredients').html(drinkRecipes[19].ingredients);
      $('.recipeText').html(drinkRecipes[19].recipe);
    } else if (flavor === 'botanical') {
      $('.drinkTitle').html(drinkRecipes[20].name);
      $('.spiritsList').html(drinkRecipes[20].drinkType);
      $('.flavorList').html(drinkRecipes[20].flavor);
      $('.ingredients').html(drinkRecipes[20].ingredients);
      $('.recipeText').html(drinkRecipes[20].recipe); 
    } else if(flavor === 'smoky') {
      $('.drinkTitle').html(drinkRecipes[21].name);
      $('.spiritsList').html(drinkRecipes[21].drinkType);
      $('.flavorList').html(drinkRecipes[21].flavor);
      $('.ingredients').html(drinkRecipes[21].ingredients);
      $('.recipeText').html(drinkRecipes[21].recipe);
    } else if (flavor === 'spicy') {
      $('.drinkTitle').html(drinkRecipes[22].name);
      $('.spiritsList').html(drinkRecipes[22].drinkType);
      $('.flavorList').html(drinkRecipes[22].flavor);
      $('.ingredients').html(drinkRecipes[22].ingredients);
      $('.recipeText').html(drinkRecipes[22].recipe);
    } else if (flavor == 'frosty') {
      $('.drinkTitle').html(drinkRecipes[23].name);
      $('.spiritsList').html(drinkRecipes[23].drinkType);
      $('.flavorList').html(drinkRecipes[23].flavor);
      $('.ingredients').html(drinkRecipes[23].ingredients);
      $('.recipeText').html(drinkRecipes[23].recipe);
    }
  } if(drinkType === 'champagne') {
    if(flavor === 'sour') {
      $('.drinkTitle').html(drinkRecipes[24].name);
      $('.spiritsList').html(drinkRecipes[24].drinkType);
      $('.flavorList').html(drinkRecipes[24].flavor);
      $('.ingredients').html(drinkRecipes[24].ingredients);
      $('.recipeText').html(drinkRecipes[24].recipe);
    } else if (flavor === 'fruity') {
      $('.drinkTitle').html(drinkRecipes[25].name);
      $('.spiritsList').html(drinkRecipes[25].drinkType);
      $('.flavorList').html(drinkRecipes[25].flavor);
      $('.ingredients').html(drinkRecipes[25].ingredients);
      $('.recipeText').html(drinkRecipes[25].recipe);
    } else if (flavor === 'botanical') {
      $('.drinkTitle').html(drinkRecipes[26].name);
      $('.spiritsList').html(drinkRecipes[26].drinkType);
      $('.flavorList').html(drinkRecipes[26].flavor);
      $('.ingredients').html(drinkRecipes[26].ingredients);
      $('.recipeText').html(drinkRecipes[26].recipe); 
    } else if(flavor === 'smoky') {
      $('.drinkTitle').html(drinkRecipes[27].name);
      $('.spiritsList').html(drinkRecipes[27].drinkType);
      $('.flavorList').html(drinkRecipes[27].flavor);
      $('.ingredients').html(drinkRecipes[27].ingredients);
      $('.recipeText').html(drinkRecipes[27].recipe);
    } else if (flavor === 'spicy') {
      $('.drinkTitle').html(drinkRecipes[28].name);
      $('.spiritsList').html(drinkRecipes[28].drinkType);
      $('.flavorList').html(drinkRecipes[28].flavor);
      $('.ingredients').html(drinkRecipes[28].ingredients);
      $('.recipeText').html(drinkRecipes[28].recipe);
    } else if (flavor == 'frosty') {
      $('.drinkTitle').html(drinkRecipes[29].name);
      $('.spiritsList').html(drinkRecipes[29].drinkType);
      $('.flavorList').html(drinkRecipes[29].flavor);
      $('.ingredients').html(drinkRecipes[29].ingredients);
      $('.recipeText').html(drinkRecipes[29].recipe);
    }
  } if(drinkType === 'gin') {
    if(flavor === 'sour') {
      $('.drinkTitle').html(drinkRecipes[30].name);
      $('.spiritsList').html(drinkRecipes[30].drinkType);
      $('.flavorList').html(drinkRecipes[30].flavor);
      $('.ingredients').html(drinkRecipes[30].ingredients);
      $('.recipeText').html(drinkRecipes[30].recipe);
    } else if (flavor === 'fruity') {
      $('.drinkTitle').html(drinkRecipes[31].name);
      $('.spiritsList').html(drinkRecipes[31].drinkType);
      $('.flavorList').html(drinkRecipes[31].flavor);
      $('.ingredients').html(drinkRecipes[31].ingredients);
      $('.recipeText').html(drinkRecipes[31].recipe);
    } else if (flavor === 'botanical') {
      $('.drinkTitle').html(drinkRecipes[32].name);
      $('.spiritsList').html(drinkRecipes[32].drinkType);
      $('.flavorList').html(drinkRecipes[32].flavor);
      $('.ingredients').html(drinkRecipes[32].ingredients);
      $('.recipeText').html(drinkRecipes[32].recipe); 
    } else if(flavor === 'smoky') {
      $('.drinkTitle').html(drinkRecipes[33].name);
      $('.spiritsList').html(drinkRecipes[33].drinkType);
      $('.flavorList').html(drinkRecipes[33].flavor);
      $('.ingredients').html(drinkRecipes[33].ingredients);
      $('.recipeText').html(drinkRecipes[33].recipe);
    } else if (flavor === 'spicy') {
      $('.drinkTitle').html(drinkRecipes[34].name);
      $('.spiritsList').html(drinkRecipes[34].drinkType);
      $('.flavorList').html(drinkRecipes[34].flavor);
      $('.ingredients').html(drinkRecipes[34].ingredients);
      $('.recipeText').html(drinkRecipes[34].recipe);
    } else if (flavor == 'frosty') {
      $('.drinkTitle').html(drinkRecipes[35].name);
      $('.spiritsList').html(drinkRecipes[35].drinkType);
      $('.flavorList').html(drinkRecipes[35].flavor);
      $('.ingredients').html(drinkRecipes[35].ingredients);
      $('.recipeText').html(drinkRecipes[35].recipe);
    }
  }
}

$( '.surprise' ).click(function(event) {
  var surpriseMe = function() {
  var randNum = getRandomInt();

  };
});


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