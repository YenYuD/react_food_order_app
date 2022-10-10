import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
    const amountInputRef = useRef();

    const [amountIsValid, setAmountIsValid] = useState(true);

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = +amountInputRef.current.value;

        if (enteredAmount === 0 || enteredAmount < 1 || enteredAmount > 9) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmount);
    };

    return (
        <>
            <form className={classes.form} onSubmit={submitHandler}>
                <Input
                    ref={amountInputRef}
                    label="數量"
                    input={{
                        id: "amount_" + props.id,
                        type: "number",
                        min: "1",
                        max: "9",
                        step: "1",
                        defaultValue: "1",
                    }}
                />
                <button>Add to cart</button>
                {!amountIsValid && <p>請輸入有效數量(1-9)</p>}
            </form>
        </>
    );
};

export default MealItemForm;
