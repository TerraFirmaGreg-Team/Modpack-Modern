---
navigation:
  title: 提示与技巧
  position: 20
---

# 提示与技巧

这里有一些零散的小建议。

* 移除 OptiFine。
* 可以旋转、缩放带有缩放与注释显隐按钮的指南场景图。
* 尽量让网络呈树状结构，并避免连成环路。
* 同一区域内全方块形态的[设备](ae2-mechanics/devices.md)尽量不要超过 8 个，除非你对[频道](ae2-mechanics/channels.md)在网络中的走线了如指掌。
* 所有[样板](items-blocks-machines/patterns.md)尽量统一使用同一种木材。启用替代材料有时可行，但在各处都用同一种木材会省事很多。
* 在<ItemLink id="pattern_access_terminal" />里纵向排布[样板](items-blocks-machines/patterns.md)，或把样板分散到多个[样板供应器](items-blocks-machines/pattern_provider.md)上，以便并行执行配方。
* 加装[能源元件](items-blocks-machines/energy_cells.md)，让网络扛得住能量尖峰。
* 可以在<ItemLink id="condenser" />里使用水。
* 保持网络整洁的最好办法是别往里塞剑、盔甲等随机怪物掉落物；每种魔咒与耐久的组合都会多占一种[类型](ae2-mechanics/bytes-and-types.md)。
* 通过[处理样板](items-blocks-machines/patterns.md)把产物送回网络时，必须发生一次「物品进入系统」事件，例如经由<ItemLink id="import_bus" />、<ItemLink id="interface" />或<ItemLink id="pattern_provider" />的返还槽；不能把产物只管排进接有<ItemLink id="storage_bus" />的箱子就算了。
* 别忘了你可以旋转、缩放带有缩放与注释显隐按钮的指南场景图。
* <ItemLink id="pattern_provider" />只会按完整配方批次推送材料，且只从一面输出。这能避免机器只拿到半批材料；但若要把材料送进多个位置，可以用<ItemLink id="interface" />：要么搭成[「管道」子网络](example-setups/pipe-subnet.md)，要么利用它能同时容纳多种物品栈、流体、化学品等的能力，当作中转箱或缓冲罐。
* 仍可以缩放、旋转带有缩放与注释显隐按钮的指南场景图。
