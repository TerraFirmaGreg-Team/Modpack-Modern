"use strict";

ItemEvents.firstLeftClicked('gtceu:long_copper_rod', event => {
    let player = event.player;
    // let eyePos = player.getEyePosition().toBlockPos();
    let biome = event.getLevel().getBiome(player.blockPosition());

    event.player.sendSystemMessage("debug stick of dooooom!");
    // event.player.sendSystemMessage(event.player.getEyePosition())
    let currentWind = TFC.climate.getWindVector(player.level, player.blockPosition());

    let tags = Array(
        ResourceLocation.tryParse("tfg:has_light_sand_particles"),
        ResourceLocation.tryParse("tfg:has_medium_sand_particles"), 
        ResourceLocation.tryParse("tfg:has_dark_sand_particles")
    )
    // event.player.sendSystemMessage(`current biome tags are ${biome.getTagKeys().toString()}`);
    event.player.sendSystemMessage(biome.tags().map(tag => tag.location()).filter(element => tags.indexOf(element) > -1).toList());
    let text = `current wind vector is x: ${currentWind.x.toPrecision(2)} z: ${currentWind.y.toPrecision(2)}`;
    event.player.sendSystemMessage(text);
})