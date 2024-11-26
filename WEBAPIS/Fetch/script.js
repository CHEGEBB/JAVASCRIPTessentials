// Define the URL to fetch data from
const apiUrl = "./data.json"; 

// Function to fetch and display products
async function fetchProducts() {
  try {
    // Fetch data from the API
    const response = await fetch(apiUrl);

    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON data
    const products = await response.json();

    // Select the container where products will be displayed
    const container = document.getElementById("products-container");

    // Clear any existing content
    // container.innerHTML = "";

    // Loop through the products and create HTML for each
    products.forEach(product => {
      // Create a product card
      const productDiv = document.createElement("div");
      productDiv.className = "product";

      // Populate the product card with data
      productDiv.innerHTML = `
        <img src="${product.image || 'https://via.placeholder.com/150'}" alt="${product.name}" />
        <h2 class="product-name">${product.name}</h2>
        <p class="product-price">$${product.price.toFixed(2)}</p>
      `;

      // Append the product card to the container
      container.appendChild(productDiv);
    });
  } catch (error) {
    console.error("Error fetching products:", error);

    // Display error message to the user
    const container = document.getElementById("products-container");
    container.innerHTML = "<p>Failed to load products. Please try again later.</p>";
  }
}

// Call the function to fetch and display products
fetchProducts();
