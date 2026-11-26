{
    //Keep these in this file scope, we dont want them in other places.
    let WOOD_STRUCT_LAYOUT =
    {
        tfgCore: null,
        modName: null,
        name: null,
        logsTag: null,
        tree_data: null,
        lumber: null, plank: null,
        stair: null, slab: null,
        fence: null, fence_gate: null, log_fence: null,
        door: null, trapdoor: null,
        button: null, pressure_plate: null, //FIXME: Core doesnt generate buttons or pressure plates
        chest: null, trapped_chest: null, chest_minecart: null,
        sign: null, hanging_sign: null,
        workbench: null, crafting_station: null, crafting_station_slab: null, loom: null, sewing_table: null, scribing_table: null,
        big_barrel: null, stomping_barrel: null, barrel: null, barrel_press: null,
        sluice: null, tool_rack: null, lectern: null,
        jar_shelf: null, food_shelf: null, bookshelf: null, jarbnet: null, wine_shelf: null,
        support: null,
        window: null, window_pane: null,
        roof: null,
        hanger: null,
        rope_ladder: null,
        rnr_data: null,
        astikor_data: null,
        railways_data: null,
        macaw_data: null,
        tfg_data: null,
        woodKind: null,
    };

    let TREE_DATA_LAYOUT =
    {
        tree_name: null,
        nameSpace: null,
        log_data: null,
        leaf_block: null,
        fallen_leaves: null,
        sapling: null,
        twig: null,
        tapper_output: null,
        dimension: null,
    };

    let LOG_DATA_LAYOUT = 
    {
        log: null,
        stripped_log: null,
        wood: null,
        stripped_wood: null
    };

    let ASTIKOR_DATA_LAYOUT =
    {
        wheel: null,
        supply_cart: null,
        plow: null,
        animal_cart: null,
    };

    let MACAW_DATA_LAYOUT =
    {
        bridges: null,
        fences: null,
        roofs: null,
        furniture: null,
    };

    let MACAW_DATA_FURNITURE_LAYOUT =
    {
        regular: null,
        stripped: null,
    };

    let RNR_DATA_LAYOUT =
    {
        shingle: null,
        shingle_block: null,
        shingle_stair: null,
        shingle_slab: null
    };

    let RAILWAYS_DATA_LAYOUT =
    {
        track: null,
        incomplete_track: null,
        track_wide: null,
        incomplete_track_wide: null,
        track_narrow: null,
        incomplete_track_narrow: null
    };

    ServerEvents.customCommand('verify_woodstruct_data', evt =>
    {
        evt.player.tell("Verifying wood structs");
        
        /** @type {WoodStruct[]} */
        let woodStructArray = global.getWoodStructArray();
    
        let errors = false;
        let warnings = false;
        woodStructArray.forEach(woodType =>
        {
            var result = verifyEntries(woodType);
            if(result === "WARNS")
            {
                warnings = true;
            }
            else if(result == "ERRORS")
            {
                errors = true;
            }
        });
    
        if(errors)
        {
            evt.player.tell("§cCompleted with errors, see server.log for more details.");
        }
        else if(warnings)
        {
            evt.player.tell("§eCompleted with warnings, see server.log for more details.")
        }
        else
        {
            evt.player.tell("§aCompleted! No errors or warnings detected.");
        }
    
        function verifyEntries(woodType)
        {        
            let messageData = 
            {
                woodName: woodType.name,
                warnings: [],
                errors: [],
            }
            
            //This step checks if the woodType has the necessary properties.
            let keys = Object.keys(woodType);
            verifyPropertyIntegrity(messageData, keys, Object.keys(WOOD_STRUCT_LAYOUT), (msgType, msgData, value) =>
            {
                if(msgType === "MALFORMED")
                {
                    msgData.warnings.push(`Property ${value} doesnt match the required property names, it's either malformed or it straight up doesnt exist!`);
                }
                else if(msgType === "MISSING")
                {
                    msgData.warnings.push(`This wood entry is not providing a property with name ${value}! Said property is required.`);
                }
            });
            verifyWoodStructPropertyValues(messageData, woodType);
    
            if(messageData.warnings.length > 0 || messageData.errors.length > 0)
            {
                printMessageData(messageData);
                return messageData.errors.length > 0 ? "ERRORS" : "WARNS";
            }
            else
            {
                console.log("No issues detected in " + messageData.woodName);
                return "";
            }
        }
    
        function verifyPropertyIntegrity(messageData, keysToVerify, templateKeys, msgHandler)
        {
            keysToVerify.forEach(key =>
            {
                if(templateKeys.includes(key))
                {
                    templateKeys.splice(templateKeys.indexOf(key), 1);
                    return;
                }
    
                msgHandler("MALFORMED", messageData, key);
            });
    
            if(templateKeys.length > 0)
            {
                templateKeys.forEach(missingKey =>
                {
                    msgHandler("MISSING", messageData, missingKey);
                });
            }
        }
    
        function verifyWoodStructPropertyValues(messageData, woodType)
        {
            const propertyKeyFunctionMap = new Map();
            propertyKeyFunctionMap.set("logsTag", verifyLogsTag);
            propertyKeyFunctionMap.set("tree_data", verifyTreeData);
            propertyKeyFunctionMap.set("rnr_data", verifyRnRData);
            propertyKeyFunctionMap.set("astikor_data", verifyAstikorData);
            propertyKeyFunctionMap.set("railways_data", verifyRailwaysData);
            propertyKeyFunctionMap.set("macaw_data", verifyMacawData);
            propertyKeyFunctionMap.set("woodKind", verifyWoodKind);
    
            let nonNullProperties = ["tfgCore", "modName", "name", "logsTag"]
            const keyValuePairs = Object.entries(woodType);
            keyValuePairs.forEach(([key, value]) =>
            {
                //Dont check property if its not a registry object.
                if(nonNullProperties.includes(key))
                {
                    if(isNullOrUndefined(value))
                    {
                        messageData.warnings.push(`${key} cannot have a null/undefined value!`);
                    }
                    return;
                }
    
                if(!value)
                {
                    return;
                }
    
                //Use custom handler if it exists
                const functionHandlerForKey = propertyKeyFunctionMap.get(key);
                if(functionHandlerForKey)
                {
                    functionHandlerForKey(key, value);
                    return;
                }
    
                if(!verifyItemExists(value))
                {
                    messageData.errors.push(`${key} is a Resource Location Property but it either failed to parse or does not point to a real item in the Forge Registries.`);
                    return;
                }
            });
    
            function verifyItemExists(resLocString)
            {
                let resourceLocation = ResourceLocation.tryParse(resLocString);
                if(resourceLocation === null)
                {
                    return false;
                }
    
                if(!Item.exists(resourceLocation))
                {
                    return false;
                }
                return true;
            }
            function isNullOrUndefined(obj) { return isNull(obj) || isUndefined(obj) }
            function isNull(obj) { return obj === null; }
            function isUndefined(obj) {return obj === undefined; }
    
            function verifyLogsTag(key, value)
            {
                return;
                if(isNullOrUndefined(value))
                {
                    messageData.warnings.push(`${key}'s value is null or undefined!`);
                    return;
                }
    
                let resourceLocation = ResourceLocation.tryParse(value);
                if(resourceLocation === null)
                {
                    messageData.errors.push(`${key} has a ResourceLocation that failed to parse! (${value})`);
                }
            }
            function verifyTreeData(key, value)
            {
                if(isUndefined(value))
                {
                    messageData.warnings.push(`${key}'s value is undefined!`)
                    return;
                }
    
                if(!Array.isArray(value))
                {
                    messageData.warnings.push(`${key}'s value is not an array!`);
                    return;
                }
    
                for (let index = 0; index < value.length; index++) {
                    let treeData = value[index];
                    verifyPropertyIntegrity(messageData, Object.keys(treeData), Object.keys(TREE_DATA_LAYOUT), (msgType, msgData, value) =>
                    {
                        if(msgType === "MALFORMED")
                        {
                            msgData.warnings.push(`Property ${value} at index ${index} of tree_data doesnt match the required tree_data property names, it's either malformed or it straight up doesnt exist!`);
                        }
                        else if(msgType === "MISSING")
                        {
                            msgData.warnings.push(`Tree data entry at index ${index} is not providing a property with name ${value}! Said property is required.`);
                        }
                    });
    
                    let keyValuePairs = Object.entries(treeData);
                    let nonNullProperties = ["tree_name", "nameSpace"]
                    keyValuePairs.forEach(([key, value]) =>
                    {
                        if(key === "tapper_output")
                            return;
    
                        if(nonNullProperties.includes(key))
                        {
                            if(isNullOrUndefined(value))
                            {
                                messageData.warnings.push(`TreeData: ${key} cannot have a null/undefined value!`);
                            }
                            return;
                        }
    
                        if(key === "log_data")
                        {
                            let logItems = [value.log, value.stripped_log, value.wood, value.stripped_wood];
                            
                            if(logItems.some(isUndefined))
                            {
                                messageData.errors.push(`LogData: ${key}'s log data has a property thats undefined! (${value})`);
                            }
    
                            logItems.forEach(logItem =>
                            {
                                if(isNullOrUndefined(logItem))
                                    return;
    
                                if(!verifyItemExists(logItem))
                                {
                                    messageData.errors.push(`LogData: ${logItem} is a ResourceLocation but it either failed to parse or does not point to a real item in the Forge Registries.`);
                                }
                            })
                            return;
                        }
                        
                        if(isNull(value))
                            return;
    
                        if(key === "dimension")
                        {
                            let resourceLocation = ResourceLocation.tryParse(value);
                            if(resourceLocation === null)
                            {
                                messageData.errors.push(`TreeData: ${key} has a ResourceLocation that failed to parse! (${value})`);
                            }
                            //I'd like to check the registry, but idk where that is.
                            return;
                        }
    
                        if(!verifyItemExists(value))
                        {
                            messageData.errors.push(`LogData: ${key} is a ResourceLocation but it either failed to parse or does not point to a real item in the Forge Registries. (${value})`)
                        }
                    });
                }
            }
            function verifyRnRData(key, value)
            {
                if(isUndefined(value))
                {
                    messageData.warnings.push(`${key}'s value is undefined!`)
                    return;
                }
                verifyPropertyIntegrity(messageData, Object.keys(value), Object.keys(RNR_DATA_LAYOUT), (msgType, msgData, value) =>
                {
                    if(msgType === "MALFORMED")
                    {
                        msgData.warnings.push(`Property ${value} of rnr_data doesnt match the required rnr_data property names, it's either malformed or it straight up doesnt exist!`);
                    }
                    else if(msgType === "MISSING")
                    {
                        msgData.warnings.push(`rnrData is not providing a property with name ${value}! Said property is required.`);
                    }
                });

                let keyValuePairs = Object.entries(value);
                keyValuePairs.forEach(([key, value]) =>
                {
                    if(isNull(value))
                    {
                        return;
                    }

                    if(isUndefined(value))
                    {
                        msgData.warnings.push(`RNR_Data: ${key}'s value cannot be undefined!`);
                        return;
                    }

                    if(!verifyItemExists(value))
                    {
                        messageData.errors.push(`RNR_Data: ${key} is a ResourceLocation but it either failed to parse or does not point to a real item in the Forge Registries. (${value})`)
                    }
                });
            }
            function verifyAstikorData(key, value)
            {
                if(isUndefined(value))
                {
                    messageData.warnings.push(`${key}'s value is undefined!`)
                    return;
                }
                verifyPropertyIntegrity(messageData, Object.keys(value), Object.keys(ASTIKOR_DATA_LAYOUT), (msgType, msgData, value) =>
                {
                    if(msgType === "MALFORMED")
                    {
                        msgData.warnings.push(`Property ${value} of astikor_data doesnt match the required astikor_data property names, it's either malformed or it straight up doesnt exist!`);
                    }
                    else if(msgType === "MISSING")
                    {
                        msgData.warnings.push(`astikor_data is not providing a property with name ${value}! Said property is required.`);
                    }
                });

                let keyValuePairs = Object.entries(value);
                keyValuePairs.forEach(([key, value]) =>
                {
                    if(isNull(value))
                    {
                        return;
                    }

                    if(isUndefined(value))
                    {
                        msgData.warnings.push(`Astikor_Data: ${key}'s value cannot be undefined!`);
                        return;
                    }

                    if(!verifyItemExists(value))
                    {
                        messageData.errors.push(`Astikor_Data: ${key} is a ResourceLocation but it either failed to parse or does not point to a real item in the Forge Registries. (${value})`)
                    }
                });
            }
            function verifyRailwaysData(key, value)
            {
                if(isUndefined(value))
                {
                    messageData.warnings.push(`${key}'s value is undefined!`)
                    return;
                }
                verifyPropertyIntegrity(messageData, Object.keys(value), Object.keys(RAILWAYS_DATA_LAYOUT), (msgType, msgData, value) =>
                {
                    if(msgType === "MALFORMED")
                    {
                        msgData.warnings.push(`Property ${value} of railways_data doesnt match the required railways_data property names, it's either malformed or it straight up doesnt exist!`);
                    }
                    else if(msgType === "MISSING")
                    {
                        msgData.warnings.push(`railways_data is not providing a property with name ${value}! Said property is required.`);
                    }
                });

                let keyValuePairs = Object.entries(value);
                keyValuePairs.forEach(([key, value]) =>
                {
                    if(isNull(value))
                    {
                        return;
                    }

                    if(isUndefined(value))
                    {
                        msgData.warnings.push(`railways_data: ${key}'s value cannot be undefined!`);
                        return;
                    }

                    if(!verifyItemExists(value))
                    {
                        messageData.errors.push(`railways_data: ${key} is a ResourceLocation but it either failed to parse or does not point to a real item in the Forge Registries. (${value})`)
                    }
                });
            }
            function verifyMacawData(key, value)
            {
                //I cant be bothered man
            }
            function verifyWoodKind(key, value)
            {
                if(value != global.WOOD_KIND.HARD && value != global.WOOD_KIND.SOFT && value != global.WOOD_KIND.NONE)
                {
                    messageData.errors.push(`WoodKind value is outside valid values. (${value}) Check WOOD_KIND for valid values.`);
                }
            }
        }
    
        function printMessageData(messageData) 
        {
            const lines = [`Wood: ${messageData.woodName}`];
    
            messageData.warnings.forEach(warning => lines.push(`WARN: ${warning}`));
            messageData.errors.forEach(error => lines.push(`ERROR: ${error}`));
    
            console.warn(lines.join('\n'));
        }
    });
}