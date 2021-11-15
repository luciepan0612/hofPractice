// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  count = 0;
  _.each(numbers, function(number, index, collection) {
    if (number % 5 === 0) {
      count++;
    }
  });
  return count;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  fruits = _.filter (fruits, function (fruit, index, collection) {
    if (fruit === targetFruit) {
      return fruit;
    }
  });
  return fruits;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  fruits = _.filter (fruits, function (fruit, index, collection) {
    if (fruit[0] === letter) {
      return fruit;
    }
  });
  return fruits;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  desserts = _.filter (desserts, function (dessert, index, collection) {
    if (dessert.type === 'cookie') {
      return dessert;
    }
  });
  return desserts;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  var sum = _.reduce(products, function (memo, product) {
    return memo + parseFloat(product.price.slice(1));
  }, 0);
  return sum;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  var output = _.reduce(desserts, function(result, dessert) {
    result[dessert.type] ? result[dessert.type] += 1 : result[dessert.type] = 1;
    return result;
  }, {});
  return output;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  var output = _.reduce(movies, function(result, movie, key) {
    if (movie.releaseYear >= 1990 && movie.releaseYear <= 2000) {
      result.push(movie.title);
    }
    return result;
  }, []);
  return output;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  var output = _.reduce(movies, function(result, movie, key) {
    if (movie.runtime < timeLimit) {
      result = true;
    }
    return result;
  }, false);
  return output;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  fruits = _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  });
  return fruits;
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  output = _.map(desserts, function(dessert) {
    if (dessert.ingredients.includes('flour')) {
      dessert['glutenFree'] = true;
    } else {
      dessert['glutenFree'] = false;
    }
    return dessert;
  });
  return output;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.61'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
  var output = _.map(groceries, function(product) {
    price = parseFloat(product.price.slice(1));
    product.salePrice = '$' + (price * (1 - coupon)).toFixed(2);
    return product;
  });
  return output;
};

