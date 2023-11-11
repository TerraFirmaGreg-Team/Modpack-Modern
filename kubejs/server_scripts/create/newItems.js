const newItemsCreate = (event) => {
    // galvanized_iron
    customWelding(event,["forge:ingots/iron","forge:plates/zinc"],"kubejs:galvanized_iron",3);
    customWelding(event,["forge:ingots/wrought_iron","forge:plates/zinc"],"kubejs:galvanized_iron",3);
    customHeating(event,"forge:ingots/galvanized_iron",["tfc:metal/wrought_iron",144],1400);

    //shaft craft
    customAnvil(event,"forge:ingots/galvanized_iron",["create:shaft",4],3,["hit_last","hit_second_last","hit_third_last"]);


}