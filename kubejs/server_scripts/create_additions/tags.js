// priority: 0
"use strict";

const registerCreateAdditionsItemTags = (event) => {
    event.add('c:hidden_from_recipe_viewers', "createaddition:creative_energy")
    event.add('c:hidden_from_recipe_viewers', "createaddition:copper_spool")
    event.add('c:hidden_from_recipe_viewers', "createaddition:festive_spool")
    event.add('c:hidden_from_recipe_viewers', "createaddition:small_light_connector")
}

const registerCreateAdditionsFluidTags = (event) => {
    
    // Добавляем тег для скрытия в EMI
    event.add('c:hidden_from_recipe_viewers', 'createaddition:seed_oil')
    event.removeAllTagsFrom('createaddition:seed_oil')
    event.add('c:hidden_from_recipe_viewers', 'createaddition:bioethanol')
    event.removeAllTagsFrom('createaddition:bioethanol')
}