// priority: 0
"use strict";

const registerAsticorCartsRecipes = (event) => {
    event.remove({ id: 'astikorcarts:animal_cart' })
    event.remove({ id: 'astikorcarts:supply_cart' })
    event.remove({ id: 'astikorcarts:plow' })
    event.remove({ id: 'astikorcarts:wheel' })
}