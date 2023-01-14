import {useRef, useState} from 'react';
import classes from "./MealItemForm.module.css";
import Input from "../../ui/Input";

const MealItemForm = props => {
    const inputRef = useRef();
    const [isAmountValid, setAmountIsValid] = useState(true);

    const submitHandler = event => {
        event.preventDefault();
        const amount = inputRef.current.value;
        const amountInNumber = +amount;

        if (amount.trim().length === 0 || amount < 1 || amount > 5) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(amountInNumber);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={inputRef}
                label="Amount" input={{
                id:"amount",
                type: "number",
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'
            }} />
            <button>+ Add</button>
            {!isAmountValid && <p>"Please Enter a Valid Amount 1 - 5"</p>}
        </form>
    );
}

export default MealItemForm;