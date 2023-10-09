// Read the file with foods :
fetch("./mjinman_food.json")
.then(response => response.json())
.then(myFood => loadFoods(myFood));

// Read the file with drinks :
fetch("./mjinman_drinks.json")
.then(response => response.json())
.then(myDrinks => loadDrinks(myDrinks));


// Replace image and text per every one in HTML
function loadFoods(myFood) {
    var imgFood1 = document.getElementById("imgFood1"); // Avengers
    var imgFood2 = document.getElementById("imgFood2"); // The Last Airbender
    var imgFood3 = document.getElementById("imgFood3"); // The Iron Giant
    var imgFood4 = document.getElementById("imgFood4"); // Mulan
    var txtFood1 = document.getElementById("txtFood1"); // Avengers
    var txtFood2 = document.getElementById("txtFood2"); // The Last Airbender
    var txtFood3 = document.getElementById("txtFood3"); // The Iron Giant
    var txtFood4 = document.getElementById("txtFood4"); // Mulan

    for (var i = 0; i<myFood.food.length; i++){
        let name = myFood.food[i].name;
        let price = myFood.food[i].price;
        let url = myFood.food[i].url;
        let details = myFood.food[i].details;
        let imgFood = document.createElement("div");
        imgFood.innerHTML = `<img src=${url} class="card-img-top" alt="..."></img>`;
        let txtFood = document.createElement("p");
        txtFood.innerHTML = `<p class="card-text"> <strong>${name}</strong> <br> ${details} <br> <small class="text-body-secondary"> ${price} </small></p>`;
        if (myFood.food[i].name === "Deluxe Hamburger") {
            imgFood1.appendChild(imgFood);
            txtFood1.appendChild(txtFood);
            } else if (myFood.food[i].name === "Chicken Tenders") {
            imgFood2.appendChild(imgFood);
            txtFood2.appendChild(txtFood);
            } else if (myFood.food[i].name === "Hot Dog") {
            imgFood3.appendChild(imgFood);
            txtFood3.appendChild(txtFood);
            } else if (myFood.food[i].name === "World's Best French Fries") {
            imgFood4.appendChild(imgFood);
            txtFood4.appendChild(txtFood);
            }
     } // end of for
} // end of function

// Toggle Avengers button :
var toggleFoodButton = document.getElementById('toggleFoodButton');
var card1 = document.getElementById('foods');
var collapsableCard1 = new bootstrap.Collapse(card1, {toggle: false});
toggleFoodButton.addEventListener('click', function () {
    console.log('Button clicked');
collapsableCard1.toggle();
});





// Replace image and text per every one in HTML
function loadDrinks(myDrinks) {
    var imgDrink1 = document.getElementById("imgDrink1"); // Avengers
    var imgDrink2 = document.getElementById("imgDrink2"); // The Last Airbender
    var imgDrink3 = document.getElementById("imgDrink3"); // The Iron Giant
    var imgDrink4 = document.getElementById("imgDrink4"); // Mulan
    var txtDrink1 = document.getElementById("txtDrink1"); // Avengers
    var txtDrink2 = document.getElementById("txtDrink2"); // The Last Airbender
    var txtDrink3 = document.getElementById("txtDrink3"); // The Iron Giant
    var txtDrink4 = document.getElementById("txtDrink4"); // Mulan

    for (var i = 0; i< myDrinks.drinks.length; i++){
        let name = myDrinks.drinks[i].name;
        let price = myDrinks.drinks[i].price;
        let url = myDrinks.drinks[i].url;
        let details = myDrinks.drinks[i].details;
        let imgDrink = document.createElement("div");
        imgDrink.innerHTML = `<img src=${url} class="card-img-top" alt="..."></img>`;
        let txtDrink = document.createElement("p");
        txtDrink.innerHTML = `<p class="card-text"> <strong>${name}</strong> <br> ${details} <br> <small class="text-body-secondary"> ${price} </small></p>`;
        if (myDrinks.drinks[i].name === "Glass of Water") {
            imgDrink1.appendChild(imgDrink);
            txtDrink1.appendChild(txtDrink);
            } else if (myDrinks.drinks[i].name === "Classic Cola") {
            imgDrink2.appendChild(imgDrink);
            txtDrink2.appendChild(txtDrink);
            } else if (myDrinks.drinks[i].name === "Iced Tea") {
            imgDrink3.appendChild(imgDrink);
            txtDrink3.appendChild(txtDrink);
            } else if (myDrinks.drinks[i].name === "Lemonade") {
            imgDrink4.appendChild(imgDrink);
            txtDrink4.appendChild(txtDrink);
            }
     } // end of for
} // end of function

// Toggle Avengers button :
var toggleDrinksButton = document.getElementById('toggleDrinksButton');
var drinkCard = document.getElementById('drinks');
var collapsableDrinksCard = new bootstrap.Collapse(drinkCard, {toggle: false});
toggleDrinksButton.addEventListener('click', function () {
    console.log('Button clicked');
collapsableDrinksCard.toggle();
});