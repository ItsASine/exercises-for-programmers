// Note: String Interpolation isn't a thing in ES5
// https://stackoverflow.com/questions/1408289/how-can-i-do-string-interpolation-in-javascript
function populateMadLibs() {
  var noun = document.getElementById("noun").value;
  var verb = document.getElementById("verb").value;
  var adjective = document.getElementById("adjective").value;
  var adverb = document.getElementById("adverb").value;

  if (noun && verb && adjective && adverb) {
    document.getElementById("output").innerHTML = '<p>' +
        'Do you ' +
        verb +
        ' your ' +
        adjective + ' ' + noun + ' ' + adverb +
        '? That\'s hilarious!' +
        '</p>';
  }
}
