// priority: 0
"use strict";

const modifyFirmaCivBlocks = (event) => {
    event.modify('firmaciv:cleat', block => {
        block.requiresTool = false
        block.destroySpeed = 0.1
    })
}