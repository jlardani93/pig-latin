$(document).ready(function() {

  $("#sentenceForm").submit(function(event) {

    event.preventDefault();

    var sentence = $("#sentence").val();
    var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    var pigLatin = '';
      vowels.forEach(function(vowel) {
        if (sentence[0] === vowel) {
          pigLatin = sentence + "way";
      };
      console.log(pigLatin);
    });

  });



});
