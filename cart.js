document.addEventListener("DOMContentLoaded", function () {
    const cart = [];
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");

    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            total += item.price;
            const li = document.createElement("li");
            li.innerHTML = `${item.name} - $${item.price.toFixed(2)} 
                <button onclick="removeFromCart(${index})">Remove</button>`;
            cartItems.appendChild(li);
        });

        totalPrice.innerText = total.toFixed(2);
    }

    window.removeFromCart = function (index) {
        cart.splice(index, 1);
        updateCart();
    };

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const product = this.parentElement;
            const name = product.getAttribute("data-name");
            const price = parseFloat(product.getAttribute("data-price"));

            cart.push({ name, price });
            updateCart();
        });
    });

    document.getElementById("checkout-btn").addEventListener("click", function () {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        alert("Checkout Successful! (This is just a demo)");
        cart.length = 0; // Clear cart
        updateCart();
    });
});
