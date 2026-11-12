Ponder.registry((event) => {
    event.create("tfc:bloomery").scene("bloomery","Using the Bloomery","kubejs:bloomeryponder",(scene, util) => {
        scene.showBasePlate();
        scene.scaleSceneView(1);
        scene.world.showSection([4,1,3,2,3,5], Facing.DOWN)
        scene.idle(30);
        scene
            .text(110, "The bloomery is a multiblock used for producing iron blooms", [3,2,3])
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(120);  
        scene
            .text(60, "The bloomery can have a minimum of 1 layer..", [3,2,3])
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(65);
        scene.world.showSection([2,4,3,4,4,5], Facing.DOWN)
        scene.idle(10);
        scene.world.showSection([2,5,3,4,5,5], Facing.DOWN)
        scene.idle(10);
        scene
            .text(60, "Up to a maximum of 3 layers!", [3,5,4])
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(70);
        scene
            .text(120, "The bloomery accepts 16 items per layer (8 charcoal and 8 Iron bearing items) up to a max of 48 items total", [3,5,4])
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(130);
        scene
            .text(135,"The Bloomery can be made out of almost any brick type", [2,5,4])
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(15);
        let Brick = "minecraft:deepslate_bricks";
        scene.world.setBlocks([3,1,3,3,1,4], Brick, true);
        scene.world.setBlocks([2,2,3,2,2,4], Brick, true);
        scene.world.setBlocks([4,2,3,4,2,4], Brick, true);
        scene.world.setBlocks([3,3,3,3,5,3], Brick, true);
        scene.world.setBlocks([2,3,4,2,5,4], Brick, true);
        scene.world.setBlocks([3,3,5,3,5,5], Brick, true);
        scene.world.setBlocks([4,3,4,4,5,4], Brick, true);
        scene.idle(30);
        Brick = "tfc:rock/bricks/granite";
        scene.world.setBlocks([3,1,3,3,1,4], Brick, true);
        scene.world.setBlocks([2,2,3,2,2,4], Brick, true);
        scene.world.setBlocks([4,2,3,4,2,4], Brick, true);
        scene.world.setBlocks([3,3,3,3,5,3], Brick, true);
        scene.world.setBlocks([2,3,4,2,5,4], Brick, true);
        scene.world.setBlocks([3,3,5,3,5,5], Brick, true);
        scene.world.setBlocks([4,3,4,4,5,4], Brick, true);
        scene.idle(30);
        Brick = "tfc:mud_bricks/loam";
        scene.world.setBlocks([3,1,3,3,1,4], Brick, true);
        scene.world.setBlocks([2,2,3,2,2,4], Brick, true);
        scene.world.setBlocks([4,2,3,4,2,4], Brick, true);
        scene.world.setBlocks([3,3,3,3,5,3], Brick, true);
        scene.world.setBlocks([2,3,4,2,5,4], Brick, true);
        scene.world.setBlocks([3,3,5,3,5,5], Brick, true);
        scene.world.setBlocks([4,3,4,4,5,4], Brick, true);
        scene.idle(30);
        Brick = "ad_astra:permafrost_bricks";
        scene.world.setBlocks([3,1,3,3,1,4], Brick, true);
        scene.world.setBlocks([2,2,3,2,2,4], Brick, true);
        scene.world.setBlocks([4,2,3,4,2,4], Brick, true);
        scene.world.setBlocks([3,3,3,3,5,3], Brick, true);
        scene.world.setBlocks([2,3,4,2,5,4], Brick, true);
        scene.world.setBlocks([3,3,5,3,5,5], Brick, true);
        scene.world.setBlocks([4,3,4,4,5,4], Brick, true);
        scene.idle(30);
        Brick = "tfc:rock/bricks/phyllite";
        scene.world.setBlocks([3,1,3,3,1,4], Brick, true);
        scene.world.setBlocks([2,2,3,2,2,4], Brick, true);
        scene.world.setBlocks([4,2,3,4,2,4], Brick, true);
        scene.world.setBlocks([3,3,3,3,5,3], Brick, true);
        scene.world.setBlocks([2,3,4,2,5,4], Brick, true);
        scene.world.setBlocks([3,3,5,3,5,5], Brick, true);
        scene.world.setBlocks([4,3,4,4,5,4], Brick, true);
        scene.idle(40);
        scene
            .text(125,"drop the required ratio of iron to charcoal into it (25 ore dust and 22 charcoal is recommended)", [3,5,4])
            .placeNearTarget()
            .attachKeyFrame();
        const centerBlockPos = util.grid.at(3, 5.5, 4);
        const centerTop = util.vector.topOf(centerBlockPos);

        scene.idle(135);
        scene.world.createItemEntity(centerTop.add(0, 0.5, 0), util.vector.of(-0.01, 0, 0), "gtceu:hematite_dust");
        scene.idle(10);
        scene.world.createItemEntity(centerTop.add(0, 0.5, 0), util.vector.of(0, 0, 0), "minecraft:charcoal");
        scene.idle(20);
        scene.world.setBlock([3,5,4], "tfc:molten", false);
        scene.world.modifyBlock([3,5,4],(curState) => curState.with("layers", "7"), false);
        scene.idle(30);
        scene
            .showControls(40, [3.5, 2.5, 3], "down")
            .withItem("minecraft:flint_and_steel")
        scene.idle(50);
        scene.world.modifyBlock([3,2,3],(curState) => curState.with("lit", "true"), false);
        scene.idle(80);
        scene.world.setBlock([3,5,4], "minecraft:air", false);
        scene
            .text(85,"After some time, the bloomery will stop burning and you may now collect the blooms", [3.5,2.5,3])
            .placeNearTarget()
            .attachKeyFrame();
        scene.world.modifyBlock([3,2,3],(curState) => curState.with("lit", "false"), false);
        scene.idle(95);
        scene.world.setBlock([3,2,4], "tfc:bloom", false);
        scene
            .showControls(30, [3.5, 2.5, 3], "down")
            .rightClick()
            scene.idle(35);
        scene.world.modifyBlock([3,2,4],(curState) => curState.with("layers", "8"), false);
        scene.world.modifyBlock([3,2,3],(curState) => curState.with("open", "true"), false);
       
        scene.idle(40);
    });
});