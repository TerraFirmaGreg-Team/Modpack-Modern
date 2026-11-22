// priority: 0
"use strict";

const dairy = ["tfc:cow", "tfc:goat", "tfc:yak"];
const wool = ["tfc:sheep", "tfc:alpaca", "tfc:musk_ox"];
const oviparous = ["tfc:chicken", "tfc:duck", "tfc:quail"];
const equine = ["tfc:horse", "tfc:donkey", "tfc:mule", "tfg:dromedary_camel", "tfg:bactrian_camel"];

MicrobialCultivatorBacteria.register(dairy, [["tfg:chemolithoautotroph", 2], ["tfg:photolithoautotroph", 1]]);
MicrobialCultivatorBacteria.register(wool, [["tfg:chemolithoheterotroph", 2], ["tfg:photolithoautotroph", 1]]);
MicrobialCultivatorBacteria.register(oviparous, [["tfg:chemoorganoheterotroph", 2], ["tfg:photoorganoautotroph", 1]]);
MicrobialCultivatorBacteria.register(equine, [["tfg:chemoorganoautotroph", 2], ["tfg:photoorganoautotroph", 1]]);
