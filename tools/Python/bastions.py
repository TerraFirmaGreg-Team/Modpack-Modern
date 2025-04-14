import os
from typing import Set, Any, Tuple, NamedTuple, Literal, Union
from glob import glob

from nbtlib import nbt
from nbtlib.tag import String as StringTag, Int as IntTag

STRUCTURES_DIR = '../../kubejs/data/minecraft/structures'
STRUCTURES_DIR_MC = 'A:/minecraft/data/minecraft/structures'

def main():
	bastion_structures = glob(STRUCTURES_DIR_MC + '/bastion/**/*.nbt', recursive=True)
	#find_blocks(bastion_structures)
	replace_blocks(bastion_structures)
	pass


def find_blocks(structures):
	blocks = {}
	for f in structures:
		struct = nbt.load(f)
		for block in struct['palette']:
			blocks[block['Name']] = "Found"
	print(blocks.keys())


def replace_blocks(structures):
	for f in structures:
		struct = nbt.load(f)
		dirty = False

		for block in struct['palette']:
			name = block['Name']
			if name == 'minecraft:chest':
				block['Name'] = StringTag('tfc:wood/chest/mangrove')
				dirty = True
			if name == 'minecraft:basalt':
				block['Name'] = StringTag('minecraft:deepslate_bricks')
				dirty = True
			elif name == 'minecraft:polished_basalt':
				block['Name'] = StringTag('minecraft:polished_deepslate')
				dirty = True
			elif name == 'minecraft:chain':
				block['Name'] = StringTag('tfc:metal/chain/black_bronze')
				dirty = True
			elif name == 'minecraft:netherrack':
				block['Name'] = StringTag('minecraft:magma_block')
				dirty = True
			elif name == 'minecraft:soul_sand':
				block['Name'] = StringTag('tfc:thatch')
				dirty = True
			elif name == 'minecraft:spawner':
				block['Name'] = StringTag('minecraft:cave_air')
				dirty = True
			elif name == 'minecraft:nether_wart':
				block['Name'] = StringTag('minecraft:brown_mushroom')
				dirty = True

		if dirty:
			print('Modified: ' + f)
			save(struct, f)


def save(struct, f):
	result_dir = f.replace(STRUCTURES_DIR_MC, STRUCTURES_DIR)
	result_folder = os.path.dirname(result_dir)
	os.makedirs(result_folder, exist_ok=True)
	struct.save(result_dir)

if __name__ == '__main__':
	main()