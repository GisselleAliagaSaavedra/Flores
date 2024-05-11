let productType = [
    {
        "name": "Ramos",
        "image": "./assets/images/ramo de rosas.webp",
    },
    {
        "name": "Canastos",
        "image": "./assets/images/canasto de lirios.webp",
    },
    {
        "name": "Flores",
        "image": "./assets/images/Pensamiento.webp",
    },
    {
        "name": "Árboles",
        "image": "./assets/images/arboles.png",
    },
    {
        "name": "Semillas",
        "image": "./assets/images/semillas.webp",
    },
    {
        "name": "Hierbas",
        "image": "./assets/images/romero.webp",
    }
];

const renderType = (productType) => {
    console.log('products type', productType);
    const productIndex = document.getElementById('product-index');
    if (productType && productType.length > 0) {
        productType.forEach(product => {
            const productsTypeHTML = `
                <div class="col">
                    <div class="card">
                        <img class="img-fluid" src="${product.image}" alt="Ramos" title="Ramos">
                        <div class="card-body">
                            <div class="d-flex justify-content-center">
                                <a class="btn-hover" href="ramos.html" role="button">${product.name}</a>
                            </div>
                        </div>
                    </div>
                </div>
            `
            productIndex.insertAdjacentHTML('beforeend', productsTypeHTML)
        });
    }
};

//fetchsProductsType()
renderType(productType);

