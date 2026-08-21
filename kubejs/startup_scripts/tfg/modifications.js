"use strict";

function registerTFGItemModifications(event) {

    event.modify('tfg:fish_roe', item => {
        item.foodProperties = food => {
            food.hunger(2).saturation(2)
        };
    });

    event.modify('tfg:food/pickle_jar', item => {
        item.setCraftingRemainder('tfc:empty_jar')
    });
};