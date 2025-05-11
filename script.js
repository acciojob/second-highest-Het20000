<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Second Highest Element</title>
</head>
<body>
  <h2>Second Highest Element Finder</h2>

  <label for="inputArray">Enter array (comma-separated):</label><br>
  <input type="text" id="inputArray" placeholder="e.g. 5,1,2,3,4" size="40">
  <br><br>

  <button onclick="runTest()">Find Second Highest</button>
  <p id="result"></p>

  <script>
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
  </script>
</body>
</html>
