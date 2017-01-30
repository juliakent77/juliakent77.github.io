
var drinkRecipes = [
{name:'OLD FASHIONED', image:'src="Images/drank.jpg"', drinkType: 'whiskey', flavor: 'sour', strength:'xxx', ingredients: ['1 scant teaspoon simple syrup', '2 dashes Angostura Bitters, plus more to taste', '1 medium sized slice orange peel, including pith', '2 ounces good-quality rye or bourbon', '1 maraschino cherry'], recipe: 'In old-fashioned glass, combine simple syrup and bitters. Fill glass halfway with ice, then stir about a dozen times. Add enough ice to fill glass. <br> <br> Squeeze orange peel over glass to extract oils, add peel to glass, and add whiskey. Stir just until drink is cold and alcoholic bite has softened, about a dozen times. Garnish with cherry, swizzle stick, and straw.', music: 'url="https://www.facebook.com/"'},
{name:'ROSEMARY PEACH MAPLE LEAF COCKTAIL', image:'src="Images/drank.jpg"', drinkType: 'whiskey', flavor: 'fruity', strength:'xxx', ingredients: ['1 scant teaspoon simple syrup', '2 dashes Angostura Bitters, plus more to taste', '1 medium sized slice orange peel, including pith', '2 ounces good-quality rye or bourbon', '1 maraschino cherry'], recipe: 'In old-fashioned glass, combine simple syrup and bitters. Fill glass halfway with ice, then stir about a dozen times. Add enough ice to fill glass. <br> <br> Squeeze orange peel over glass to extract oils, add peel to glass, and add whiskey. Stir just until drink is cold and alcoholic bite has softened, about a dozen times. Garnish with cherry, swizzle stick, and straw.', music: 'url=""'},
{name:'BLACKBERRY SMASH', image:'src="Images/drank.jpg"', drinkType: 'whiskey', flavor: 'botanical', strength:'xxx', ingredients: ['1 scant teaspoon simple syrup', '2 dashes Angostura Bitters, plus more to taste', '1 medium sized slice orange peel, including pith', '2 ounces good-quality rye or bourbon', '1 maraschino cherry'], recipe: 'In old-fashioned glass, combine simple syrup and bitters. Fill glass halfway with ice, then stir about a dozen times. Add enough ice to fill glass. <br> <br> Squeeze orange peel over glass to extract oils, add peel to glass, and add whiskey. Stir just until drink is cold and alcoholic bite has softened, about a dozen times. Garnish with cherry, swizzle stick, and straw.', music: 'url=""'},
{name:'SMOKEY WHISKEY SOUR', image:'src="Images/drank.jpg"', drinkType: 'whiskey', flavor: 'smoky', strength:'xxx', ingredients: ['1 scant teaspoon simple syrup', '2 dashes Angostura Bitters, plus more to taste', '1 medium sized slice orange peel, including pith', '2 ounces good-quality rye or bourbon', '1 maraschino cherry'], recipe: 'In old-fashioned glass, combine simple syrup and bitters. Fill glass halfway with ice, then stir about a dozen times. Add enough ice to fill glass. <br> <br> Squeeze orange peel over glass to extract oils, add peel to glass, and add whiskey. Stir just until drink is cold and alcoholic bite has softened, about a dozen times. Garnish with cherry, swizzle stick, and straw.', music: 'url=""'},
{name:'SRIRACHA HOT TODDY', image:'src="Images/drank.jpg"', drinkType: 'whiskey', flavor: 'spicy', strength:'xxx', ingredients: ['1 scant teaspoon simple syrup', '2 dashes Angostura Bitters, plus more to taste', '1 medium sized slice orange peel, including pith', '2 ounces good-quality rye or bourbon', '1 maraschino cherry'], recipe: 'In old-fashioned glass, combine simple syrup and bitters. Fill glass halfway with ice, then stir about a dozen times. Add enough ice to fill glass. <br> <br> Squeeze orange peel over glass to extract oils, add peel to glass, and add whiskey. Stir just until drink is cold and alcoholic bite has softened, about a dozen times. Garnish with cherry, swizzle stick, and straw.', music: 'url=""'},
{name:'BOURBON SLUSH PUNCH', image:'src="Images/drank.jpg"', drinkType: 'whiskey', flavor: 'frosty', strength:'xxx', ingredients: ['1 scant teaspoon simple syrup', '2 dashes Angostura Bitters, plus more to taste', '1 medium sized slice orange peel, including pith', '2 ounces good-quality rye or bourbon', '1 maraschino cherry'], recipe: 'In old-fashioned glass, combine simple syrup and bitters. Fill glass halfway with ice, then stir about a dozen times. Add enough ice to fill glass. <br> <br> Squeeze orange peel over glass to extract oils, add peel to glass, and add whiskey. Stir just until drink is cold and alcoholic bite has softened, about a dozen times. Garnish with cherry, swizzle stick, and straw.', music: 'url=""'},

{name:'LEMON DROP', image:'src="Images/pearMartini.jpg"', drinkType: 'vodka', flavor: 'sour', strength:'xxx', ingredients: ['1 1/2 Parts Absolut Pears', '1/2 Part Lemon Juice', '3/4 Part Simple Syrup', '1/2 Part Pear Puree', '1 Slice Pear'], recipe: 'Fill a shaker with ice cubes. Add all ingredients. Shake and strain into a chilled cocktail glass. Garnish with pear.', music: 'url=""'},
{name:'PEAR MARTINI', image:'src="Images/pearMartini.jpg"', drinkType: 'vodka', flavor: 'fruity', strength:'xxx', ingredients: ['1 1/2 Parts Absolut Pears', '1/2 Part Lemon Juice', '3/4 Part Simple Syrup', '1/2 Part Pear Puree', '1 Slice Pear'], recipe: 'Fill a shaker with ice cubes. Add all ingredients. Shake and strain into a chilled cocktail glass. Garnish with pear.', music: 'url=""'},
{name:'EARL GREY MARTINI', image:'src="Images/pearMartini.jpg"', drinkType: 'vodka', flavor: 'botanical', strength:'xxx', ingredients: ['1 1/2 Parts Absolut Pears', '1/2 Part Lemon Juice', '3/4 Part Simple Syrup', '1/2 Part Pear Puree', '1 Slice Pear'], recipe: 'Fill a shaker with ice cubes. Add all ingredients. Shake and strain into a chilled cocktail glass. Garnish with pear.', music: 'url=""'},
{name:'SMOKEHOUSE', image:'src="Images/pearMartini.jpg"', drinkType: 'vodka', flavor: 'smoky', strength:'xxx', ingredients: ['1 1/2 Parts Absolut Pears', '1/2 Part Lemon Juice', '3/4 Part Simple Syrup', '1/2 Part Pear Puree', '1 Slice Pear'], recipe: 'Fill a shaker with ice cubes. Add all ingredients. Shake and strain into a chilled cocktail glass. Garnish with pear.', music: 'url=""'},
{name:'SPICY WHITE RUSSIAN', image:'src="Images/pearMartini.jpg"', drinkType: 'vodka', flavor: 'spicy', strength:'xxx', ingredients: ['1 1/2 Parts Absolut Pears', '1/2 Part Lemon Juice', '3/4 Part Simple Syrup', '1/2 Part Pear Puree', '1 Slice Pear'], recipe: 'Fill a shaker with ice cubes. Add all ingredients. Shake and strain into a chilled cocktail glass. Garnish with pear.', music: 'url=""'},
{name:'SPIKED FROSTY LEMONADE', image:'src="Images/pearMartini.jpg"', drinkType: 'vodka', flavor: 'frosty', strength:'xxx', ingredients: ['1 1/2 Parts Absolut Pears', '1/2 Part Lemon Juice', '3/4 Part Simple Syrup', '1/2 Part Pear Puree', '1 Slice Pear'], recipe: 'Fill a shaker with ice cubes. Add all ingredients. Shake and strain into a chilled cocktail glass. Garnish with pear.', music: 'url=""'},

{name:'Blueberry Mojitos', image:'src="Images/mojito.jpg"', drinkType: 'rum', flavor: 'sour', strength:'xxx', ingredients: ['8 blueberries (fresh or frozen and thawed), plus more for serving', '2 tablespoons (1 ounce) fresh squeezed lime juice', '2 teaspoons sugar', '8 fresh mint leaves, plus more for serving', '1/4 cup (2 ounces) white rum', 'Ice', '2 tablespoons (1 ounce) club soda', 'Lime slice for serving'], recipe: 'Add blueberries, lime juice, sugar and eight mint leaves to a cocktail shaker. Use the end of a wooden spoon or cocktail muddler to bash (or muddle) the mint into the lime juice and sugar. This releases oils from the mint, breaks up the blueberries and helps the sugar dissolve into the lime juice.<br><br>Add rum, stir well then pour into a glass filled with ice, leaving about an inch of room then top with club soda. Garnish with extra blueberries, mint leaves and a lime slice.', music: 'url=""'},
{name:'BLUEBERRY MOJITIS', image:'src="Images/mojito.jpg"', drinkType: 'rum', flavor: 'fruity', strength:'xxx', ingredients: ['8 blueberries (fresh or frozen and thawed), plus more for serving', '2 tablespoons (1 ounce) fresh squeezed lime juice', '2 teaspoons sugar', '8 fresh mint leaves, plus more for serving', '1/4 cup (2 ounces) white rum', 'Ice', '2 tablespoons (1 ounce) club soda', 'Lime slice for serving'], recipe: 'Add blueberries, lime juice, sugar and eight mint leaves to a cocktail shaker. Use the end of a wooden spoon or cocktail muddler to bash (or muddle) the mint into the lime juice and sugar. This releases oils from the mint, breaks up the blueberries and helps the sugar dissolve into the lime juice.<br><br>Add rum, stir well then pour into a glass filled with ice, leaving about an inch of room then top with club soda. Garnish with extra blueberries, mint leaves and a lime slice.', music: 'url=""'},
{name:'ROSEMARY TANGERINE COOLER', image:'src="Images/mojito.jpg"', drinkType: 'rum', flavor: 'botanical', strength:'xxx', ingredients: ['8 blueberries (fresh or frozen and thawed), plus more for serving', '2 tablespoons (1 ounce) fresh squeezed lime juice', '2 teaspoons sugar', '8 fresh mint leaves, plus more for serving', '1/4 cup (2 ounces) white rum', 'Ice', '2 tablespoons (1 ounce) club soda', 'Lime slice for serving'], recipe: 'Add blueberries, lime juice, sugar and eight mint leaves to a cocktail shaker. Use the end of a wooden spoon or cocktail muddler to bash (or muddle) the mint into the lime juice and sugar. This releases oils from the mint, breaks up the blueberries and helps the sugar dissolve into the lime juice.<br><br>Add rum, stir well then pour into a glass filled with ice, leaving about an inch of room then top with club soda. Garnish with extra blueberries, mint leaves and a lime slice.', music: 'url=""'},
{name:'THE PAINKILLER', image:'src="Images/mojito.jpg"', drinkType: 'rum', flavor: 'smoky', strength:'xxx', ingredients: ['8 blueberries (fresh or frozen and thawed), plus more for serving', '2 tablespoons (1 ounce) fresh squeezed lime juice', '2 teaspoons sugar', '8 fresh mint leaves, plus more for serving', '1/4 cup (2 ounces) white rum', 'Ice', '2 tablespoons (1 ounce) club soda', 'Lime slice for serving'], recipe: 'Add blueberries, lime juice, sugar and eight mint leaves to a cocktail shaker. Use the end of a wooden spoon or cocktail muddler to bash (or muddle) the mint into the lime juice and sugar. This releases oils from the mint, breaks up the blueberries and helps the sugar dissolve into the lime juice.<br><br>Add rum, stir well then pour into a glass filled with ice, leaving about an inch of room then top with club soda. Garnish with extra blueberries, mint leaves and a lime slice.', music: 'url=""'},
{name:'SPICY GRAPEFRUIT RUM', image:'src="Images/mojito.jpg"', drinkType: 'rum', flavor: 'spicy', strength:'xxx', ingredients: ['8 blueberries (fresh or frozen and thawed), plus more for serving', '2 tablespoons (1 ounce) fresh squeezed lime juice', '2 teaspoons sugar', '8 fresh mint leaves, plus more for serving', '1/4 cup (2 ounces) white rum', 'Ice', '2 tablespoons (1 ounce) club soda', 'Lime slice for serving'], recipe: 'Add blueberries, lime juice, sugar and eight mint leaves to a cocktail shaker. Use the end of a wooden spoon or cocktail muddler to bash (or muddle) the mint into the lime juice and sugar. This releases oils from the mint, breaks up the blueberries and helps the sugar dissolve into the lime juice.<br><br>Add rum, stir well then pour into a glass filled with ice, leaving about an inch of room then top with club soda. Garnish with extra blueberries, mint leaves and a lime slice.', music: 'url=""'},
{name:'PINA COLADA', image:'src="Images/mojito.jpg"', drinkType: 'rum', flavor: 'frosty', strength:'xxx', ingredients: ['8 blueberries (fresh or frozen and thawed), plus more for serving', '2 tablespoons (1 ounce) fresh squeezed lime juice', '2 teaspoons sugar', '8 fresh mint leaves, plus more for serving', '1/4 cup (2 ounces) white rum', 'Ice', '2 tablespoons (1 ounce) club soda', 'Lime slice for serving'], recipe: 'Add blueberries, lime juice, sugar and eight mint leaves to a cocktail shaker. Use the end of a wooden spoon or cocktail muddler to bash (or muddle) the mint into the lime juice and sugar. This releases oils from the mint, breaks up the blueberries and helps the sugar dissolve into the lime juice.<br><br>Add rum, stir well then pour into a glass filled with ice, leaving about an inch of room then top with club soda. Garnish with extra blueberries, mint leaves and a lime slice.', music: 'url=""'},

{name:'TQUILA SPRITZER', image:'src="Images/paloma.jpg"', drinkType: 'tequila', flavor: 'sour', strength:'xxx', ingredients: ['Kosher salt', '1 grapefruit wedge', '1/4 cup fresh grapefruit juice', '1 tablespoon fresh lime juice', '1 teaspoon sugar', '1/4 cup mezcal or tequila', '1/4 cup club soda'], recipe: 'Pour some kosher salt on a plate. Rub half of rim of a highball glass with grapefruit wedge; dip rim of glass in salt. Combine grapefruit juice, lime juice, and sugar in glass; stir until sugar is dissolved. Stir in mescal, add ice, and top off with club soda. Garnish with grapefruit wedge.', music: 'url=""'},
{name:'PALOMA', image:'src="Images/paloma.jpg"', drinkType: 'tequila', flavor: 'fruity', strength:'xxx', ingredients: ['Kosher salt', '1 grapefruit wedge', '1/4 cup fresh grapefruit juice', '1 tablespoon fresh lime juice', '1 teaspoon sugar', '1/4 cup mezcal or tequila', '1/4 cup club soda'], recipe: 'Pour some kosher salt on a plate. Rub half of rim of a highball glass with grapefruit wedge; dip rim of glass in salt. Combine grapefruit juice, lime juice, and sugar in glass; stir until sugar is dissolved. Stir in mescal, add ice, and top off with club soda. Garnish with grapefruit wedge.', music: 'url=""'},
{name:'BLACKBERRY SAGE SMASH', image:'src="Images/paloma.jpg"', drinkType: 'tequila', flavor: 'botanical', strength:'xxx', ingredients: ['Kosher salt', '1 grapefruit wedge', '1/4 cup fresh grapefruit juice', '1 tablespoon fresh lime juice', '1 teaspoon sugar', '1/4 cup mezcal or tequila', '1/4 cup club soda'], recipe: 'Pour some kosher salt on a plate. Rub half of rim of a highball glass with grapefruit wedge; dip rim of glass in salt. Combine grapefruit juice, lime juice, and sugar in glass; stir until sugar is dissolved. Stir in mescal, add ice, and top off with club soda. Garnish with grapefruit wedge.', music: 'url=""'},
{name:'MEZCAL MARGERITA', image:'src="Images/paloma.jpg"', drinkType: 'tequila', flavor: 'smoky', strength:'xxx', ingredients: ['Kosher salt', '1 grapefruit wedge', '1/4 cup fresh grapefruit juice', '1 tablespoon fresh lime juice', '1 teaspoon sugar', '1/4 cup mezcal or tequila', '1/4 cup club soda'], recipe: 'Pour some kosher salt on a plate. Rub half of rim of a highball glass with grapefruit wedge; dip rim of glass in salt. Combine grapefruit juice, lime juice, and sugar in glass; stir until sugar is dissolved. Stir in mescal, add ice, and top off with club soda. Garnish with grapefruit wedge.', music: 'url=""'},
{name:'HABENERO TEQUILA FIZZ', image:'src="Images/paloma.jpg"', drinkType: 'tequila', flavor: 'spicy', strength:'xxx', ingredients: ['Kosher salt', '1 grapefruit wedge', '1/4 cup fresh grapefruit juice', '1 tablespoon fresh lime juice', '1 teaspoon sugar', '1/4 cup mezcal or tequila', '1/4 cup club soda'], recipe: 'Pour some kosher salt on a plate. Rub half of rim of a highball glass with grapefruit wedge; dip rim of glass in salt. Combine grapefruit juice, lime juice, and sugar in glass; stir until sugar is dissolved. Stir in mescal, add ice, and top off with club soda. Garnish with grapefruit wedge.', music: 'url=""'},
{name:'SLUSHY TEQUILA SUNRISE', image:'src="Images/paloma.jpg"', drinkType: 'tequila', flavor: 'frosty', strength:'xxx', ingredients: ['Kosher salt', '1 grapefruit wedge', '1/4 cup fresh grapefruit juice', '1 tablespoon fresh lime juice', '1 teaspoon sugar', '1/4 cup mezcal or tequila', '1/4 cup club soda'], recipe: 'Pour some kosher salt on a plate. Rub half of rim of a highball glass with grapefruit wedge; dip rim of glass in salt. Combine grapefruit juice, lime juice, and sugar in glass; stir until sugar is dissolved. Stir in mescal, add ice, and top off with club soda. Garnish with grapefruit wedge.', music: 'url=""'},

{name:'AIR MAIL', image:'src="Images/drank.jpg"', drinkType: 'champagne', flavor: 'sour', strength:'xxx', ingredients: ['2 ripe peaches, seeded and diced', '1 tablespoon freshly squeezed lemon juice', '1 teaspoon sugar', '1 bottle chilled prosecco sparkling wine'], recipe: 'Place the peaches, lemon juice, and sugar in the bowl of a food processor fitted with a steel blade and process until smooth. Press the mixture through a sieve and discard the peach solids in the sieve. Place 2 tablespoons of the peach puree into each Champagne glass and fill with cold prosecco. Serve immediately.' , music: 'url=""'},
{name:'PEACH BELLINI', image:'src="Images/drank.jpg"', drinkType: 'champagne', flavor: 'fruity', strength:'xxx', ingredients: ['2 ripe peaches, seeded and diced', '1 tablespoon freshly squeezed lemon juice', '1 teaspoon sugar', '1 bottle chilled prosecco sparkling wine'], recipe: 'Place the peaches, lemon juice, and sugar in the bowl of a food processor fitted with a steel blade and process until smooth. Press the mixture through a sieve and discard the peach solids in the sieve. Place 2 tablespoons of the peach puree into each Champagne glass and fill with cold prosecco. Serve immediately.' , music: 'url=""'},
{name:'THYME GRAPEFRUIT CHAMPAGNE PUNCH', image:'src="Images/drank.jpg"', drinkType: 'champagne', flavor: 'botanical', strength:'xxx', ingredients: ['2 ripe peaches, seeded and diced', '1 tablespoon freshly squeezed lemon juice', '1 teaspoon sugar', '1 bottle chilled prosecco sparkling wine'], recipe: 'Place the peaches, lemon juice, and sugar in the bowl of a food processor fitted with a steel blade and process until smooth. Press the mixture through a sieve and discard the peach solids in the sieve. Place 2 tablespoons of the peach puree into each Champagne glass and fill with cold prosecco. Serve immediately.' , music: 'url=""'},
{name:'BLACK VELVET', image:'src="Images/drank.jpg"', drinkType: 'champagne', flavor: 'smoky', strength:'xxx', ingredients: ['2 ripe peaches, seeded and diced', '1 tablespoon freshly squeezed lemon juice', '1 teaspoon sugar', '1 bottle chilled prosecco sparkling wine'], recipe: 'Place the peaches, lemon juice, and sugar in the bowl of a food processor fitted with a steel blade and process until smooth. Press the mixture through a sieve and discard the peach solids in the sieve. Place 2 tablespoons of the peach puree into each Champagne glass and fill with cold prosecco. Serve immediately.' , music: 'url=""'},
{name:'PINK PEPPERCORN MIMOSA', image:'src="Images/drank.jpg"', drinkType: 'champagne', flavor: 'spicy', strength:'xxx', ingredients: ['2 ripe peaches, seeded and diced', '1 tablespoon freshly squeezed lemon juice', '1 teaspoon sugar', '1 bottle chilled prosecco sparkling wine'], recipe: 'Place the peaches, lemon juice, and sugar in the bowl of a food processor fitted with a steel blade and process until smooth. Press the mixture through a sieve and discard the peach solids in the sieve. Place 2 tablespoons of the peach puree into each Champagne glass and fill with cold prosecco. Serve immediately.' , music: 'url=""'},
{name:'FROSTY FRENCH 75', image:'src="Images/drank.jpg"', drinkType: 'champagne', flavor: 'frosty', strength:'xxx', ingredients: ['2 ripe peaches, seeded and diced', '1 tablespoon freshly squeezed lemon juice', '1 teaspoon sugar', '1 bottle chilled prosecco sparkling wine'], recipe: 'Place the peaches, lemon juice, and sugar in the bowl of a food processor fitted with a steel blade and process until smooth. Press the mixture through a sieve and discard the peach solids in the sieve. Place 2 tablespoons of the peach puree into each Champagne glass and fill with cold prosecco. Serve immediately.' , music: 'url=""'},

{name:'RHUBARB GIN SOUR', image:'src="Images/ginDrink.jpg"', drinkType: 'gin', flavor: 'sour', strength:'xxx', ingredients: ['1 oz Club soda', '2 oz Plymouth gin', '1 oz Lemon juice', '.75 oz Simple syrup', '1  Egg white (about .5 oz)'], recipe: 'Add the club soda to a Fizz or Collins glass and set aside. Add the remaining ingredients to a shaker and shake without ice for about 10 seconds. Add 3 or 4 ice cubes and shake very well. Double-strain into the prepared glass.', music: 'url=""'},
{name:'GRILLED CHERRY SOUR', image:'src="Images/ginDrink.jpg"', drinkType: 'gin', flavor: 'fruity', strength:'xxx', ingredients: ['1 oz Club soda', '2 oz Plymouth gin', '1 oz Lemon juice', '.75 oz Simple syrup', '1  Egg white (about .5 oz)'], recipe: 'Add the club soda to a Fizz or Collins glass and set aside. Add the remaining ingredients to a shaker and shake without ice for about 10 seconds. Add 3 or 4 ice cubes and shake very well. Double-strain into the prepared glass.', music: 'url=""'},
{name:'SAGE HONEY GIN FIZZ', image:'src="Images/ginDrink.jpg"', drinkType: 'gin', flavor: 'botanical', strength:'xxx', ingredients: ['1 oz Club soda', '2 oz Plymouth gin', '1 oz Lemon juice', '.75 oz Simple syrup', '1  Egg white (about .5 oz)'], recipe: 'Add the club soda to a Fizz or Collins glass and set aside. Add the remaining ingredients to a shaker and shake without ice for about 10 seconds. Add 3 or 4 ice cubes and shake very well. Double-strain into the prepared glass.', music: 'url=""'},
{name:'CEDAR GIN RICKY', image:'src="Images/ginDrink.jpg"', drinkType: 'gin', flavor: 'smoky', strength:'xxx', ingredients: ['1 oz Club soda', '2 oz Plymouth gin', '1 oz Lemon juice', '.75 oz Simple syrup', '1  Egg white (about .5 oz)'], recipe: 'Add the club soda to a Fizz or Collins glass and set aside. Add the remaining ingredients to a shaker and shake without ice for about 10 seconds. Add 3 or 4 ice cubes and shake very well. Double-strain into the prepared glass.', music: 'url=""'},
{name:'BOLLYWOOD MARTINI', image:'src="Images/ginDrink.jpg"', drinkType: 'gin', flavor: 'spicy', strength:'xxx', ingredients: ['1 oz Club soda', '2 oz Plymouth gin', '1 oz Lemon juice', '.75 oz Simple syrup', '1  Egg white (about .5 oz)'], recipe: 'Add the club soda to a Fizz or Collins glass and set aside. Add the remaining ingredients to a shaker and shake without ice for about 10 seconds. Add 3 or 4 ice cubes and shake very well. Double-strain into the prepared glass.', music: 'url=""'},
{name:'GIN RICKY SLUSHY', image:'src="Images/ginDrink.jpg"', drinkType: 'gin', flavor: 'frosty', strength:'xxx', ingredients: ['1 oz Club soda', '2 oz Plymouth gin', '1 oz Lemon juice', '.75 oz Simple syrup', '1  Egg white (about .5 oz)'], recipe: 'Add the club soda to a Fizz or Collins glass and set aside. Add the remaining ingredients to a shaker and shake without ice for about 10 seconds. Add 3 or 4 ice cubes and shake very well. Double-strain into the prepared glass.', music: 'url=""'},
]


$(document).ready(function() {

  var renderRecipe = function(recipeObj) {

    $('.drinkTitle').html(recipeObj.name);
    $('.spiritsList').html(recipeObj.drinkType);
    $('.flavorList').html(recipeObj.flavor);
    $('.recipeText').html(recipeObj.recipe);

    // var image = recipeObj.image[i];
    // $('.heroImage').append('<img class="header-img img-responsive">' + image + '</img>');

    for(var i = 0; i < recipeObj.ingredients.length; i++) {
      var ingredient = recipeObj.ingredients[i];
      $('.ingredientList').append('<li class="ingredients" src=ingredient>' + ingredient + '</li>');
    }
  }

  var checkRecipe = function() {
  var drinkType = localStorage.getItem('drinkType');
  var flavor = localStorage.getItem('flavorType');

    for(var i = 0; i < drinkRecipes.length; i++) {
      var drinkObj = drinkRecipes[i];
        if(drinkObj.drinkType === drinkType && drinkObj.flavor === flavor) {
      renderRecipe(drinkObj);
      break;
      }
    }
  }

$( '.surprise' ).click(function(event) {
  var number = Math.floor (Math.random()* (drinkRecipes.length));
  console.log(number);
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