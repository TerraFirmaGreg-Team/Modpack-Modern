// This is all debug code! Uncomment it if you want to test stuff related to the mars sandstorms

/*"use strict";

const $Vec2 = Java.loadClass("net.minecraft.world.phys.Vec2")

ItemEvents.firstLeftClicked('gtceu:long_copper_rod', event => {
    let player = event.player;
    player.sendSystemMessage(event.getItem().getHoverName());
    let biome = event.getLevel().getBiome(player.blockPosition());

    let currentWind = TFC.climate.getWindVector(player.level, player.blockPosition());

    let tags = Array(
        ResourceLocation.tryParse("tfg:has_light_sand_particles"),
        ResourceLocation.tryParse("tfg:has_medium_sand_particles"), 
        ResourceLocation.tryParse("tfg:has_dark_sand_particles")
    )

    player.sendSystemMessage(biome.tags().map(tag => tag.location()).filter(element => tags.indexOf(element) > -1).toList());
    let text = `current wind vector is x: ${currentWind.x.toPrecision(2)} z: ${currentWind.y.toPrecision(2)}`;
    player.sendSystemMessage(text);
});

// scale wind up (down) on (crouch +) left click
ItemEvents.firstLeftClicked('gtceu:long_tin_rod', event => {
    const player = event.getPlayer();

    const climateManager = global.getMarsClimateController();
    const wind = climateManager.getWind();
    const windVec = new $Vec2(wind.x, wind.z);
    const increment = player.isCrouching() ? -0.1 : 0.1;
    
    player.sendSystemMessage(`current x: ${windVec.x.toFixed(1)}, z: ${windVec.y.toFixed(1)}`);

    let scaledVec = windVec.add(increment);
    let newX = 0.0;
    let newY = 0.0;

    // i can't modify windVec's properties without rhino throwing a shitfit so here have some extra variables
    newX = scaledVec.x;
    newY = scaledVec.y;
    
    if (scaledVec.lengthSquared() >= 1.0) {
        newX = scaledVec.normalized().scale(0.99).x;
        newY = scaledVec.normalized().scale(0.99).y;
    }
    newX = newX <= 0.1 ? 0.1 : newX;
    newY = newY <= 0.1 ? 0.1 : newY;
    
    climateManager.setWind({x: newX, z: newY});
    player.sendSystemMessage(`new x: ${newX.toFixed(1)}, z: ${newY.toFixed(1)}`);
});

ItemEvents.firstRightClicked('gtceu:long_tin_rod', event => {
    const player = event.getPlayer();

    const climateManager = global.getMarsClimateController();
    const wind = climateManager.getWind();
    const windVec = new $Vec2(wind.x, wind.z); 
    
    const initAngle = Math.atan2(windVec.y, windVec.x); // angle to x axis
    let increment = player.isCrouching() ? 15 : -15;
    increment = JavaMath.toRadians(increment)

    player.sendSystemMessage(`current angle: ${JavaMath.toDegrees(initAngle).toFixed(1)}`);

    let newX = (windVec.x * JavaMath.cos(increment)) - (windVec.y * JavaMath.sin(increment))
    let newY = (windVec.x * JavaMath.sin(increment)) + (windVec.y * JavaMath.cos(increment))

    player.sendSystemMessage(`new x: ${newX.toFixed(1)}, z: ${newY.toFixed(1)}`);

    climateManager.setWind({x: newX, z: newY});
    player.sendSystemMessage(`new angle: ${JavaMath.toDegrees(Math.atan2(newY, newX)).toFixed(1)}`);
});*/