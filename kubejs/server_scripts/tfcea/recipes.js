

const registerTfceaRecipes = (event) => {
    //удаление рецептов мода
    event.remove({ mod: 'tfcea' })

    event.shaped('tfcea:refrigerator', [
        'ABA', 
        'BCB',
        'DEF'  
    ], {
        A: '#forge:single_cables/tin',
        B: '#forge:normal_fluid_pipes/potin',  
        C: 'gtceu:steel_crate',
        D: 'gtceu:lv_fluid_regulator',
        E: 'gtceu:lv_machine_hull',
        F: 'gtceu:lv_electric_pump',
    }).id('tfcea:refrigerator')

}