// Function to find second highest
function secondHighest(arr) {
  if (arr.length < 2) return -Infinity;

  let max = -Infinity;
  let secondMax = -Infinity;

  for (let num of arr) {
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax && num < max) {
      secondMax = num;
    }
  }

  return (secondMax === -Infinity) ? -Infinity : secondMax;
}

// Function to handle input and display result
function runTest() {
  const input = document.getElementById("inputArray").value;
  const arr = input.split(',').map(Number).filter(n => !isNaN(n));
  const result = secondHighest(arr);
  document.getElementById("result").innerText = "Second Highest: " + result;
}
