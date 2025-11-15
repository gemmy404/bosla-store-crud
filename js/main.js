let form = document.querySelector("form");
let productContainer = document.querySelector("#products .container");
let submitButton = document.querySelector(".submit-btn");

function createProduct(div, product) {
    div.setAttribute("product-id", product.id);

    if (!product.image) {
        product.image = "";
    }
    div.innerHTML = `
        <img src= images/${product.image} alt="" />
        <div class="content">
            <h3 id="product-name">${product.name}</h3>
            <p id="description">${product.description}</p>
            <p id="category">${product.category}</p>
        </div>
        <div class="info">
            <a href="#" id="product-price">${product.price} $</a>
            <i class="fas fa-long-arrow-alt-right"></i>
        </div>

        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
    `;
    div.classList.add("box");
    return div;
}

let products = JSON.parse(localStorage.getItem("products")) || [];

products.forEach((product) => {
    let box = createProduct(document.createElement("div"), product);
    productContainer.appendChild(box);
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let productRequest = {};
    if (products.length > 0) productRequest.id = products[products.length - 1].id + 1;
    else productRequest.id = 1;

    productRequest.name = document.querySelector("#productName").value;
    productRequest.description = document.querySelector("#productDescription").value;
    productRequest.price = document.querySelector("#price").value;
    productRequest.category = document.querySelector("#productCategory").value;
    productRequest.image = document.querySelector("#productImage").value.split("\\")[2];

    console.log("Created product:", productRequest);

    products.push(productRequest);

    let box = createProduct(document.createElement("div"), productRequest);
    productContainer.appendChild(box);

    localStorage.setItem("products", JSON.stringify(products));

    form.reset();
});

productContainer.addEventListener("click", (event) => {
    // event.preventDefault();
    if (event.target.classList.contains("edit")) {
        let target = event.target.closest("div");
        let productId = +target.getAttribute("product-id");
        let index;
        let savedProduct = products.find((product, idx) => {
            if (product.id === productId) {
                index = idx;
                return product;
            }
        });

        document.querySelector("#productName").value = savedProduct.name;
        document.querySelector("#price").value = savedProduct.price;
        document.querySelector("#productDescription").value = savedProduct.description;
        document.querySelector("#productCategory").value = savedProduct.category;

        submitButton.style.display = "none";

        let updateButton = document.createElement("button");
        updateButton.textContent = "Update";
        updateButton.classList.add("update-btn");
        form.appendChild(updateButton);

        updateButton.addEventListener("click", (e) => {
            e.preventDefault();

            savedProduct.name = document.querySelector("#productName").value;
            savedProduct.price = document.querySelector("#price").value;
            savedProduct.description = document.querySelector("#productDescription").value;
            savedProduct.category = document.querySelector("#productCategory").value;
            savedProduct.image =
                document.querySelector("#productImage").value.split("\\")[2] || savedProduct.image;

            console.log(savedProduct);

            products[index] = savedProduct;
            localStorage.setItem("products", JSON.stringify(products));

            createProduct(target, savedProduct);
            updateButton.remove();
            submitButton.style.display = "block";
            form.reset();
        });
    } else if (event.target.classList.contains("delete")) {
        let target = event.target.closest("div");
        let productId = +target.getAttribute("product-id");
        products = JSON.parse(localStorage.getItem("products"));
        products = products.filter((product) => product.id !== productId);
        localStorage.setItem("products", JSON.stringify(products));
        target.remove();
    }
});
