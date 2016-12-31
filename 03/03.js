function displayQuotes() {
  $.getJSON("03.json", function(data) {
    var html = '';

    data.quotes.forEach(function(quote) {
      html = html + ("<p>" + quote.person + " says, \"" + quote.phrase + "\"</p>");
    });

    document.getElementById("output").innerHTML = html ?
        html : 'No quotes to display :(';
  });
}