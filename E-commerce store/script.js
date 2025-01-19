// Cart array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add to Cart function
function addToCart(product, price) {
  const existingProduct = cart.find(item => item.name === product);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ name: product, price, quantity: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart)); // Save to localStorage
  alert(`${product} added to the cart.`);
  updateCartDisplay();
}

// Update Cart Display on Cart Page
function updateCartDisplay() {
  const cartItemsElement = document.getElementById("cartItems");
  const cartTotalElement = document.getElementById("cartTotal");

  if (!cartItemsElement || !cartTotalElement) return; // Only update if on cart page

  cartItemsElement.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
    cartItemsElement.appendChild(li);
    total += item.price * item.quantity;
  });

  cartTotalElement.textContent = total.toFixed(2);
}

// Checkout Function
function checkout() {
  alert("Thank you for your purchase!");
  cart = [];
  localStorage.removeItem('cart');
  updateCartDisplay();
}

// Automatically update the cart on page load (Cart Page)
window.onload = () => {
  updateCartDisplay();
};
