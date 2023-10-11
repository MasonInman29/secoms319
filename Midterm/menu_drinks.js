// // Read the file with foods :
// fetch("./mjinman_drinks.json")
// .then(response => response.json())
// .then(myDrinks => loadFoods(myDrinks));



// // Replace image and text per every one in HTML
// function loadDrinks(myDrinks) {
//     var imgDrink1 = document.getElementById("imgDrink1"); // Avengers
//     var imgDrink2 = document.getElementById("imgDrink2"); // The Last Airbender
//     var imgDrink3 = document.getElementById("imgDrink3"); // The Iron Giant
//     var imgDrink4 = document.getElementById("imgDrink4"); // Mulan
//     var txtDrink1 = document.getElementById("txtDrink1"); // Avengers
//     var txtDrink2 = document.getElementById("txtDrink2"); // The Last Airbender
//     var txtDrink3 = document.getElementById("txtDrink3"); // The Iron Giant
//     var txtDrink4 = document.getElementById("txtDrink4"); // Mulan

//     for (var i = 0; i<myDrinks.drinks.length; i++){
//         let name = myDrinks.drinks[i].name;
//         let price = myDrinks.drinks[i].price;
//         let url = myDrinks.drinks[i].url;
//         let details = myDrinks.drinks[i].details;
//         let imgDrink = document.createElement("div");
//         imgDrink.innerHTML = `<img src=${url} class="card-img-top" alt="..."></img>`;
//         let txtDrink = document.createElement("p");
//         txtDrink.innerHTML = `<p class="card-text"> <strong>${name}</strong> <br> ${details} <br> <small class="text-body-secondary"> ${price} </small></p>`;
//         if (myDrinks.food[i].name === "Glass of Water") {
//             imgDrink1.appendChild(imgDrink);
//             txtDrink1.appendChild(txtDrink);
//             } else if (myDrinks.drinks[i].name === "Classic Cola") {
//             imgDrink2.appendChild(imgDrink);
//             txtDrink2.appendChild(txtDrink);
//             } else if (myDrinks.drinks[i].name === "Iced Tea") {
//             imgDrink3.appendChild(imgDrink);
//             txtDrink3.appendChild(txtDrink);
//             } else if (myDrinks.drinks[i].name === "Lemonade") {
//             imgDrink4.appendChild(imgDrink);
//             txtDrink4.appendChild(txtDrink);
//             }
//      } // end of for
// } // end of function

// // Toggle Avengers button :
// var toggleDrinkksButton = document.getElementById('toggleDrinksButton');
// var card1 = document.getElementById('drinks');
// var collapsableCard1 = new bootstrap.Collapse(card1, {toggle: false});
// toggleFoodButton.addEventListener('click', function () {
//     console.log('Button clicked');
// collapsableCard1.toggle();
// });