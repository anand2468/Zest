//navigate to the specific category
function navigateTo(category){
    document.getElementById(category).scrollIntoView({ behavior: "smooth" });
}


//code to display category
function displayCategory(parentId, items){
    const parent = document.getElementById(parentId);

    items.forEach(item=>{
        //creating required elements
        const menuItem = document.createElement('div');
        const img = document.createElement('img');
        const menuItemDetails = document.createElement('div');
        const itemName = document.createElement('p');
        const itemPrice = document.createElement('p');
        const addBtn = document.createElement('button')
        const addicon = document.createElement('img');
        item.imgUrl = `./assets/imgs/${parentId }/${item.name}.jpeg`

        //setting class names and other attributes
        menuItem.setAttribute('class', 'menu-item');
        img.setAttribute('src', item.imgUrl);
        img.setAttribute('alt', item.name)
        menuItemDetails.setAttribute('class','menu-item-details');
        itemName.setAttribute('class', 'menu-item-name');
        itemPrice.setAttribute('class', 'menu-item-price');
        addBtn.setAttribute('class', 'addbtn');
        addBtn.setAttribute('onclick', `addToCart('${JSON.stringify(item)}')`);
        addicon.setAttribute('class', 'addicon');
        addicon.setAttribute('src','./assets/icons/add.png');

        itemName.textContent = item.name;
        itemPrice.innerHTML = `&#8377; ${item.price}/-`;

        menuItemDetails.appendChild(itemName);
        menuItemDetails.appendChild(itemPrice);

        menuItem.appendChild(img);
        menuItem.appendChild(menuItemDetails);

        addBtn.appendChild(addicon);
        menuItem.appendChild(addBtn);
        parent.appendChild(menuItem);
    })
}



// display cart items
function loadCart(){
    const parent = document.getElementById('cart-items');
    parent.innerHTML = ''
    if (!localStorage.getItem('cartItems')){
        localStorage.setItem('cartItems', '[]');
    }
    const cart = JSON.parse(localStorage.getItem('cartItems'))
    // if (cart.length === 0){
    //     const msg = document.createElement('p');
    //     msg.innerHTML= "cart is emply....";
    //     msg.setAttribute('style','text-align:center; margin-bottom:50px;')
    //     parent.appendChild(msg);
    //     return;
    // }

    cart.forEach(item=>{
        //creating required elements
        const menuItem = document.createElement('div');
        const img = document.createElement('img');
        const menuItemDetails = document.createElement('div');
        const itemName = document.createElement('p');
        const itemPrice = document.createElement('p');

        //setting class names and other attributes
        menuItem.setAttribute('class', 'menu-item');
        img.setAttribute('src', item.imgUrl);
        img.setAttribute('alt', item.name)
        menuItemDetails.setAttribute('class','menu-item-details');
        itemName.setAttribute('class', 'menu-item-name');
        itemPrice.setAttribute('class', 'menu-item-price');

        itemName.textContent = item.name;
        itemPrice.innerHTML = `&#8377; ${item.price}/-`;

        menuItemDetails.appendChild(itemName);
        menuItemDetails.appendChild(itemPrice);

        menuItem.appendChild(img);
        menuItem.appendChild(menuItemDetails);
        parent.appendChild(menuItem);
    })
}


//function to add items to cart
function addToCart(itm){
    const item = JSON.parse(itm);
    const cart = JSON.parse(localStorage.getItem("cartItems"))
    cart.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cart));

    const parent = document.getElementById("cart-items");

    const menuItem = document.createElement('div');
    const img = document.createElement('img');
    const menuItemDetails = document.createElement('div');
    const itemName = document.createElement('p');
    const itemPrice = document.createElement('p');

    //setting class names and other attributes
    menuItem.setAttribute('class', 'menu-item');
    img.setAttribute('src', item.imgUrl);
    img.setAttribute('alt', item.name)
    menuItemDetails.setAttribute('class','menu-item-details');
    itemName.setAttribute('class', 'menu-item-name');
    itemPrice.setAttribute('class', 'menu-item-price');

    itemName.textContent = item.name;
    itemPrice.innerHTML = `&#8377; ${item.price}/-`;

    menuItemDetails.appendChild(itemName);
    menuItemDetails.appendChild(itemPrice);

    menuItem.appendChild(img);
    menuItem.appendChild(menuItemDetails);

    parent.appendChild(menuItem);
    
}

function clearCart(){
    localStorage.setItem('cartItems', '[]')
    loadCart()
}