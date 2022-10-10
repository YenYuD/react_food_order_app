import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Carts/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/CartContext";

const HeaderCartButton = (props) => {
    const [btnAnimate, setBtnAnimate] = useState(false);

    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((num, item) => {
        return num + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${btnAnimate ? classes.bump : ""}`;

    useEffect(() => {
        if (cartCtx.items.length === 0) {
            return;
        }
        setBtnAnimate(true);

        const timer = setTimeout(() => {
            setBtnAnimate(false);
        }, 100);

        return () => {
            clearTimeout(timer);
        };
    }, [cartCtx.items]);

    return (
        <>
            <button
                onClick={() => {
                    props.onButtonShowCart();
                }}
                className={btnClasses}
            >
                <span className={classes.icon}>
                    <CartIcon />
                </span>
                <span>Your Cart</span>
                <span className={classes.badge}>{numberOfCartItems}</span>
            </button>
        </>
    );
};

export default HeaderCartButton;
