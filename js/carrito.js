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


const showCart = () => {
    const cartStorage = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cartList');

    if (!cartContainer) {
        return
    }

    if (cartStorage && cartStorage.length > 0) {
        cartStorage.forEach(product => {
            const cartHTML = `  
                <div class="card">
                    <img class="img-fluid" src="${product.image}" alt="${product.name}" title="${product.name}">
                        <h5 class="card-title">${product.name}</h5>
                    <div class="card-body">
                        <h3>$${product.price * product.quantity}</h3>
                    <div class="btn-group" role="group">

                        <span class="badge rounded-pill">${product.quantity}</span>

                    </div>
                </div>
            `
            cartContainer.insertAdjacentHTML('beforeend', cartHTML);
        });
    }
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

const renderBill = (bills) => {
    const billsContainer = document.getElementById('bills-container');
    //pa que no se caiga
    if (!billsContainer) {
        return
    }
    bills.forEach(bill => {
        const billHTML = `
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="documentType" id="${bill.code}">
            <label class="form-check-label">${bill.name}</label>
        </div>
        `
        billsContainer.insertAdjacentHTML('beforeend', billHTML);
    });
};

renderBill(bills);