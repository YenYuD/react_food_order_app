import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
    return (
        <>
            <li className={classes.meal}>
                <div>
                    <h3>{props.name}</h3>
                    <div className={classes.description}>
                        {props.description}
                    </div>
                    <div className={classes.price}>NT${props.price}</div>
                </div>
                <div>
                    <MealItemForm id={props.id} />
                </div>
            </li>
        </>
    );
};

export default MealItem;
