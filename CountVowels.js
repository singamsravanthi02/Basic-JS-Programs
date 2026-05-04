const countVowels = function(str1) {
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    let ch = str1[i].toLowerCase();
    if (ch === "a"||ch === "e"||ch === "i"||ch === "o"||ch === "u") {
      count++;
    }
  }
  return count;
};

console.log(countVowels("apple"));
