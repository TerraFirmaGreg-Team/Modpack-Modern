// priority: 0

const registerTFCGroomingStationRecipes = (event) => {
    const materials = [
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

    materials.forEach(material => {
        console.log(material)
        event.shaped(`tfcgroomer:${material}_grooming_station`, [
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
