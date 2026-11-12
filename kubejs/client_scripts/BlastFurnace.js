
Ponder.registry((event) => {
    event.create("tfc:blast_furnace").scene("blastfurnace","Using the Blast furnace","tfg:blastfurnace",(scene, util) => {
                
        scene.showBasePlate();
        scene.scaleSceneView(1); 
        scene.world.showSection([3, 2, 3], Facing.DOWN)
        scene.idle(10);
        scene
            .text(100, "The blast furnace is a multiblock used to produce pig iron, which is vital in steelmaking", [3,4,3])
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(110);
        scene
            .text(90, "The blast furnace must be constructed with insulated firebricks", [3,4,3])
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(40);
        scene.world.showSection([4, 3, 2,2,3,4], Facing.DOWN)
        scene.scaleSceneView(0.8); 
        scene.idle(60);
        scene
            .showControls(30, [2, 5, 3], "left")
            .withItem("tfcbetterbf:insulation")
        scene.idle(40);
        scene.world.replaceBlocks([2,3,3],"tfcbetterbf:insulated_fire_bricks", true);
        scene.world.replaceBlocks([3,3,2],"tfcbetterbf:insulated_fire_bricks", true);
        scene.world.replaceBlocks([3,3,4],"tfcbetterbf:insulated_fire_bricks", true);
        scene.world.replaceBlocks([4,3,3],"tfcbetterbf:insulated_fire_bricks", true);
        scene.world.replaceBlocks([2,4,3,2,7,3],"tfcbetterbf:insulated_fire_bricks", false);
        scene.world.replaceBlocks([3,4,2,3,7,2],"tfcbetterbf:insulated_fire_bricks", false);
        scene.world.replaceBlocks([3,4,4,3,7,4],"tfcbetterbf:insulated_fire_bricks", false);
        scene.world.replaceBlocks([4,4,3,4,7,3],"tfcbetterbf:insulated_fire_bricks", false);
        scene.idle(50);
        scene
            .text(100, "Each layer can hold 4 iron-bearing items, 4 flux and 4 fuel", [3,4,3])
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(115)
        scene
            .text(90, "Up to a max of 5 layers and 20 items of each type", [3,4,3])
            .placeNearTarget()
            .attachKeyFrame();
        
        scene.idle(40);
        scene.world.showSection([4, 4, 2,2,4,4], Facing.DOWN)
        scene.idle(10);
        scene.world.showSection([4, 5, 2,2,5,4], Facing.DOWN)
        scene.idle(10);
        scene.world.showSection([4, 6, 2,2,6,4], Facing.DOWN)
        scene.idle(10);
        scene.world.showSection([4, 7, 2,2,7,4], Facing.DOWN)
        scene.idle(40);
        scene
            .text(90, "You must have equal parts of flux to iron", [3,7,3])
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(110);
        scene
            .text(90, "To insert items drop them down through the top of the blast furnace", [3,7,3])
            .placeNearTarget()
            .attachKeyFrame();
        const centerBlockPos = util.grid.at(3, 8, 3);
        const centerTop = util.vector.topOf(centerBlockPos);

        scene.idle(100);
        scene.world.createItemEntity(centerTop.add(0, 0.5, 0), util.vector.of(-0.01, 0, 0), "gtceu:hematite_dust");
        scene.idle(10);
        scene.world.createItemEntity(centerTop.add(0, 0.5, 0), util.vector.of(0.01, 0, 0), "tfc:powder/flux");
        scene.idle(10);
        scene.world.createItemEntity(centerTop.add(0, 0.5, 0), util.vector.of(0, 0, 0), "gtceu:coke_gem");
        scene.idle(20);
        scene.world.setBlock([3,7,3], "tfc:molten", false);
        scene.idle(30);
        scene
            .showControls(40, [3.5, 2.5, 3], "down")
            .withItem("minecraft:flint_and_steel")
        scene.idle(50);
        scene.world.modifyBlock([3,2,3],(curState) => curState.with("lit", "true"), false);
        scene.idle(40);
        scene
            .text(110, "If you use coke, you must use a bellows and tuyere", [3,2.5,3])
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(70);
        scene.world.setBlock([2,2,3], "tfc:bellows", true);
        scene.world.modifyBlock([2,2,3],(curState) => curState.with("facing", "east"), false);
        scene.world.showSection([2, 2, 3], Facing.NORTH);
        scene
            .showControls(70, [3.5, 2, 3], "up")
            .withItem("tfc:metal/tuyere/wrought_iron")
        scene.idle(80);
        scene
            .text(100, "If you decide to use anthracite, then it's not required", [3,2.5,3])
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(120);
        scene
            .text(115, "Once the contents get hot enough, they will melt into molten pig iron inside the blast furnace", [3,2.5,3])
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(130);
        scene
            .text(115, "The blast furnace will drip molten pig iron into any liquid container directly below it", [3,2.5,3])
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(45);
        scene.world.showSection([3, 1, 3], Facing.NORTH);
        scene.idle(80);
        scene
            .text(110, "The crucible is the simplest method of collection", [3,1.5,3])
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(130);
        scene.world.replaceBlocks([3,0,3],"tfc:charcoal_forge", false);
        scene.world.setBlock([2,1,3], "tfc:bellows", false)
        scene.world.modifyBlock([2,1,3],(curState) => curState.with("facing", "east"), false);
        scene.world.modifyBlock([3,0,3],(curState) => curState.with("lit", "true"), false);
        scene.world.showSection([2, 1, 3], Facing.NORTH);
        scene
            .text(110, "The molten pig iron will begin to cool inside the crucible, so you must remember to keep it hot", [3,1.5,3])
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(130)
        scene
            .text(110, "You can now cast your pig iron ingots and forge some refined steel!", [3,4,3])
            .colored(PonderPalette.BLUE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(90)
        });
});
