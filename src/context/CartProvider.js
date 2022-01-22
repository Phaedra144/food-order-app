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
        let updatedItems = addAndUpdateItems(state.items, action.item);

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
            totalNrOfItems: updatedTotalNrOfItems
        };
    }

    if (action.type === 'REMOVE') {
        const existingCartItem = state.items.filter(item => item.id === action.id)[0];
        const updatedTotalAmount = state.totalAmount - existingCartItem.price;
        const updatedTotalNrOfItems = state.totalNrOfItems - 1;
        let updatedItems = removeAndUpdateItems(state.items, existingCartItem);

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
            totalNrOfItems: updatedTotalNrOfItems
        };
    }

    return defaultCartState;
};

const addAndUpdateItems = (cartItems, newItem) => {
    let updatedItems = [];

    const existingCartItemIndex = cartItems.findIndex(
        (item) => item.id === newItem.id
    );

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

const removeAndUpdateItems = (cartItems, removingCartItem) => {
    let updatedItems = [];

    const removingCartItemIndex = cartItems.findIndex(
        (item) => item.id === removingCartItem.id
    );

    console.log("Removing cart item: " + JSON.stringify(removingCartItem) +
     " and cart item index: " + removingCartItemIndex);

    if (removingCartItem.amount > 1) {
        const updatedItem = {
            ...removingCartItem,
            amount: removingCartItem.amount - 1
        };
        updatedItems = [...cartItems];
        updatedItems[removingCartItemIndex] = updatedItem;
    } else {
        updatedItems = [...cartItems];
        updatedItems.splice(removingCartItemIndex, 1);
    }

    return updatedItems;
};

export default CartProvider;
