// priority: 0 

const registerTFGElement = (event) => {

    event.create("thorium_230")
        .protons(90)
        .neutrons(140)
        .symbol("Th²³⁰")

    event.create("thorium_232")
        .protons(90)
        .neutrons(142)
        .symbol("Th²³²")

    event.create("boron_10")
        .protons(5)
        .neutrons(6)
        .symbol("B¹⁰")

    event.create("americium_241")
        .protons(95)
        .neutrons(146)
        .symbol("Am²⁴¹")    

    event.create("neptunium_237")
        .protons(93)
        .neutrons(144)
        .symbol("Np²³⁷")

    event.create("californium_252")
        .protons(98)
        .neutrons(154)
        .symbol("Ca²⁵²")

    event.create("unknown")
        .protons(75)
        .neutrons(75)
        .symbol("?")

}