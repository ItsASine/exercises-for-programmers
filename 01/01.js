function solution01() {
  var name = document.getElementById("name-input").value;

  var message = function(name) {
    switch (name) {
      case 'Alice':
      case 'Bob':
      case 'Eve':
        return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
      default:
        return '<p>Hello, <span style="text-decoration: underline">' + name +
            '</span>, nice to meet you!</p>'
    }
  };

  document.getElementById("name-display").innerHTML = name ? message(name) : '';
}
