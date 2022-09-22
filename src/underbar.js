(function() {
  'use strict';

  window._ = {};

  _.identity = function(val) {
    return val;
  };

  _.first = function(array, n) {
    return n === undefined ? array[0] : array.slice(0, n);
  };

  _.last = function(array, n) {
    if (n <= 0) {
      return [];
    } else {
      return n === undefined ? array[array.length - 1] : array.slice(-n);
    }
  };

  _.each = function(collection, iterator) {
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        iterator(collection[i], i, collection);
      }
    } else {
      for (var key in collection) {
        iterator(collection[key], key, collection);
      }
    }
  };

  _.indexOf = function(array, target) {

    var result = -1;

    _.each(array, function(item, index) {
      if (item === target && result === -1) {
        result = index;
      }
    });

    return result;
  };

  _.filter = function(collection, test) {
    var valuesPassed = [];
    _.each(collection, function (inputValue) {
      if (test(inputValue)) {
        valuesPassed.push(inputValue);
      }
    });
    return valuesPassed;
  };

  _.reject = function(collection, test) {
    var valuesFailed = [];
    _.filter(collection, function(inputValue) {
      if (!test(inputValue)) {
        valuesFailed.push(inputValue);
      }
    });
    return valuesFailed;
  };

  _.uniq = function(array, isSorted, iterator) {

    var uniqueValues = [];
    var transformedValues = [];
    if (iterator === undefined) {
      _.each(array, function(inputValue) {
        if (!uniqueValues.includes(inputValue)) {
          uniqueValues.push(inputValue);
        }
      });
    } else {
      _.each(array, function(inputValue, index) {
        if (!transformedValues.includes(iterator(inputValue))) {
          transformedValues.push(iterator(inputValue));
          uniqueValues.push(array[index]);
        }
      });
    }
    return uniqueValues;
  };

  _.map = function(collection, iterator) {

    var iteratedResults = [];
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        iteratedResults.push(iterator(collection[i], i, collection));
      }
    } else {
      for (var key in collection) {
        iteratedResults.push(iterator(collection[key], key, collection));
      }
    }
    return iteratedResults;
  };

  _.pluck = function(collection, key) {
    return _.map(collection, function(item) {
      return item[key];
    });
  };


  _.reduce = function(collection, iterator, accumulator) {
    if (accumulator === undefined) {
      accumulator = collection[0];
      _.each(collection.slice(1), function (item) {
        accumulator = iterator(accumulator, item);
      });
    } else {
      _.each(collection, function (item) {
        accumulator = iterator(accumulator, item);
      });
    }
    return accumulator;
  };

  _.contains = function(collection, target) {

    return _.reduce(collection, function(wasFound, item) {
      if (wasFound) {
        return true;
      }
      return item === target;
    }, false);
  };

  _.every = function(collection, iterator) {
    return _.reduce(collection, function(isAllTrue, item) {
      if (!isAllTrue) {
        return false;
      }
      if (iterator) {
        return !!iterator(item);
      }
      return !!item;
    }, true);
  };

  _.some = function(collection, iterator) {
    return !_.every(collection, function(item) {
      if (iterator === undefined) {
        return !item;
      } else if (iterator) {
        return !iterator(item);
      }
    });
  };

  _.extend = function(obj) {
    var objectMerged = obj;
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        _.each(arguments[i], function (value, key) {
          objectMerged[key] = value;
        });
      }
      return objectMerged;
    }
  };

  _.defaults = function(obj) {
    var objectMerged = obj;
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        _.each(arguments[i], function (value, key) {
          if (objectMerged[key] === undefined) {
            objectMerged[key] = value;
          }
        });
      }
      return objectMerged;
    }
  };


  _.once = function(func) {

    var alreadyCalled = false;
    var result;

    return function() {
      if (!alreadyCalled) {
        result = func.apply(this, arguments);
        alreadyCalled = true;
      }
      return result;
    };
  };

  _.memoize = function(func) {

    var results = {};

    return function() {
      var args = JSON.stringify(arguments);
      if (!results[args]) {
        results[args] = func.apply(this, arguments);
      }
      return results[args];
    };
  };

  _.delay = function(func, wait) {
    return setTimeout.apply(this, arguments);
  };

  _.shuffle = function(array) {
    var copiedArray = array.slice(0);
    var randomIndex = [];
    var randomArray = [];

    while (randomIndex.length < copiedArray.length) {
      var random = Math.round(Math.random() * (copiedArray.length - 1));
      if (!randomIndex.includes(random)) {
        randomIndex.push(random);
      }
    }

    for (var i = 0; i < randomIndex.length; i++) {
      randomArray.push(copiedArray[randomIndex[i]]);
    }
    return randomArray;
  };

/**
   * ADVANCED: EXTRA CREDIT BEGINS HERE
   * =================
   *
   * Note: This is the end of the required pre-course curriculum. Feel free to continue,
   * but everything beyond here is extra credit.
   */

  // Calls the method named by functionOrKey on each value in the list.
  // Note: You will need to learn a bit about .apply to complete this.
  _.invoke = function(collection, functionOrKey, args) {
  };

  // Sort the object's values by a criterion produced by an iterator.
  // If iterator is a string, sort objects by that property with the name
  // of that string. For example, _.sortBy(people, 'name') should sort
  // an array of people by their name.
  _.sortBy = function(collection, iterator) {
  };

  // Zip together two or more arrays with elements of the same index
  // going together.
  //
  // Example:
  // _.zip(['a','b','c','d'], [1,2,3])
  // returns [['a',1], ['b',2], ['c',3], ['d',undefined]]
  _.zip = function() {
  };

  // Takes a multidimensional array and converts it to a one-dimensional array.
  // The new array should contain all elements of the multidimensional array.
  //
  // Hint: Use Array.isArray to check if something is an array
  _.flatten = function(nestedArray, result) {
  };

  // Takes an arbitrary number of arrays and produces an array that contains
  // every item shared between all the passed-in arrays.
  _.intersection = function() {
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.  See the Underbar readme for extra details
  // on this function.
  //
  // Note: This is difficult! It may take a while to implement.
  _.throttle = function(func, wait) {
  };
}());
