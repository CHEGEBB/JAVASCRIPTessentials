const url = "./products.json";

async function getProducts() {
  // Get the container element once
  const productsAccessories = document.getElementById("accessories");

  try {
    // Fetch data from the JSON file
    const response = await fetch(url);

    // Check for response status
    if (!response.ok) {
      throw new Error(`The error status is: ${response.status}`);
    }

    // Parse JSON data
    const products = await response.json();
    console.log(products);

    // Clear any previous content in the container
    productsAccessories.innerHTML = "";

    // Loop through products and display them
    products.forEach(product => {
      const productDiv = document.createElement("div");
      productDiv.className = "accessories-products";

      productDiv.innerHTML = `
        <h2>${product.name}</h2>
        <p>Price: $${product.price.toFixed(2)}</p>
        <img src="${product.image}" alt="${product.name}">
        <p>${product.description}</p>
      `;

      // Append the new product div to the container
      productsAccessories.appendChild(productDiv);
    });
  } catch (error) {
    console.log("Error fetching data from JSON:", error);

    // Display an error message
    productsAccessories.innerHTML =
      "<p>Failed to load products. Please try again later.</p>";
  }
}

// Call the function
getProducts();
