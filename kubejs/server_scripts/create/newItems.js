const newItemsCreate = (event) => {
    customWelding(event,["forge:ingots/iron","forge:plates/zinc"],"kubejs:galvanized_iron",3);
    customWelding(event,["forge:ingots/wrought_iron","forge:plates/zinc"],"kubejs:galvanized_iron",3);
    customHeating(event,"kubejs:galvanized_iron",["tfc:metal/wrought_iron",144],1400    );
}