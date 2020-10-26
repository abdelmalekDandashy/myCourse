import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    return (
            
        <div className={classes.Burger}>
        <BurgerIngredient ingredientType="bread-top" />
        <BurgerIngredient ingredientType="Salad" />
        <BurgerIngredient ingredientType="meat" />
        <BurgerIngredient ingredientType="Cheese" />
        <BurgerIngredient ingredientType="meat" />
        <BurgerIngredient ingredientType="bread-bottom" />

        </div>
    );
};

export default Burger;