let productType = [
    {
        "name": "Ramos",
        "image": "../static/assets/images/ramo de rosas.webp",
    },
    {
        "name": "Canastos",
        "image": "../static/assets/images/canasto de lirios.webp",
    },
    {
        "name": "Flores",
        "image": "../static/assets/images/Pensamiento.webp",
    },
    {
        "name": "Árboles",
        "image": "../static/assets/images/arboles.png",
    },
    {
        "name": "Semillas",
        "image": "../static/assets/images/semillas.webp",
    },
    {
        "name": "Hierbas",
        "image": "../static/assets/images/romero.webp",
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

