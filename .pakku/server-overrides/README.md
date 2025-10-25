# Running the TerraFirmaGreg Server Pack

To run the Server Pack:

1. Install the ServerPack in your server of choice
    * Doing it manually or utilizing a third party website should work fine
2. Start the Server Pack
    * You can start it by running the "start_server.bat" file
    * You should be able to run it using the "BASH" command, assuming your server machine has BASH capabilities
        * ``bash start_server.bat``
    * Or just open the batch file if on a windows machine.
3. The batch file will start the server, install forge on it and then boot up your world.

# Config Settings

The config files shipped with the server pack should be a good starting point for bigger servers, however there's a few settings you may want to tweak:

* defaultconfigs/tfc-server.toml
   * `torchTicks` and `candleTicks` - This controls how fast torches and candles burn out. By default, torches last for two days and candles last for eight. You may want to increase this if your server players are spread out and have different bases. (You'll be able to craft permanent light sources once you enter LV)
   * `foodDecayModifier` - This controls how fast food decays. For single player worlds or small groups that share a base, we recommend changing this to `1.0`, the TFC default. For larger servers with players in many time zones, `0.25` should work fine.
 
* defaultconfigs/ftbranks/ranks.snbt
   * Depending on how powerful of a server you're using, you may want to change the amount of force-loaded chunks each player is allowed to have. Note that players on the same team will combine their total allowance, so small numbers can encourage team play.
