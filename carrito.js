let cart = [];

const addToCart = (button) => {
    const productName = button.dataset.name;
    const productPrice = button.dataset.price;

    const productIndex = cart.findIndex(product => product.name === productName);
    console.log('productIndex', productIndex)
    if (productIndex !== -1) {
        console.log('Ya existe +1')
        cart[productIndex].quantity += 1;
    } else {
        console.log('No existe lo agrego al carro')
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }

    console.log(cart);
}

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


// navigator.geolocation.getCurrentPosition(function (position) {
//     let latlng = new google.maps.LatLng(
//         position.coords.latitude,
//         position.coords.longitude,
//     );
//     let myOptions = {
//         zoom: 8,
//         center: latlng,
//         mapTypeId: google.maps.MapTypeId.TERRAIN,
//         disableDefaultUI: true,
//     };
//     let map = new google.maps.Map(
//         document.querySelector("#map_canvas"),
//         myOptions,
//     );
// });
