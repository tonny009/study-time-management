// use local storage to manage cart data
const addToDb = (clickedtime, attribute) => {
    let brkTimelist = {};
    // add quantity
    const Time = clickedtime;
    brkTimelist[attribute] = clickedtime;
    const finalStringified = JSON.stringify(brkTimelist);
    localStorage.setItem('BreakTime', finalStringified);
}

const getStoredCart = () => {
    let shoppingCart = {};
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('BreakTime');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const removeFromDb = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    removeFromDb,
    deleteShoppingCart,
    getStoredCart
}