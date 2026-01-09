// priority: 0
"use strict";

function registerTFCLunchBoxRecipes(event) {
    // Убираем оригинальные рецепты капсул
    // Remove original capsule recipes
    event.remove({ id: 'tfclunchbox:universal_capsule' })
    event.remove({ id: 'tfclunchbox:fill_capsule_with_ice' })
}