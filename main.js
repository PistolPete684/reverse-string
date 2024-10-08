function reverseWords(str){
  //Split the string into an array, reverse the array, and join the array back into a string
  var newStr = str.split(" ").reverse().join(' ');
  return newStr; 
}