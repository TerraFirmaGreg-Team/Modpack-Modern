// priority: 0

const registerGregTechWorldGenLayers = (event) => {
    
    // Здесь куча конченных переменных. Почему? 
    // А потому что мы не можем использовать у руды несколько слоев для гена и з-за этого приходится говнить. 
    // Спасибо разрабам.

    const ALL = ['#tfc:rock/raw']
    
    const IE = [
        'tfc:rock/raw/rhyolite', 
        'tfc:rock/raw/basalt', 
        'tfc:rock/raw/andesite', 
        'tfc:rock/raw/dacite'
    ]
    
    const II = [
        'tfc:rock/raw/granite', 
        'tfc:rock/raw/diorite', 
        'tfc:rock/raw/gabbro'
    ]
    
    const M = [
        'tfc:rock/raw/quartzite', 
        'tfc:rock/raw/slate', 
        'tfc:rock/raw/phyllite', 
        'tfc:rock/raw/schist', 
        'tfc:rock/raw/gneiss', 
        'tfc:rock/raw/marble'
    ]

    const S = [
        'tfc:rock/raw/shale', 
        'tfc:rock/raw/claystone', 
        'tfc:rock/raw/limestone', 
        'tfc:rock/raw/conglomerate', 
        'tfc:rock/raw/dolomite', 
        'tfc:rock/raw/chert', 
        'tfc:rock/raw/chalk'
    ]
    
    const SQSG = [
        'tfc:rock/raw/shale',
        'tfc:rock/raw/quartzite',
        'tfc:rock/raw/schist',
        'tfc:rock/raw/gneiss',
    ]

    const GG = [
        'tfc:rock/raw/granite',
        'tfc:rock/raw/gneiss',
    ]

    const GB = [
        'tfc:rock/raw/granite',
        'tfc:rock/raw/basalt'
    ]

    const SCL = [
        'tfc:rock/raw/shale',
        'tfc:rock/raw/claystone',
        'tfc:rock/raw/limestone',
    ]

    const Granite = [
        'tfc:rock/raw/granite'
    ]

    const Gabbro = [
        'tfc:rock/raw/gabbro'
    ]

    // Слои

    event.create('tfg_tfc_all')
        .targets(ALL)
        .dimensions('minecraft:overworld')

    event.create('tfg_tfc_ie')
        .targets(IE)
        .dimensions('minecraft:overworld')

    event.create('tfg_tfc_ii')
        .targets(II)
        .dimensions('minecraft:overworld')

    event.create('tfg_tfc_m')
        .targets(M)
        .dimensions('minecraft:overworld')

    event.create('tfg_tfc_s')
        .targets(S)
        .dimensions('minecraft:overworld')

    // Кастомные

    event.create('tfg_tfc_ii_m')
        .targets([].concat(II, M))
        .dimensions('minecraft:overworld')

    event.create('tfg_tfc_ii_s')
        .targets([].concat(II, S))
        .dimensions('minecraft:overworld')

    event.create('tfg_tfc_ie_m')
        .targets([].concat(IE, M))
        .dimensions('minecraft:overworld')

    event.create('tfg_tfc_ie_s')
        .targets([].concat(IE, S))
        .dimensions('minecraft:overworld')

    event.create('tfg_tfc_ie_ii')
        .targets([].concat(IE, II))
        .dimensions('minecraft:overworld')

    event.create('tfg_tfc_m_s')
        .targets([].concat(M, S))
        .dimensions('minecraft:overworld')

    event.create('tfg_tfc_s_q_s_g')
        .targets(SQSG)
        .dimensions('minecraft:overworld')

    event.create('tfg_tfc_g_g')
        .targets(GG)
        .dimensions('minecraft:overworld')

    event.create('tfg_tfc_g_b')
        .targets(GB)
        .dimensions('minecraft:overworld')

    event.create('tfg_tfc_gabbro')
        .targets(Gabbro)
        .dimensions('minecraft:overworld')

    event.create('tfg_tfc_s_c_l')
        .targets(SCL)
        .dimensions('minecraft:overworld')

    event.create('tfg_tfc_granite')
        .targets(Granite)
        .dimensions('minecraft:overworld')
}