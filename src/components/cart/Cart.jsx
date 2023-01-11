import classes from "./Cart.module.css";
import Modal from "../ui/Modal";

const Cart = props => {
    const cartItems = <ul className={classes.cartItems}>{[{
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    }].map(meal => <li>{meal.name}</li>)}</ul>;

    return (
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes.buttonAlt}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
}

export default Cart;