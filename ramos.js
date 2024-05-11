let products = [
    {
        "name": "Ramo de rosas rojas",
        "price": 25000,
        "image": "./assets/images/ramo de rosas.webp",
        "description": "Lorem ipsum dolor, sit amet, aluminum consectetur adipisicing elit. Quam magni amet, soluta animi iste impedit id illum accusantium quod atque minus, quas illo iusto sint mollitia facere cum, accusamus asperiores."
    },
    {
        "name": "Ramo de rosas rosadas",
        "price": 18000,
        "image": "./assets/images/6.png",
        "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, praesentium? Temporibus quod ullam dolorum quibusdam, ipsum excepturi nobis eius eum. Officiis ad quibusdam cum atque culpa sequi illo in amet."
    },
    {
        "name": "Ramo de tulipanes",
        "price": 20000,
        "image": "./assets/images/TULIPS.webp",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, minima aspernatur quidem veritatis dolor omnis nam odio architecto necessitatibus ipsum optio laborum, eligendi a, nostrum cum repudiandae quod itaque magni!"
    },
    {
        "name": "Ramo de lirios amarillos",
        "price": 12000,
        "image": "./assets/images/LIRIOS RAMO.png",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum architecto impedit commodi sequi perferendis fuga facilis, eum natus tempore neque eligendi inventore nam optio exercitationem. Quas velit maxime autem repellat."
    },
    {
        "name": "Ramo de flores",
        "price": 15000,
        "image": "./assets/images/ramo-variado-margaritas-y-tulipanes.webp",
        "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe magni a itaque fugit explicabo sit. Saepe id vero, fugit laudantium blanditiis assumenda atque, officia dignissimos explicabo commodi tempore rem quo."
    },
    {
        "name": "Ramo de flores rojas y amarillas",
        "price": 20000,
        "image": "./assets/images/Gerberas.jpg",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores at perspiciatis nemo molestiae nisi provident natus voluptas. Delectus laborum quam quos excepturi, corrupti veritatis ipsum rem dolor est labore aliquid!"
    }
];

// async function fetchProducts() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/photos');
//     const json = await response.json();
//     renderBouquet(json)
// }


const renderBouquet = (products) => {
    console.log('products render', products)
    const productContainer = document.getElementById('product-container');
    if (products && products.length > 0) {
        products.forEach(product => {
            //     const productHTML = `
            //     <div class="col">
            //         <div class="card">
            //             <img class="img-fluid" src="${product.url}" alt="${product.title}" title="${product.title}">
            //             <div class="card-body">
            //             <h5 class="card-title">${product.title}</h5>
            //             <p class="card-text">${product.thumbnailUrl}</p>
            //             </div>
            //             <div class="d-flex justify-content-around mb-5">
            //             <h3>$${product.id}</h3>
            //             <button data-name="${product.title}" data-price="${product.id}"
            //             onclick="addToCart(this)" class="btn btn-primary">Agregar</button>
            //             </div>
            //         </div>
            //     </div>
            // `;
            const productHTML = `
                <div class="col">
                    <div class="card">
                        <img class="img-fluid" src="${product.image}" alt="${product.name}" title="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">${product.description}</p>
                        </div>
                        <div class="d-flex justify-content-around mb-5">
                            <h3>$${product.price}</h3>
                            <button data-name="${product.name}" data-price="${product.price}"
                                onclick="addToCart(this)" class="btn btn-primary">Agregar</button>
                        </div>
                    </div>
                </div>
            `
            productContainer.insertAdjacentHTML('beforeend', productHTML);
        });
    }
};

// fetchProducts();
renderBouquet(products);


