"use strict";

function registerTFGItemModifications(event) {

    event.modify('tfg:fish_roe', item => {
        item.foodProperties = food => {
            food.hunger(2).saturation(2)
        };
    });

};