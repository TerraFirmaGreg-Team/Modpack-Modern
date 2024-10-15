// priority: 0

const registerTFCGroomingStationRecipes = (e) => {
    const GROOMING_MATERIALS = [
        'copper',
        'bismuth_bronze',
        'bronze',
        'black_bronze',
        'wrought_iron',
        'steel',
        'black_steel',
        'red_steel',
        'blue_steel'
    ]

    GROOMING_MATERIALS.forEach(material => {
        e.remove({ id: `tfcgroomer:${material}_grooming_station` })
        
        e.shaped(`tfcgroomer:${material}_grooming_station`, [
            'ABA', 
            'AAA',
            'C C'  
        ], {
            A: `#forge:plates/${material}`, 
            B: '#forge:tools/hammers',
            C: 'tfc:wattle'   
        }).id(`tfcgroomer:${material}_grooming_station`)
    })
}