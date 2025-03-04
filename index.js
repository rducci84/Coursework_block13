// Complete the following functions to make our program work!

/**
 * Converts the given Fahrenheit temperature `f` to Celsius.
 * @param {number} f temperature in °F
 * @returns {number} temperature in °C
 */
function convertToCelsius(f) {
  // TODO
  // Formula: C = (F - 32) * 5 / 9 
  //Number.isNaN(f) ? 0 : (f - 32) * 5 / 9;
  // Return the result of the conversion
Celsius = ((f - 32) * 5 / 9)
CelsiusR = Celsius.toFixed(2)
return CelsiusR
}

/**
 * | Temperature | Description |
 * | ----------- | ----------- |
 * | < 32        | "very cold" |
 * | < 64        | "cold"      |
 * | < 86        | "warm"      |
 * | < 100       | "hot"       |
 * | >= 100      | "very hot"  |
 *
 * @param {number} f temperature in °F
 * @returns {string} the description from the table above corresponding to
 * the given Fahrenheit temperature `f`
 */
function describeTemperature(f) {
  // TODO
    if (f < 32) {
      console.log(`Temperature is ${f} Fahrenheit, equivalent to ${CelsiusR} Celsius. This is is very cold`)
      return "very cold"
    } else if (f < 64) {
      console.log(`Temperature is ${f} Fahrenheit, equivalent to ${CelsiusR} Celsius. This is is cold`)
      return "cold" 
    } else if (f < 86) {
      console.log(`Temperature is ${f} Fahrenheit, equivalent to ${CelsiusR} Celsius. This is is warm`)
      return "warm"
    } else if (f < 100) {
      console.log(`Temperature is ${f} Fahrenheit, equivalent to ${CelsiusR} Celsius. This is is hot`)
      return "hot"
    } else {
      console.log(`Temperature is ${f} Fahrenheit, equivalent to ${CelsiusR} Celsius. This is is very hot`)
      return "very hot"
    }
}

/**
 * @param {number} limit
 * @returns {number} a random integer in the range [0, `limit`)
 */
function getRandomInt(limit) {
  // TODO
  rnd = Math.floor(Math.random() * limit) + 1
  return rnd
}

// -------------------- DO NOT CHANGE THE CODE BELOW ---------------------- //
/**
 * Converts the given temperature from Fahrenheit to Celsius,
 * then alerts the user with a descriptive message.
 * @param {number} f temperature in °F
 */
function parseFahrenheit(f) {
  const c = convertToCelsius(f);
  const description = describeTemperature(f);
  const message = `${f}°F is ${c}°C. That is ${description}.`;
  alert(message);
}

const fahrenheitPrompt =
  "Please enter a number. We will convert that temperature from Fahrenheit to Celsius.";
let f = prompt(fahrenheitPrompt);
parseFahrenheit(+f);

alert("Let's try that again.");
f = prompt(fahrenheitPrompt);
parseFahrenheit(+f);

alert("Let's try some random temperatures.");
f = getRandomInt(110);
parseFahrenheit(f);

f = getRandomInt(110);
parseFahrenheit(f);
