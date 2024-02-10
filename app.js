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
    const parent = document.getElementById("products")
    products.forEach(item => {
        const div = document.createElement("div")
        div.classList.add("product")
        div.innerHTML = `
            <h3>${item.title.slice(0,50)}</h3>
            <h4>${item.price}</h4>
            <p class="btn btn-danger">${item.category}</p>
            <p>${item.description.slice(0,100)}</p>
            <img src="${item.image}" alt="product image">
            <p></p>
        `
        console.log(item);
        parent.appendChild(div)
    })
}
loadProducts();
loadCategory();
