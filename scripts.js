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