var processInputs = function(inputs) {
  var processed = [];
  var error = '';
  var number = 0;

  inputs.forEach(function(string, index) {
    number = +string;

    if(typeof number !== 'number') {
      error = 'Please enter both numbers.';
    } else if (number <= 0) {
      error = 'Please enter positive numbers.';
    } else {
      processed[index] = number;
    }
  });

  return error ? error : processed;
};

var outputAdd = function(inputs) {
  return inputs[0] + ' + ' + inputs[1] + ' = ' + (inputs[0] + inputs[1]);
};

var outputSubtract = function(inputs) {
  return inputs[0] + ' - ' + inputs[1] + ' = ' + (inputs[0] - inputs[1]);
};

var outputMultiply = function(inputs) {
  return inputs[0] + ' * ' + inputs[1] + ' = ' + (inputs[0] * inputs[1]);
};

var outputDivide = function(inputs) {
  return inputs[0] + ' / ' + inputs[1] + ' = ' + (inputs[0] / inputs[1]);
};

function calculateMath() {
  var input1 = document.getElementById("input1").value;
  var input2 = document.getElementById("input2").value;
  var inputs = processInputs([input1, input2]);
  var output = typeof inputs == 'string' ? inputs :
      outputAdd(inputs) + '<br />' +
      outputSubtract(inputs) + '<br />' +
      outputMultiply(inputs) + '<br />' +
      outputDivide(inputs);

  document.getElementById("output").innerHTML = '<p>' + output + '</p>';
}
