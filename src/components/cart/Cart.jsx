import CartContext from "../../store/cart-context";
import classes from "./Cart.module.css";
import Modal from "../ui/Modal";
import CartItem from "./CartItem";
import {useContext} from "react";

const Cart = props => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount: 1});
    };

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItems = <ul className={classes.cartItems}>
        {cartCtx.items.map(meal =>
                <CartItem
                    key={meal.id}
                    name={meal.name}
                    amount={meal.amount}
                    price={meal.price}
                    onAdd={cartItemAddHandler.bind(null, meal)}
                    onRemove={cartItemRemoveHandler.bind(null, meal.id)}
            />)}
    </ul>;

    return (
        <Modal hideModal={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes.buttonAlt} onClick={props.onHideCart}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
}

export default Cart;