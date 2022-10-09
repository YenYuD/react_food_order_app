import React, { useContext } from "react";
import CartIcon from "../Carts/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/CartContext";

const HeaderCartButton = (props) => {
    const CartCtx = useContext(CartContext);

    const numberOfCartItems = CartCtx.items.reduce((num, item) => {
        return num + item.amount;
    }, 0);

    return (
        <>
            <button
                onClick={() => {
                    props.onButtonShowCart();
                }}
                className={classes.button}
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
