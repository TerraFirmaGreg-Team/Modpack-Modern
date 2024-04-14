// priority: 0

const registerHandGliderRecipes = (event) => {
    
    // Glider Framework
    event.shaped('hangglider:glider_framework', [
        'AAA',
        'BCB',
        'DCD'
    ], {
        A: '#forge:rods/wrought_iron', 
        B: '#forge:rods/long/wrought_iron',
        C: '#forge:screws',
        D: '#forge:rings'
    }).id('hangglider:glider_framework')
}