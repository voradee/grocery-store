// Dummy product data for demonstration
const products = [
  { id: 1, name: 'Apples', price: 2, image: 'apple.jpg' },
  { id: 2, name: 'Milk', price: 1.5, image: 'milk.jpg' },
];

// Store the cart in localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to load products
function loadProducts() {
    const productContainer = document.getElementById('products');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('item');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price} per unit</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productElement);
    });
}

// Function to add a product to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Function to update the cart count in the navigation
function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

// Load products and update cart count on page load
window.onload = () => {
    loadProducts();
    updateCartCount();
};
