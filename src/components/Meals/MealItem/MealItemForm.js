import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
    return (
        <>
            <form className={classes.form}>
                <Input
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
            </form>
        </>
    );
};

export default MealItemForm;
