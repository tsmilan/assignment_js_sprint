// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(array){
    // your code here
    var max = array[0];
    for (var i = 1; i <= array.length - 1; i++) {
      if(array[i] > max) {
         max = array[i];
      }
    }
    return max;
  },

  reversed: function(string){
    // your code here
    var str = "";
    for (var i = string.length - 1; i >= 0; i--) {
      str += string[i];
    }
    return str;
  },

  findInArray: function(index, array){
    for (var i = 0; i < array.length; i++) {
      if(index === array[i]) {
        return true;
      }
    }
  },

  titleCase: function(string) {
    string = string.toLowerCase().split(" ");
    for (var i = 0; i < string.length; i++) {
      string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
    }
    return string.join(" ");
  },

  trimExtraSpace: function(string) {
    return string.replace(/\s+/g, " ");
  },

  loudSnakeCase: function(string){
    // your code here
    var str = "";
    string = this.trimExtraSpace(string);
    string = this.titleCase(string);
    var arr = ['.','!',',','?'];
    for (var i = 0; i < string.length; i++) {
      if(this.findInArray(string[i], arr)) {
        continue;
      }
      str += string[i].replace(" ", "_");
    }
    return str;
  },

  compareArrays: function(array1, array2){
    // your code here (replace the return)
    for (var i = 0; i < array1.length; i++) {
      if(array1[i] !== array2[i])
        return false;
    }
    return true;
  },

  fizzBuzz: function(number){
    // your code here
    var array = [];

    for (var i = 1; i <= number; i++) {
      if(i % 15 === 0) {
        array.push("FIZZBUZZ");
      }
      else if(i % 5 === 0) {
        array.push("BUZZ");
      }
      else if(i % 3 === 0) {
        array.push("FIZZ");
      }
      else {
        array.push(i);
      }
    }
    return array;
  },

  myMap: function(){
    // your code here
  },

  primes: function(){
    // your code here
  },
}