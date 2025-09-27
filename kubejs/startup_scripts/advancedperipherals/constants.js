// priority: 0
"use strict";

global.ADVANCED_PERIPHERALS_DISABLED_ITEMS = [
    'advancedperipherals:peripheral_casing', 
    'advancedperipherals:rs_bridge', 
    'advancedperipherals:energy_detector', 
    'advancedperipherals:colony_integrator', 
    'advancedperipherals:computer_tool',

    // deprecated in favour of CC's redstone relay
    'advancedperipherals:redstone_integrator',

    // banned for trans-dimensional travel
    'advancedperipherals:overpowered_end_automata_core',
    // banned for offline chunk loading (bad for server performance)
    'advancedperipherals:chunk_controller'
];
