const loadCategory = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((data) => displayCategory(data));
};
const displayCategory = (category) => {
  //   console.log(category);
  const parent = document.getElementById("category");
  category.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <h3>${item}</h3>
        `;
    parent.appendChild(div);
  });
};

const loadProducts = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => displayProducts(data));
};

const displayProducts = (products) => {
  const parent = document.getElementById("products");
  products.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
            <h5>${item.title.slice(0, 50)}</h5>
            <p class="fst-italic bg-success text-light w-50 ps-2">Rating: ${item.rating.rate}</p>
            <h2>${item.price}$</h2>
            <p class="btn btn-outline-dark btn-sm">${item.category}</p>
            <p class="fw-light">${item.description.slice(0, 100)}</p>
            <img src="${item.image}" alt="product image">
            <p></p>
        `;
    console.log(item);
    parent.appendChild(div);
  });
};
loadProducts();
loadCategory();
