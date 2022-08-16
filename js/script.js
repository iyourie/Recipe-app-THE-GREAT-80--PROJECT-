let inp = document.querySelector("input");
let search = document.querySelectorAll("span")[0];
let main = document.querySelector("main");
let img = document.querySelector("img");
let h1 = document.querySelector("h1");
let foodArea = document.querySelector("h6");
let ing = document.querySelectorAll("h3")[0];
let ingP = document.querySelectorAll("p")[0];
let rec = document.querySelectorAll("h3")[1];
let recP = document.querySelectorAll("p")[1];

search.onclick = () => {
    if (inp.value.length == 0) {
        alert("Write a meal name");
    } else {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inp.value}`)
            .then((r) => r.json())
            .then((data) => {
                console.log(data.meals[0]);
                h1.innerHTML = data.meals[0].strMeal;
                foodArea.innerHTML = `this is an ${data.meals[0].strArea} food`;
                img.src = data.meals[0].strMealThumb;
                img.classList.add("width");
                ing.style.display = "block";
                rec.style.display = "block";
                ingP.innerHTML =
                    data.meals[0].strIngredient1 +
                    " - " +
                    data.meals[0].strIngredient2 +
                    " - " +
                    data.meals[0].strIngredient3 +
                    " - " +
                    data.meals[0].strIngredient4 +
                    " - " +
                    data.meals[0].strIngredient5 +
                    " - " +
                    data.meals[0].strIngredient6 +
                    " - " +
                    data.meals[0].strIngredient7 +
                    " - " +
                    data.meals[0].strIngredient8 +
                    " - " +
                    data.meals[0].strIngredient9 +
                    " - " +
                    data.meals[0].strIngredient10 +
                    " - " +
                    data.meals[0].strIngredient11 +
                    " - " +
                    data.meals[0].strIngredient12 +
                    " - " +
                    data.meals[0].strIngredient13 +
                    " - " +
                    data.meals[0].strIngredient14;
                recP.innerHTML = data.meals[0].strInstructions;
            });
    }
};
