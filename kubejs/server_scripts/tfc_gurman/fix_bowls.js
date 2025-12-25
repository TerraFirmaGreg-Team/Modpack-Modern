let bowls = [
    "porridge",
    "porridge_with_honey",
    "porridge_with_fruits",
    "pasta_with_adjika",
    "zama",
    "mamaliga",
    "fried_rice",
    "curry",
    "pho",
    "hummus",
    "greek_salad",
    "tzatziki",
    "goulash",
    "risotto",
    "biryani",
    "ratatouille",
    "dolma",
    "schi",
    "cooked_rice_noodles",
    "ramen_with_chevon",
    "solyanka",
    "kimchi",
    "ramen_with_beef",
    "ramen_with_camelidae",
    "pasta_cabonara",
    "bouillabaisse",
    "spaghetti_bolognese",
    "ramen_with_bacon",
    "okroshka",
    "adjika",
    "cooked_pasta",
    "borscht"
]

for (let i=0; i<bowls.length; i++){
    bowls[i] = "tfc_gurman:"+bowls[i]
}

ItemEvents.foodEaten( event => {
    
    if(bowls.includes("tfc_gurman:borscht")) {
        event.player.give(Item.of("tfc:ceramic/bowl",1))
    }
})