const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);

  const weight = parseInt(document.querySelector("#weight").value);

  const results = document.querySelector("#results");

  if (height < 0 || height === "" || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight < 0 || weight === "" || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //Show the result
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      results.innerHTML += `<span> Under Weight</span>`;
    } else if (18.6 <= bmi && bmi <= 24.9) {
      results.innerHTML += `<span> Normal Range</span>`;
    } else {
      results.innerHTML += `<span> Over Weight</span>`;
    }
  }
});
