// priority: 0

const registerExposureRecipes = (event) => {
    
    // Lightroom
    event.shaped('exposure:lightroom', [
        'AB', 
        'CC',
        'CC'  
    ], {
        A: '#tfc:lamps', 
        B: 'minecraft:redstone_torch',
        C: '#minecraft:planks'   
    }).id('exposure:lightroom')

    // Camera
    event.shaped('exposure:camera', [
        'ABC', 
        'DED',
        'FDF'  
    ], {
        A: 'minecraft:lever',
        B: 'gtceu:wrought_iron_gear',
        C: '#minecraft:wooden_buttons',
        D: '#forge:plates/wrought_iron',
        E: '#forge:lenses/glass',
        F: '#forge:screws/wrought_iron'  
    }).id('exposure:camera')

    // Black and White Film
    event.shaped('exposure:black_and_white_film', [
        'ABB', 
        'CDD',
        'CEE'  
    ], {
        A: '#forge:rings/wrought_iron',
        B: '#forge:dyes/white',
        C: '#forge:foils/wrought_iron',
        D: '#forge:dusts/gunpowder',
        E: 'tfc:food/dried_kelp',
    }).id('exposure:black_and_white_film')

    // Colored Film
    event.shaped('exposure:color_film', [
        'ABB', 
        'CDD',
        'CEE'  
    ], {
        A: '#forge:rings/wrought_iron',
        B: '#forge:dyes/blue',
        C: '#forge:foils/wrought_iron',
        D: '#forge:foils/gold',
        E: 'tfc:food/dried_kelp',
    }).id('exposure:color_film')

    // Developed Black and White Film

    event.remove({ id: 'exposure:developing_black_and_white_film' })
    
    event.recipes.tfc.barrel_instant()
        .inputFluid(Fluid.of('minecraft:water', 100))
        .inputItem('exposure:black_and_white_film')    
        .outputItem('exposure:developed_black_and_white_film')
        .id('tfg:barrel/instant/developing_black_and_white_film')

    event.recipes.gtceu.mixer('developing_black_and_white_film')             
        .inputFluids(Fluid.of('minecraft:water', 100))    
        .itemInputs('exposure:black_and_white_film')
        .itemOutputs('exposure:developed_black_and_white_film')
        .duration(50)
        .EUt(16)

    // Developed Color Film

    event.remove({ id: 'exposure:developing_color_film' })

    event.recipes.tfc.barrel_instant()
        .inputFluid(Fluid.of('minecraft:water', 300))
        .inputItem('exposure:color_film')    
        .outputItem('exposure:developed_color_film')
        .id('tfg:barrel/instant/developing_color_film')

    event.recipes.gtceu.mixer('developing_color_film')             
        .inputFluids(Fluid.of('minecraft:water', 300))    
        .itemInputs('exposure:color_film')
        .itemOutputs('exposure:developed_color_film')
        .duration(70)
        .EUt(16)
        
}