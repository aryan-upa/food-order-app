import React, {useContext, useEffect, useState} from "react";
import CartIcon from "../cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = props => {
    const cart = useContext(CartContext);
    const [highlightButton, setHighlightButton] = useState(false);

    const {items} = cart;
    const numberOfItems = items.reduce((prev, item) => prev + item.amount, 0);
    const btnClasses = `${classes.button} ${highlightButton ? classes.bump : ""}`;

    useEffect(() => {
        if (items.length <= 0)
            return;

        if (cart.items.length > 0)
            setHighlightButton(true);

        const timer = setTimeout(() => {
            setHighlightButton(false);
        }, 300)

        return () => clearTimeout(timer);
    }, [items]);

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>{numberOfItems}</span>
        </button>
    );
}

export default HeaderCartButton;