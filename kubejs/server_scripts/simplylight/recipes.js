// priority: 0

const registerSimplyLightRecipes = (event) => {
    
    // remove old recipes
    event.remove({ id: 'simplylight:illuminant_slab' })
    event.remove({ id: 'simplylight:walllamp' })
    event.remove({ id: 'simplylight:rodlamp' })
    event.remove({ id: 'simplylight:bulb' })
    event.remove({ id: 'simplylight:edge_light' })
    event.remove({ id: 'simplylight:lamp_post' })
    event.remove({ id: 'simplylight:illuminant_block_on' })
    event.remove({ id: 'simplylight:illuminant_block' })

    // new recipes
    event.shaped('6x simplylight:illuminant_slab', [
        'AAA',
        'BBB',
        '   '  
    ], {
        A: '#forge:dusts/glowstone',
        B: '#forge:foils/tin'
    }).id('tfg:simplylight/illuminant_slab')

    event.shaped('4x simplylight:wall_lamp', [
        'BB ',
        'BA ',
        'BA '  
    ], {
        A: '#forge:dusts/glowstone',
        B: '#forge:foils/tin'
    }).id('tfg:simplylight/wall_lamp')

    event.shaped('12x simplylight:rodlamp', [
        'ACA',
        'ABA',
        'ACA'  
    ], {
        A: '#forge:dusts/glowstone',
        B: '#forge:rods/tin',
        C: '#forge:bolts/tin'
    }).id('tfg:simplylight/rod_lamp')

    event.shaped('2x simplylight:lightbulb', [
        ' A ',
        'BBB',
        '   '  
    ], {
        A: '#forge:dusts/glowstone',
        B: '#forge:foils/tin'
    }).id('tfg:simplylight/light_bulb')

    event.shaped('6x simplylight:edge_light', [
        'AAA',
        'CBC',
        '   '  
    ], {
        A: '#forge:dusts/glowstone',
        B: '#forge:rods/tin',
        C: '#forge:bolts/tin'
    }).id('tfg:simplylight/edge_light')

    event.shaped('8x simplylight:lamp_post', [
        ' A ',
        ' B ',
        'CDC'  
    ], {
        A: '#simplylight:any_lamp_on',
        B: '#forge:rods/long/bronze',
        C: '#forge:plates/bronze',
        D: '#forge:screws/bronze'
    }).id('tfg:simplylight/lamp_post')

    event.shaped('8x simplylight:illuminant_block_on', [
        'BAB',
        'ACA',
        'BAB'  
    ], {
        A: '#forge:dusts/glowstone',
        B: '#forge:foils/tin',
        C: '#forge:fine_wires/red_alloy',
    }).id('tfg:simplylight/illuminant_block_on')

    event.shaped('8x simplylight:illuminant_block', [
        'ABA',
        'BCB',
        'ABA'  
    ], {
        A: '#forge:dusts/glowstone',
        B: '#forge:foils/tin',
        C: '#forge:fine_wires/red_alloy',
    }).id('tfg:simplylight/illuminant_block')
}
