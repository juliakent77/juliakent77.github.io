// How to get the div clicks to input tags within my array?
// How to add event listeners on my divs


// An array of my recipes:
// [
// {name:'Old Fashioned', image:'src="Images/drank.jpg"', drinkType: 'whiskey', flavor: 'sour', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'} 
// {name:'Old Fashioned', image:'src="Images/drank.jpg"', drinkType: 'whiskey', flavor: 'fruity', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Old Fashioned', image:'src="Images/drank.jpg"', drinkType: 'whiskey', flavor: 'botanical', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Old Fashioned', image:'src="Images/drank.jpg"', drinkType: 'whiskey', flavor: 'smoky', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Old Fashioned', image:'src="Images/drank.jpg"', drinkType: 'whiskey', flavor: 'spicy', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Old Fashioned', image:'src="Images/drank.jpg"', drinkType: 'whiskey', flavor: 'frosty', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}

// {name:'Pear Martini', image:'src="Images/drank.jpg"', drinkType: 'vodka', flavor: 'sour', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Pear Martini', image:'src="Images/drank.jpg"', drinkType: 'vodka', flavor: 'fruity', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Pear Martini', image:'src="Images/drank.jpg"', drinkType: 'vodka', flavor: 'botanical', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Pear Martini', image:'src="Images/drank.jpg"', drinkType: 'vodka', flavor: 'smoky', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Pear Martini', image:'src="Images/drank.jpg"', drinkType: 'vodka', flavor: 'spicy', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Pear Martini', image:'src="Images/drank.jpg"', drinkType: 'vodka', flavor: 'frosty', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}

// {name:'Dark and Stormy', image:'src="Images/drank.jpg"', drinkType: 'rum', flavor: 'sour', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Dark and Stormy', image:'src="Images/drank.jpg"', drinkType: 'rum', flavor: 'fruity', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Dark and Stormy', image:'src="Images/drank.jpg"', drinkType: 'rum', flavor: 'botanical', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Dark and Stormy', image:'src="Images/drank.jpg"', drinkType: 'rum', flavor: 'smoky', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Dark and Stormy', image:'src="Images/drank.jpg"', drinkType: 'rum', flavor: 'spicy', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Dark and Stormy', image:'src="Images/drank.jpg"', drinkType: 'rum', flavor: 'frosty', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}

// {name:'Paloma', image:'src="Images/drank.jpg"', drinkType: 'tequila', flavor: 'sour', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Paloma', image:'src="Images/drank.jpg"', drinkType: 'tequila', flavor: 'fruity', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Paloma', image:'src="Images/drank.jpg"', drinkType: 'tequila', flavor: 'botanical', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Paloma', image:'src="Images/drank.jpg"', drinkType: 'tequila', flavor: 'smoky', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Paloma', image:'src="Images/drank.jpg"', drinkType: 'tequila', flavor: 'spicy', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Paloma', image:'src="Images/drank.jpg"', drinkType: 'tequila', flavor: 'frosty', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}

// {name:'Peach Bellini', image:'src="Images/drank.jpg"', drinkType: 'champagne', flavor: 'sour', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Peach Bellini', image:'src="Images/drank.jpg"', drinkType: 'champagne', flavor: 'fruity', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Peach Bellini', image:'src="Images/drank.jpg"', drinkType: 'champagne', flavor: 'botanical', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Peach Bellini', image:'src="Images/drank.jpg"', drinkType: 'champagne', flavor: 'smoky', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Peach Bellini', image:'src="Images/drank.jpg"', drinkType: 'champagne', flavor: 'spicy', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Peach Bellini', image:'src="Images/drank.jpg"', drinkType: 'champagne', flavor: 'frosty', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}

// {name:'Gin Fizz', image:'src="Images/drank.jpg"', drinkType: 'gin', flavor: 'sour', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Gin Fizz', image:'src="Images/drank.jpg"', drinkType: 'gin', flavor: 'fruity', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Gin Fizz', image:'src="Images/drank.jpg"', drinkType: 'gin', flavor: 'botnaical', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Gin Fizz', image:'src="Images/drank.jpg"', drinkType: 'gin', flavor: 'smoky', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Gin Fizz', image:'src="Images/drank.jpg"', drinkType: 'gin', flavor: 'spicy', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Gin Fizz', image:'src="Images/drank.jpg"', drinkType: 'gin', flavor: 'frosty', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}

// ]

// [{name:'Old Fashioned', image:'src="Images/drank.jpg"', drinkType: 'whiskey', flavor: 'sour', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'} {name:'Pear Martini', image:'src="Images/drank.jpg"', drinkType: 'vodka', flavor: 'fruity', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'} {name:'Dark and Stormy', image:'src="Images/drank.jpg"', drinkType: 'rum', flavor: 'botanical', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'} {name:'Paloma', image:'src="Images/drank.jpg"', drinkType: 'tequila', flavor: 'fruity', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'} {name:'Peach Bellini', image:'src="Images/drank.jpg"', drinkType: 'champagne', flavor: 'fruity', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'} {name:'Gin Fizz', image:'src="Images/drank.jpg"', drinkType: 'gin', flavor: 'botnaical', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}]



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

$( "#result" ).load( "recipe.html", function() {
  alert( "Load was performed." );
});

// $('.recipeContainer').load(function(event) {
//   alert( "Load was performed." );
//   // event.preventDefault();
//   // var elem = $(event.target);

//   // // var todo = elem.todoInput.val();
//   // var todo = $("input:text").val();

//   // var li = $(add.('li'));
//   // var input = $(add.('input'));
//   // var p = $(add.('p'));
//   // var deleteButton = $(add.('button'));
//   // var clearDiv = $(add.('div'));

//   // li.className = $('fadeIn');
//   // input.type = $('checkbox');
//   // p.innerHTML = $(todo);
//   // deleteButton.innerHTML = $('Delete');
//   // clearDiv.className = $('clearfix');

//   // $(deleteButton).click(function(event) {
//   //   $(elem).parent().remove();
//   // };

//   // $('li').append(input);
//   // $('li').append(p);
//   // $('li').append(deleteButton);
//   // $('li').append(clearDiv);

//   // $('todoList').append(li);

//   // elem.todoInput.value = '';
// });
