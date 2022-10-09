import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
    const cartItems = [
        {
            id: "c1",
            name: "未來肉早午餐",
            amount: 2,
            price: 326,
        },
    ];
    const cartOrders = cartItems.map((v, i) => {
        return <li>{v.name}</li>;
    });

    return (
        <>
            <Modal onClose={props.onClose}>
                <div>
                    <ul className={classes["cart-items"]}>{cartOrders}</ul>
                    <div>
                        <span>總價格</span>
                        <span>$NT780</span>
                    </div>
                    <div className={classes.actions}>
                        <button
                            className={classes["button--alt"]}
                            onClick={() => {
                                props.onClose();
                            }}
                        >
                            關閉
                        </button>
                        <button className={classes.button}>結帳</button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Cart;
