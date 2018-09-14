import React from 'react'


const burgerIngredient = (props) => {
    let ingredient = null
    switch (props.type) {
        case ('bread-bottom'):
            ingredient = <div className={class.BreadBottom}></div>
            break
        case ('bread-top'):
            ingredient = (
                <div className={class.BreadTop}></div>
                    <div className={class.Seeds1}></div>
                    <div className={class.Seeds2}></div>
                </div>
            )
            break
        case ('meat'):
            ingredient = <div className={class.Meat}></div>
            break
        case ('cheese'):
            ingredient = <div className={class.Cheese}></div>
            break
        case ('bacon'):
            ingredient = <div className={class.Bacon}></div>
            break
        case ('salad'):
            ingredient = <div className={class.Salad}></div>
            break
        default:
            ingredient = null
    }
    return ingredient
}

export default burgerIngredient
