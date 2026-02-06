// priority: 0
"use strict";

GTCEuStartupEvents.registry('gtceu:machine', _ => {
    const $FrComponents = Java.loadClass("fi.dea.mc.deafission.core.c2.fr.FrComponents");
    const $ReactorBaseStats = Java.loadClass("fi.dea.mc.deafission.core.ReactorBaseStats");
    $ReactorBaseStats.Smr1 = new $FrComponents(200, 0, 0);
})