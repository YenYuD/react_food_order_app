import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
    {
        id: "m1",
        name: "未來肉早午餐",
        description: "素食者獲取蛋白質的優質選擇",
        price: 326,
    },
    {
        id: "m2",
        name: "炸豬排丼飯",
        description: "特選豬肉，滿滿肉汁",
        price: 360,
    },
    {
        id: "m3",
        name: "烤牛漢堡",
        description: "經典美式風味",
        price: 380,
    },
    {
        id: "m4",
        name: "輕瘦沙拉",
        description: "低脂又健康的好選擇",
        price: 240,
    },
];

const AvailableMeals = () => {
    const mealList = DUMMY_MEALS.map((v, i) => {
        return (
            <MealItem
                id={v.id}
                key={v.id}
                name={v.name}
                description={v.description}
                price={v.price}
            />
        );
    });

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
