import React, {useReducer} from "react";
import CartContext from "./cart-context";
import cart from "../components/cart/Cart";

const defaultCart = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, event) => {
    if (event.action === 'ADD_ITEM') {
        const updatedItems = state.items.concat(event.item);
        const updatedTotalAmount = state.totalAmount + event.item.price * event.item.amount;

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    else if (event.action === 'REMOVE_ITEM') {

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
