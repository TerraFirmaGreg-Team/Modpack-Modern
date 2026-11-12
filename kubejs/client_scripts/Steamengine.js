Ponder.registry((event) => {
    
    event.create("gtceu:bronze_wrench").scene("steam_engine","The Steam engine","tfg:steamengineponder",(scene, util) => {
                
        scene.showBasePlate();
        scene.world.showSection([0, 1, 0, 5, 2 ,1], Facing.DOWN);
        scene.world.showSection([0, 2, 0, 5, 2 ,5], Facing.DOWN);
        scene.idle(60);
        scene
            .text(120, "The Steam engine generates rotational power when steam is supplied", [3, 2.5, 3])
            .colored(PonderPalette.WHITE)
            
            .attachKeyFrame();
            
        scene.idle(150);
        scene
            .text(120, "To function, the engine must be connected to a flywheel and steam must be piped in", [1, 2.5, 3])
            .colored(PonderPalette.WHITE)
            
            .attachKeyFrame();
        scene.idle(150);
        
        scene
            .text(110, "To shut it off, input a redstone signal", [3, 2.5, 3])
            .colored(PonderPalette.WHITE)
            
            .attachKeyFrame();
        scene.world.showSection([3, 1, 3, 3, 1 ,2], Facing.WEST);
        scene.idle(190);
        
    });
});
