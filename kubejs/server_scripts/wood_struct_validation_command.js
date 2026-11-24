ServerEvents.customCommand('verify_woodstruct_data', evt =>
{
    evt.player.tell("Verifying wood structs");
    
    /** @type {WoodStruct[]} */
    let woodStructArray = global.getWoodStructArray().concat(global.AD_ASTRA_WOOD_STRUCT);
    
    /*let woodStructArray = global.TFC_WOOD_STRUCT
    .concat(global.AFC_WOOD_STRUCT)
    .concat(global.BENEATH_WOOD_STRUCT)
    .concat(global.AD_ASTRA_WOOD_STRUCT);*/

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
        verifyPropertyIntegrity(messageData, keys);
        verifyPropertyValues(messageData, woodType);

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

    function verifyPropertyIntegrity(messageData, keys)
    {
        let goodKeys = Object.keys(global.WOOD_STRUCT_NONE);

        //First, iterate thru the wood struct's key, check if its in the "None" struct. If it isnt, it means that the wood struct doesnt define a required property
        keys.forEach(key =>
        {
            if(goodKeys.includes(key))
            {
                goodKeys.splice(goodKeys.indexOf(key), 1);
                return;
            }

            //This key either isnt supported or its malformed
            messageData.warnings.push(`Property ${key} doesnt match the required property names, it's either malformed or it straight up doesnt exist!`);
        })

        //Second, if there are keys from the "None" struct left, write them down, it means that 
        if(goodKeys.length > 0)
        {
            goodKeys.forEach(missingKey =>
            {
                messageData.warnings.push(`This wood entry is not providing a property with name ${missingKey}! Said property is required.`);
            });
        }
    }

    function verifyPropertyValues(messageData, woodType)
    {
        const propertyKeyFunctionMap = new Map();
        propertyKeyFunctionMap.set("logsTag", verifyLogsTag);
        propertyKeyFunctionMap.set("tree_data", verifyTreeData);
        propertyKeyFunctionMap.set("rnr_data", verifyRnRData);
        propertyKeyFunctionMap.set("astikor_data", verifyAstikorData);
        propertyKeyFunctionMap.set("railways_data", verifyRailwaysData);
        propertyKeyFunctionMap.set("macaw_data", verifyMacawData);
        propertyKeyFunctionMap.set("tfc_data", verifyTFCData);
        propertyKeyFunctionMap.set("firmalife_data", verifyFirmalifeData);
        propertyKeyFunctionMap.set("woodKind", verifyWoodKind);

        let nonNullProperties = ["tfgCore", "modName", "name", "logsTag"]
        const keyValuePairs = Object.entries(woodType);
        keyValuePairs.forEach(([key, value]) =>
        {
            //Dont check property if its not a registry object.
            if(nonNullProperties.includes(key))
            {
                if(value === null || value === undefined)
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
                functionHandlerForKey(value);
                return;
            }

            let resourceLocation = ResourceLocation.tryParse(value);
            if(resourceLocation == null)
            {
                messageData.errors.push(`${key} is a Resource Location property but it failed to parse!`);
                return;
            }
            //Registry Check, most if not all of these have item values.
            if(!ForgeRegistries.ITEMS.containsKey(resourceLocation))
            {
                messageData.errors.push(`${key}'s ResourceLocation value is not in the ForgeRegistries Items! (${value})`);
                return;
            }
        });

        function verifyLogsTag(value)
        {

        }
        function verifyTreeData(value)
        {

        }
        function verifyRnRData(value)
        {

        }
        function verifyAstikorData(value)
        {

        }
        function verifyRailwaysData(value)
        {

        }
        function verifyMacawData(value)
        {

        }
        function verifyTFCData(value)
        {

        }
        function verifyFirmalifeData(value)
        {

        }
        function verifyWoodKind(value)
        {
            if(!value)
                return;

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