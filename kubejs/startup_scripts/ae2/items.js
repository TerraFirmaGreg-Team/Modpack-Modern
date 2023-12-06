// priority: 0

const registerAE2Items = (event) => {
    event.create('rods/certus_quartz')
        .displayName('Certus Quartz Rod')
        .maxStackSize(32)
        .texture("kubejs:item/certus_quartz_rod");
    event.create('rods/nether_quartz')
        .displayName('Nether Quartz Rod')
        .maxStackSize(32)
        .texture("kubejs:item/nether_quartz_rod")
};