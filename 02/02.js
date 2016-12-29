function charCount() {
  var input = document.getElementById("input").value;

  document.getElementById("output").innerHTML = input ?
      '<p>' + input + ' has <span style="text-decoration: underline">' + input.length +
      '</span> characters.</p>' :
      'Please enter a value.';
}
