
/*
Step 2: Getting into promises
Rewrite the following code (using promise and other control flow tools/features):
Still figuring out how to do this part :| 
*/

//Step 3: Shopping cart using factory functions

//Part 1
let outputContainer = document.getElementById('container');

function createProduct(name, price) {
    return {
        name: name,
        price: price
        ,
        // Part 3: a method that can change the name of the product using the this keyword
        changeProductName: function (newName) {
            this.name = newName;
            return name;
        }
    }
}


function createShoppingCart(products) {
    return {
        addProduct: function (product) {
            products.push(product);
        },
        removeProduct: function (product) {
            let index = products.indexOf(product);
            products.splice(index, 1);
            return products;
        },
        getTotal: function () {
            let totalPrice = products.filter(product => product.price)
                .reduce((accumulator, product) => accumulator + product.price, 0);
            return totalPrice;
        },
        renderProducts: function () {
            output = '';
            products.forEach(product => {
                output += `<ul><li><img src='images/${product.name}.png' alt='${product.name} pic'><br><b>${product.name}</b><br>${product.price} kr </li></ul>`;
            })
            outputContainer.innerHTML = output;
        },
        getUser: function () {
            return fetch('https://jsonplaceholder.typicode.com/users/1')
                .then((res) => res.json())
        },
        getAllProducts: function () {
            return products;
        }
    }
}


function addItemButton() {
    let name = document.getElementsByClassName('name')[0].value;
    let price = document.getElementsByClassName('price')[0].value;
    let price1 = parseInt(price);
    shoppingCart.addProduct(createProduct(name, price1));
    shoppingCart.renderProducts();
    console.log(shoppingCart.getTotal());
}

//Part2
function showShoppingInfo() {
    shoppingCart.getUser()
        .then((users) => {
            let info = `<h2 class="purchases">Summary of Purchase:</h2><br>
                    <h4 class="username shop-summary"> Username: <b>${users.username}</b></h4>
                    <h5 class="number-items shop-summary">Number of item(s) in the cart: <b> ${shoppingCart.getAllProducts().length}</b> </h5>
                    <h4 class="total-price shop-summary"> Total Price: <u>${shoppingCart.getTotal()} kr </u> </h4>
                    <input type="button" class="btn update-btn" value="Update Cart" onclick="showShoppingInfo()"> `
            document.getElementById('user-info').innerHTML = info;
        })
}

const flatscreen = createProduct('Flat-screen', 5000);
const lamp = createProduct('Lamp', 800);
const shoppingCart = createShoppingCart([flatscreen, lamp]);
shoppingCart.addProduct(createProduct('Table', 2500));
shoppingCart.addProduct(createProduct('Chair', 800));
//shoppingCart.removeProduct(lamp);
shoppingCart.getUser();
shoppingCart.addProduct(createProduct('Pillow', 150));
flatscreen.changeProductName('TV');
console.log(shoppingCart.getTotal());
console.log(shoppingCart.getAllProducts());
shoppingCart.renderProducts();

showShoppingInfo();