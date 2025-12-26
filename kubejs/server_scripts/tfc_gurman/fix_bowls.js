//list of foods that should return a bowl
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

function return_bowl(event){
    const { player, server } = event
    
    // Create a unique key for this player and item
    let lastEatenKey = `bowl_fix_timer_${player.uuid}`
    let currentTime = server.tickCount

    // Check if the player already ate one of the effected items so that duplication doesn't occure
    // (foodEaten event is triggered multible times because of nutrition or smth)
    // (cooldown should be able to set to 1 as these events should trigger in the same tick as it was eaten maybe)
    if (!player.persistentData.contains(lastEatenKey) || 
        (currentTime - player.persistentData.getInt(lastEatenKey)) > 10) {
        
        player.give('tfc:ceramic/bowl')
        
        // Update the timestamp
        player.persistentData.putInt(lastEatenKey, currentTime)
    }
}

// Create Events for every entry in bowls

for (let i = 0; i < bowls.length; i++){
    ItemEvents.foodEaten("tfc_gurman:"+bowls[i], event => {
        return_bowl(event)
    })
}
