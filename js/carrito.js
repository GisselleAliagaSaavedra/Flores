let currentCart = [];

const addToCart = (button) => {
    const productName = button.dataset.name;
    const productPrice = button.dataset.price;
    const productImage = button.dataset.image;

    const cartStorage = JSON.parse(localStorage.getItem('cart')) || [];

    if (!cartStorage) {
        return
    }

    currentCart = cartStorage;

    const productIndex = currentCart.findIndex(product => product.name === productName);
    if (productIndex !== -1) {
        currentCart[productIndex].quantity += 1;
    } else {
        currentCart.push({ name: productName, price: productPrice, quantity: 1, image: productImage });
    }

    localStorage.setItem('cart', JSON.stringify(currentCart));
};



const showCart = async () => {
    const cartStorage = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cartList');

    if (!cartContainer) {
        return;
    }

    let totalPesos = 0;

    if (cartStorage && cartStorage.length > 0) {
        try {
            //api
            const response = await fetch("https://cl.dolarapi.com/v1/cotizaciones/usd");
            const data = await response.json();
            const dollarValue = data.compra;

            cartStorage.forEach(product => {
                const productTotalPesos = product.price * product.quantity;
                totalPesos += productTotalPesos;
                localStorage.setItem("totalPrice", totalPesos)

                const cartHTML = `  
                    <div class="card">
                        <img class="img-fluid" src="${product.image}" alt="${product.name}" title="${product.name}">
                        <h5 class="card-title">${product.name}</h5>
                        <div class="card-body">
                            <div class="priceContainer">
                                <h4>$${product.price * product.quantity}</h4>
                                <h4>${Math.round(product.price * product.quantity / dollarValue)} USD</h4>
                            </div>
                            <div class="btn-group" role="group">
                                <span class="badge rounded-pill">${product.quantity}</span>
                            </div>
                        </div>
                    </div>
                `;

                cartContainer.insertAdjacentHTML('beforeend', cartHTML);
            });
        } catch (error) {
            console.error("Error al obtener el valor del dólar:", error);
        }
    }

    const totalPrice = document.getElementById("totalPrice");
    const totalPriceStorage = localStorage.getItem("totalPrice");
    const totalHTML = `
        <div class="totalContainer">
            <h3>Total: $${Math.round(totalPriceStorage)}</h3>
        </div>
    `;
    totalPrice.insertAdjacentHTML('beforeend', totalHTML);
};


showCart();


//botones de mas arriba :3
//<button type="button" id="btnPlus" class="btn btn-primary">+</button>
//<button type="button" id="btnMinus" class="btn btn-primary mr-2">-</button>

//cuadro pago
const bills = [
    {
        "name": "Boleta",
        "code": 'bill1',
    },
    {
        "name": "Factura",
        "code": 'bill2',
    }
];

//me falta crear el container bills-container
//para que no salga el error de null en insertAdjacentHTML
//TODO:poner este codigo despues en el medio depago :3

//const renderBill = (bills) => {
//    const billsContainer = document.getElementById('bills-container');
//    //pa que no se caiga
//    if (!billsContainer) {
//        return
//    }
//    bills.forEach(bill => {
//        const billHTML = `
//        <div class="form-check form-check-inline">
//            <input class="form-check-input" type="radio" name="documentType" id="${bill.code}">
//            <label class="form-check-label">${bill.name}</label>
//        </div>
//        `
//        billsContainer.insertAdjacentHTML('beforeend', billHTML);
//    });
//};
//
//renderBill(bills);


