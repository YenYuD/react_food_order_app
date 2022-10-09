import React from "react";

import mealsImage from "../../assests/spencer-davis-dxTBgnHZ8ZE-unsplash.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>React food order app</h1>
                <HeaderCartButton onButtonShowCart={props.onShowModal} />
            </header>
            <div className={classes["main-image"]}>
                <img src={mealsImage} alt="foodImage" />
            </div>
        </>
    );
};

export default Header;
