const registerFramedBlocksRecipes = (event) => {

    event.remove({id: 'framedblocks:framed_cube'})
    event.remove({id: 'framedblocks:framed_iron_door'})
    event.remove({id: 'framedblocks:framed_chest'})
    event.remove({id: 'framedblocks:framing_saw/framed_iron_door'})
    event.remove({id: 'framedblocks:framed_fence'})
    event.remove({id: 'framedblocks:framed_iron_trapdoor'})
    event.remove({id: 'framedblocks:framing_saw/framed_iron_trapdoor'})
    event.remove({id: 'framedblocks:framed_ladder'})
    event.remove({id: 'framedblocks:framing_saw'})


    //framed cube
    event.shaped('4x framedblocks:framed_cube', [
        'ABA',
        'B B',
        'ABA'
    ], {
        A: '#minecraft:planks',
        B: '#forge:rods/wooden'
    }).id('framedblocks:crafting/framed_cube')

    //iron door
    event.shaped('framedblocks:framed_iron_door', [
        'ABA'
    ], {
        A: '#forge:plates/steel',
        B: 'framedblocks:framed_door'
    }).id('framedblocks:crafting/framed_iron_door')

    //framed fence
    event.shaped('3x framedblocks:framed_fence', [
        'ABA',
        'ABA',
        
    ], {
        A: 'framedblocks:framed_cube',
        B: '#forge:rods/wooden'
    }).id('framedblocks:crafting/framed_fence')

    //framed fence gate 
    event.shaped('framedblocks:framed_fence_gate', [
        'ABA',
        'ABA',
        
    ], {
        B: 'framedblocks:framed_cube',
        A: '#forge:rods/wooden'
    }).id('framedblocks:crafting/framed_fence_gate')

    //framed_iron_trapdoor
    event.shapeless('framedblocks:framed_iron_trapdoor', [
        'framedblocks:framed_trapdoor',
        '#forge:plates/steel'
    ],).id('framedblocks:crafting/framed_iron_trapdoor')


    event.shaped('3x framedblocks:framed_ladder', [
        'A A',
        'ABA',
        'A A'
        
    ], {
        A: 'framedblocks:framed_cube',
        B: '#forge:rods/wooden'
    }).id('framedblocks:crafting/framed_ladder')

    event.shaped('framedblocks:framing_saw', [
        ' B ',
        'AAA',
        
    ], {
        A: 'framedblocks:framed_cube',
        B: '#forge:buzz_saw_heads/blue_steel'
    }).id('framedblocks:crafting/framing_saw')


    


}