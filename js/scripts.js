$(document).ready(function() {

  $("#sentenceForm").submit(function(event) {

    event.preventDefault();

    //initializes variables
    var sentence = $("#sentence").val();
    var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    var pigLatin = '';
    var isVowel = false;
    var numCons = 1;
    var isCons = true;

    //determine if word starts with vowel. If it does, return Pig Latin
    vowels.forEach(function(vowel) {
        if (sentence[0] === vowel) {
          pigLatin = sentence + "way";
          isVowel = true;
      };
      console.log(pigLatin);
    });

    //if word does not start with vowel, count consonants up to first vowel
    if (isVowel === false) {
      for (var i = 1; isCons === true; i++) {
        vowels.forEach(function(vowel) {
          if (sentence[i] === vowel) {
            isCons = false;
          } //else
        });
        if (isCons === true) {
          numCons = numCons + 1;
        };
      };
        console.log(isCons);
        console.log(numCons);

    };

    //Split word into two parts (first part up to first vowel, second part is rest of word)
    //then create new Pig Latin word (back of word + front of word + ay)
    if (isVowel === false) {
      var front = sentence.slice(0, numCons);
      var back = sentence.slice(numCons, sentence.length);
      var newWord = back + front + "ay";
      $("#response").text("Your word translated into pig lat in is: " + newWord + ".");
    };

  });
});
