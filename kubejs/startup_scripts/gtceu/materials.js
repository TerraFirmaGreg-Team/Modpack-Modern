// priority: 0

const $Rock = Java.loadClass('net.dries007.tfc.common.blocks.rock.Rock')

const registerGTCEuMaterials = (event) => {
    
    const registerOreMaterial = (rockType, color) => 
        event.create(`tfg:${rockType}`)
            .dust()
            .color(color)
            .iconSet(GTMaterialIconSet.ROUGH)
            .flags(
                GTMaterialFlags.MORTAR_GRINDABLE, 
                GTMaterialFlags.NO_SMASHING, 
                GTMaterialFlags.NO_SMELTING
            )

    /* TFC Stone Types Materials */
    const Gabbro = registerOreMaterial($Rock.GABBRO, 0x7F8081);
    const Shale = registerOreMaterial($Rock.SHALE, 0x686567);
    const Claystone = registerOreMaterial($Rock.CLAYSTONE, 0xAF9377);
    const Limestone = registerOreMaterial($Rock.LIMESTONE, 0xA09885);
    const Conglomerate = registerOreMaterial($Rock.CONGLOMERATE, 0xA3977F);
    const Dolomite = registerOreMaterial($Rock.DOLOMITE, 0x515155);
    const Chert = registerOreMaterial($Rock.CHERT, 0x7A6756);
    const Chalk = registerOreMaterial($Rock.CHALK, 0xA4A39F);
    const Rhyolite = registerOreMaterial($Rock.RHYOLITE, 0x726D69);
    const Dacite = registerOreMaterial($Rock.DACITE, 0x979797);
    const Slate = registerOreMaterial($Rock.SLATE, 0x989287);
    const Phyllite = registerOreMaterial($Rock.PHYLLITE, 0x706B61);
    const Schist = registerOreMaterial($Rock.SCHIST, 0x6E735C);
    const Gneiss = registerOreMaterial($Rock.GNEISS, 0x6A6D60);

    /* Specific Materials */
    const Latex = event.create('tfg:latex')
        .fluid()
        .color(0xFBB982)

    const Fluix = event.creater('tfg:fluix')
        .fluid()
        .gem(1)
        .color(0xD2D2E6)
        .iconSet(GTMaterialIconSet.CERTUS)
        .flags(
            GTMaterialFlags.GENERATE_PLATE, 
            GTMaterialFlags.NO_SMELTING, 
            GTMaterialFlags.CRYSTALLIZABLE, 
            GTMaterialFlags.DISABLE_DECOMPOSITION, 
            GTMaterialFlags.FORCE_GENERATE_BLOCK
        )
        .components(Silicon, 1, Oxygen, 2)
        .color(0x57448d)

    /* TFC Metals Materials */
    const Unknown = event.create('tfg:unknown')
        .ingot()
        .fluid()
        .color(0x2F2B27)

    const PigIron = event.create('tfg:pig_iron')
        .ingot()
        .fluid()
        .color(0x6A595C)

    const HighCarbonSteel = event.create('tfg:high_carbon_steel')
        .ingot()
        .fluid()
        .color(0x5F5F5F)
       
    const HighCarbonBlackSteel = event.create('tfg:high_carbon_black_steel')
        .ingot()
        .fluid()
        .color(0x111111)

    const HighCarbonRedSteel = event.create('tfg:high_carbon_red_steel')
        .ingot()
        .fluid()
        .color(0x700503)

    const HighCarbonBlueSteel = event.create('tfg:high_carbon_blue_steel')
        .ingot()
        .fluid()
        .color(0x2D5596)

    const WeakSteel = event.create('tfg:weak_steel')
        .ingot()
        .fluid()
        .color(0x111111)

    const WeakRedSteel = event.create('tfg:weak_red_steel')
        .ingot()
        .fluid()
        .color(0x700503)

    const WeakBlueSteel = event.create('tfg:weak_blue_steel')
        .ingot()
        .fluid()
        .color(0x2D5596)

    /* Dead */
    const Limonite = event
        .fluid()
        .create('tfg:limonite')
    
    const Bismuthinite = event
        .fluid()
        .create('tfg:bismuthinite')
}