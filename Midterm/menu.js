// Read the file with foods :
fetch("./mjinman_food.json")
.then(response => response.json())
.then(myFood => loadFoods(myFood));



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

// var toggleButton2 = document.getElementById('toggleCardButton2');
// var card2 = document.getElementById('card2');
// var collapsableCard2 = new bootstrap.Collapse(card2, {toggle: false});
// toggleButton2.addEventListener('click', function () {
// collapsableCard2.toggle();
// });

// var toggleButton3 = document.getElementById('toggleCardButton3');
// var card3 = document.getElementById('card3');
// var collapsableCard3 = new bootstrap.Collapse(card3, {toggle: false});
// toggleButton3.addEventListener('click', function () {
// collapsableCard3.toggle();
// });

// var toggleButton4 = document.getElementById('toggleCardButton4');
// var card4 = document.getElementById('card4');
// var collapsableCard4 = new bootstrap.Collapse(card4, {toggle: false});
// toggleButton4.addEventListener('click', function () {
// collapsableCard4.toggle();
// });
