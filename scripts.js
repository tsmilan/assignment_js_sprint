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

  loudSnakeCase: function(){
    // your code here
  },

  compareArrays: function(){
    // your code here (replace the return)
    return "Finish compareArrays first!"
  },

  fizzBuzz: function(){
    // your code here
  },

  myMap: function(){
    // your code here
  },

  primes: function(){
    // your code here
  },
}