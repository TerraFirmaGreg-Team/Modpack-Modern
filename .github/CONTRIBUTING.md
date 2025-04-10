# Contributing to TerraFirmaGreg-Modern

## Required software

- [Git]
- [Pakku]

## Recommended software

- [PrismLauncher]
- [Visual Studio Code]


## Set-up

Please follow these steps:

### 1

- Fork the project.

### 2

- In your PrismLauncher, add a new 1.20.1 instance called TerraFirmaGreg-Modern.
- Install `Forge 47.2.6`.

### 3

- Delete *everything* from the `TerraFirmaGreg-Modern/.minecraft` folder.

### 4

- Clone the project to the empty `TerraFirmaGreg-Modern/.minecraft` folder. \
You can do that using **terminal**, **cmd** or the **GitHub Desktop** app.

### 5

If you've installed Pakku utilizing Scoop/Brew:
- Open your _terminal_ and run:
    ```
    pakku fetch
    ```

Otherwise, if you downloaded the raw .jar
- Open your _terminal_ and run:
    ```
    java -jar pakku.jar fetch
    ```

# Q&A

### Q: How can I get intellisense in my project?
Intellisense in the project is done via KubeJS's ProbeJS.

Open the game and open any world, then run ``/probejs dump``. After the dump completes you can open the ``minecraft`` folder with VisualStudio code.

### Q: The project doesnt boot!
In case youre running on Bleeding Edge, make sure you have latest version of TFG-Core installed. Said version can be found in the [EN - 1.20 Modpack Contribution Megathread](ContributionMegathread) on Discord.

<!-- Links: -->
[PrismLauncher]: https://prismlauncher.org/
[Visual Studio Code]: https://code.visualstudio.com/
[Git]: https://git-scm.com/
[Pakku]: https://github.com/juraj-hrivnak/Pakku
[ContributionMegathread]: https://discord.com/channels/400913133620822016/1331744604701069393