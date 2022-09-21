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
      } else {
        return item !== iterator;
      }
    });
  };


  /**
   * OBJECTS
   * =======
   *
   * In this section, we'll look at a couple of helpers for merging objects.
   */

  // Extend a given object with all the properties of the passed in
  // object(s).
  //
  // Example:
  //   var obj1 = {key1: "something"};
  //   _.extend(obj1, {
  //     key2: "something new",
  //     key3: "something else new"
  //   }, {
  //     bla: "even more stuff"
  //   }); // obj1 now contains key1, key2, key3 and bla
  _.extend = function(obj) {
  };

  // Like extend, but doesn't ever overwrite a key that already
  // exists in obj
  _.defaults = function(obj) {
  };


  /**
   * FUNCTIONS
   * =========
   *
   * Now we're getting into function decorators, which take in any function
   * and return out a new version of the function that works somewhat differently
   */

  // Return a function that can be called at most one time. Subsequent calls
  // should return the previously returned value.
  _.once = function(func) {
    // TIP: These variables are stored in a "closure scope" (worth researching),
    // so that they'll remain available to the newly-generated function every
    // time it's called.
    var alreadyCalled = false;
    var result;

    // TIP: We'll return a new function that delegates to the old one, but only
    // if it hasn't been called before.
    return function() {
      if (!alreadyCalled) {
        // TIP: .apply(this, arguments) is the standard way to pass on all of the
        // infromation from one function call to another.
        result = func.apply(this, arguments);
        alreadyCalled = true;
      }
      // The new function always returns the originally computed result.
      return result;
    };
  };

  // Memorize an expensive function's results by storing them.
  // memoize could be renamed to oncePerUniqueArgumentList; memoize does the
  // same thing as once, but based on many sets of unique arguments.
  //
  // _.memoize should return a function that, when called, will check if it has
  // already computed the result for the given argument and return that value
  // instead if possible.
  _.memoize = function(func) {
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  //
  // The arguments for the original function are passed after the wait
  // parameter. For example _.delay(someFunction, 500, 'a', 'b') will
  // call someFunction('a', 'b') after 500ms
  _.delay = function(func, wait) {
  };


  /**
   * COLLECTION OPERATIONS
   * ==============================
   */

  // Randomizes the order of an array's contents.
  //
  // TIP: This function's test suite will ask that you not modify the original
  // input array. For a tip on how to make a copy of an array, see:
  // http://mdn.io/Array.prototype.slice
  _.shuffle = function(array) {
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
