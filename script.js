let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({name, price});
    total += price;

    document.getElementById("cart-count").innerText = cart.length;
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";

    cart.forEach(item => {
        let li = document.createElement("li");
        li.innerText = item.name + " - ₹" + item.price;
        cartList.appendChild(li);
    });

    document.getElementById("total").innerText = total;
}

/* SEARCH FUNCTION */
document.getElementById("search").addEventListener("keyup", function () {
    let value = this.value.toLowerCase();
    let products = document.querySelectorAll(".card");

    products.forEach(card => {
        let name = card.querySelector("h3").innerText.toLowerCase();
        card.style.display = name.includes(value) ? "block" : "none";
    });
});
