let productsCanastos = [
    {
        "name": "Rosas rosadas",
        "price": 20000,
        "image": "./assets/images/canastos3.webp",
        "description": "Lorem ipsum dolor, sit amet, aluminum consectetur adipisicing elit. Quam magni amet, soluta animi iste impedit id illum accusantium quod atque minus, quas illo iusto sint mollitia facere cum, accusamus asperiores."
    },
    {
        "name": "Flores rosadas",
        "price": 18000,
        "image": "./assets/images/canastos2.webp",
        "description": "Lorem ipsum dolor, sit amet, aluminum consectetur adipisicing elit. Quam magni amet, soluta animi iste impedit id illum accusantium quod atque minus, quas illo iusto sint mollitia facere cum, accusamus asperiores."
    },
    {
        "name": "Rosas rojas y lirios amarillos",
        "price": 25000,
        "image": "./assets/images/canastos1.jpg",
        "description": "Lorem ipsum dolor, sit amet, aluminum consectetur adipisicing elit. Quam magni amet, soluta animi iste impedit id illum accusantium quod atque minus, quas illo iusto sint mollitia facere cum, accusamus asperiores."
    },
    {
        "name": "Rosas blancas",
        "price": 22000,
        "image": "./assets/images/canastos4.webp",
        "description": "Lorem ipsum dolor, sit amet, aluminum consectetur adipisicing elit. Quam magni amet, soluta animi iste impedit id illum accusantium quod atque minus, quas illo iusto sint mollitia facere cum, accusamus asperiores."
    },
    {
        "name": "Mini rosas amarillas",
        "price": 21000,
        "image": "./assets/images/canastos5.webp",
        "description": "Lorem ipsum dolor, sit amet, aluminum consectetur adipisicing elit. Quam magni amet, soluta animi iste impedit id illum accusantium quod atque minus, quas illo iusto sint mollitia facere cum, accusamus asperiores."
    },
    {"name": "Lirios blancos",
        "price": 26000,
        "image": "./assets/images/canasto de lirios.webp",
        "description": "Lorem ipsum dolor, sit amet, aluminum consectetur adipisicing elit. Quam magni amet, soluta animi iste impedit id illum accusantium quod atque minus, quas illo iusto sint mollitia facere cum, accusamus asperiores."
    },
];

const renderCanastos = (productsCanastos) => {
    const canastosContainer = document.getElementById('canastos-container');
    if(productsCanastos && productsCanastos.length > 0){
        productsCanastos.forEach(product => {
            const productsCanastosHTML = `
                <div class="col">
                    <div class="card">
                        <img class="img-fluid" src="${product.image}" alt=${product.name} title=${product.name}>
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">${product.description}</p>
                        </div>
                        <div class="d-flex justify-content-around mb-5">
                            <h3>${product.price}</h3>
                            <button data-name="${product.name}" data-price="${product.price} 
                                onclick="addToCart(this)" class="btn btn-primary">Agregar</button>
                        </div>
                    </div>
                </div>
            `
            canastosContainer.insertAdjacentHTML('beforeend', productsCanastosHTML);
        });
    }
};

//fetchsProductosCanastos
renderCanastos(productsCanastos);

