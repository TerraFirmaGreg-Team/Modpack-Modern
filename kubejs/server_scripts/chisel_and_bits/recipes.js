// priority: 0

const registerChiselAndBitsRecipes = (event) => {
    
    if (Platform.isLoaded('chiselsandbits')) {
        event.remove({ not: [
            { id: 'chiselsandbits:quill' }
        ], mod: 'chiselsandbits' })
    
        // Мешок для кусочков блоков
        event.recipes.tfc.knapping('chiselsandbits:bit_bag', 'tfc:leather', [
            " X X ",
            "X   X",
            "X   X",
            "XXXXX"
        ]).ingredient('#tfc:leather_knapping').id('tfg:chiselsandbits/knapping_leather/bit_bag')
    
        // Лупа
        event.shaped('chiselsandbits:magnifying_glass', [
            'A', 
            'C',
            'B'  
        ], {
            A: '#forge:glass',
            B: '#forge:rods/wooden',
            C: '#forge:rings/wrought_iron'
        }).id('tfg:chiselsandbits/shaped/magnifying_glass')
    
        // Алмазная стамеска
        event.shapeless('chiselsandbits:chisel_diamond', [
            '#tfc:chisels',
            'tfc:powder/diamond',
            'tfc:powder/diamond',
            'tfc:powder/diamond'
        ]).id('tfg:chiselsandbits/shapeless/chisel_diamond')
    
        // Хранилище кусочков
        event.shaped('chiselsandbits:bit_storage', [
            'ABA', 
            'C C',
            'ADA'  
        ], {
            A: '#forge:rods/wrought_iron',
            B: '#forge:tools/wrench',
            C: 'forge:glass_panes',
            D: 'minecraft:wooden_slabs', 
        }).id('tfg:chiselsandbits/shaped/bit_storage')
    
        // Рулетка
        event.shaped('chiselsandbits:measuring_tape', [
            ' AB', 
            ' BA',
            'C  '  
        ], {
            A: '#forge:dyes/yellow',
            B: '#forge:string',
            C: '#forge:rods/wrought_iron'
        }).id('tfg:chiselsandbits/shaped/measuring_tape')
    
        // Герметик
        event.shapeless('chiselsandbits:sealant', [
            'minecraft:slime_ball',
            'firmalife:raw_honey'
        ]).id('tfg:chiselsandbits/shapeless/sealant_from_slimeballs')
    
        event.shapeless('chiselsandbits:sealant', [
            'tfc:glue',
            'firmalife:raw_honey'
        ]).id('tfg:chiselsandbits/shapeless/sealant_from_glue')
    
        // Резной принтер
        event.shaped('chiselsandbits:chiseled_printer', [
            ' A ', 
            'B B',
            'BCB'  
        ], {
            A: '#forge:tools/wrench',
            B: '#tfc:support_beams',
            C: '#forge:smooth_stone_slab'
        }).id('tfg:chiselsandbits/shaped/chiseled_printer')
    
        // Стол модификаций
        event.shaped('chiselsandbits:modification_table', [
            'ABA', 
            'CDC',
            'C C'  
        ], {
            A: '#minecraft:wooden_slabs',
            B: '#forge:tools/wrench',
            C: '#tfc:support_beams',
            D: '#tfc:workbenches'
        }).id('tfg:chiselsandbits/shaped/modification_table')
    
        // Принтер и сканер шаблонов
        event.shaped('chiselsandbits:pattern_scanner', [
            ' A ', 
            'B B',
            'BCB'  
        ], {
            A: '#forge:tools/wrench',
            B: '#tfc:lumber',
            C: '#forge:smooth_stone_slab'
        }).id('tfg:chiselsandbits/shaped/pattern_scanner')
    
        // Удалятель герметика
        event.shaped('chiselsandbits:wrench', [
            ' AB', 
            ' AA',
            'A  '  
        ], {
            A: '#tfc:lumber',
            B: 'chiselsandbits:block_bit',
        }).id('tfg:chiselsandbits/shaped/wrench')
    }

    
    
}