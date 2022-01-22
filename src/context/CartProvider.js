import { useReducer } from 'react';

import CartContext from './cart-context';

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item });
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        totalNrOfItems: cartState.totalNrOfItems,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

const defaultCartState = {
    items: [],
    totalAmount: 0,
    totalNrOfItems: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        const updatedTotalNrOfItems = parseInt(state.totalNrOfItems) + parseInt(action.item.amount);
        let updatedItems = updateItems(state.items, action.item);

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
            totalNrOfItems: updatedTotalNrOfItems
        };
    }
    return defaultCartState;
};

const updateItems = (cartItems, newItem) => {
    let updatedItems = [];
    console.log("New item: " + JSON.stringify(newItem));

    const existingCartItemIndex = cartItems.findIndex(
        (item) => item.id === newItem.id
    );
    console.log("ExistingCartItem Index: " + existingCartItemIndex);

    const existingCartItem = cartItems[existingCartItemIndex];

    if (existingCartItem) {
        const updatedItem = {
            ...existingCartItem,
            amount: parseInt(existingCartItem.amount) + parseInt(newItem.amount)
        };
        updatedItems = [...cartItems];
        updatedItems[existingCartItemIndex] = updatedItem;
    } else {
        updatedItems = cartItems.concat(newItem);
    }

    let everyItemsToPrint = '';
    updatedItems.forEach(element => {
        everyItemsToPrint = everyItemsToPrint + JSON.stringify(element);            
    });

    console.log("Every items: " + everyItemsToPrint);

    return updatedItems;
};

export default CartProvider;