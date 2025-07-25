"use strict";

// Handles the quest for drinking water. The drinking water quest checks if the player has this stage.
ItemEvents.firstRightClicked(evt => {
    const FORGE_CAPS = "ForgeCaps";
    const TFC_PLAYERDATA = "tfc:player_data";
    const FOOD = "food";
    const THIRST = "thirst";
    const PREVIOUS_THIRST = "previous_thirst";
    const STAGE = "tfg.stages.quests.drank_fresh_water_with_hand";
    const {player, level} = evt;

    if (evt.target.block === null)
        return;
    
    //We reach for the "food" compound tag, that contains the tfc thirst.
    let forgecaps = player.nbt.getCompound(FORGE_CAPS);
    let tfc_playerdata = forgecaps.getCompound(TFC_PLAYERDATA);
    let food = tfc_playerdata.getCompound(FOOD);
    let thirstValue = food.getFloat(THIRST);

    //Do we already keep track of the previous thirst value? if not, put it and then return.
    let customData = getTFGPersistentDataRoot(player);
    let containsPreviousThirst = customData.contains(PREVIOUS_THIRST);
    if (!containsPreviousThirst) {
        customData.putFloat(PREVIOUS_THIRST, thirstValue);
        return;
    }
    
    let previousThirstValue = customData.getFloat(PREVIOUS_THIRST);

    //As long as our new thirst is greater than our previous, it means we hydrated ourselves. OFC we need to make sure the block clicked was potable.
    let blockID = evt.target.block.id;
    let isFreshWater = blockID === "minecraft:water" || blockID === "tfc:fluid/river_water";
    if (isFreshWater && thirstValue > previousThirstValue && !player.stages.has(STAGE)) {
        player.stages.add(STAGE);
    }
    //Put it back in.
    customData.putFloat(PREVIOUS_THIRST, thirstValue);
})