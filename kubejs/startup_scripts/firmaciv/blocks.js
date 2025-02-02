// priority: 0

const modifyFirmaCivBlocks = (event) => {
    event.modify('firmaciv:cleat', block => {
        block.requiresTool = false
        block.destroySpeed = 0.1
    })
}