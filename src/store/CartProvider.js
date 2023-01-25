import React, {useReducer} from "react";
import CartContext from "./cart-context";

const defaultCart = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, event) => {
    if (event.action === 'ADD_ITEM') {
        const updatedTotalAmount = state.totalAmount + event.item.price * event.item.amount;

        const existingCartItemIndex = state.items.findIndex(item => item.id === event.item.id);
        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItem;
        let updatedItems;

        if (existingCartItem) {
            updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + event.item.amount
            };

            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(event.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    else if (event.action === 'REMOVE_ITEM') {
        const existingCartItemIndex = state.items.findIndex(item => item.id === event.id);
        const existingItem = state.items[existingCartItemIndex];

        const updatedTotalAmount = state.totalAmount - existingItem.price;

        let updatedItems;
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter((item) => item.id !== event.id);
        } else {
            let updatedItem = {...existingItem, amount: existingItem.amount - 1};
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    return defaultCart;
};

const CartProvider = props => {
    const [cartState, dispatchCart] = useReducer(cartReducer, {}, () => defaultCart);

    const addItemToCart = (item) => {
        dispatchCart({action: 'ADD_ITEM', item: item});
    };
    const removeItemFromCart = (id) => {
        dispatchCart({action: 'REMOVE_ITEM', id: id})
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;
