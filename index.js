const calcius = document.querySelector("#calcius");
const fahrenheit = document.querySelector("#fahrenheit");
const kelvin = document.querySelector("#kelvin");
console.log(calcius,fahrenheit,kelvin);

//calcius to fahrenheit = (0deg C x 9/5) + 32 = 32 deg F
//calcius to kelvin = 0 deg C + 273.15 = 273.15K

calcius.addEventListener("input", () => {
    let c = parseFloat(calcius.value);
    let f = (c*9/5)+32;
    let k = c + 273.15; 
    fahrenheit.value = f;
    kelvin.value = k;
})

//fahe to calcius = (32 deg F - 32) x 5/9 = 0 deg C
//fah to kelvin = (32 deg F) x 5/9 +273.15 = 27.15K
fahrenheit.addEventListener("input", () => {
    let f = parseFloat(fahrenheit.value);
    let c = (f - 32) * 5/9;
    let k = (f - 32) * 5/9 + 27.15;
    calcius.value = c;
    kelvin.value = k;
})

//kelvin to calcius = 0k - 273.15 = -273.1 deg C
//kelvin to fahrenheit = (0k - 273.15) x 9/5 + 32 = -459.7 deg F
kelvin.addEventListener("input", () => {
    let k = parseFloat(kelvin.value);
    let c = k - 273.15;
    let f = (k - 273.15) * 9/5 + 32;
    calcius.value = c;
    fahrenheit.value = f;
})