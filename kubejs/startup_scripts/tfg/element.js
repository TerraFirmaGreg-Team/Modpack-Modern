// priority: 0 

const registerTFGElement = (event) => {

    event.create("thorium_230")
        .protons(90)
        .neutrons(230)
        .symbol("Th²³⁰")
    event.create("thorium_232")
        .protons(90)
        .neutrons(232)
        .symbol("Th²³²")

    event.create("americium_241")
        .protons(95)
        .neutrons(241)
        .symbol("Am²⁴¹")

    event.create("neptunium_237")
        .protons(93)
        .neutrons(237)
        .symbol("Np²³⁷")

    event.create("californium_252")
        .protons(98)
        .neutrons(252)
        .symbol("Ca²⁵²")

    event.create("boron_10")
        .protons(5)
        .neutrons(5)
        .symbol("B¹⁰")
}