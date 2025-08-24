# Contribution to TerraFirmaGreg-Modern

## Table of Contents
- [Contribution to TerraFirmaGreg-Modern](#contribution-to-terrafirmagreg-modern)
  - [Table of Contents](#table-of-contents)
  - [English Version](#english-version)
    - [1. Required and Recommended Software](#1-required-and-recommended-software)
      - [Required Software](#required-software)
      - [Recommended Software](#recommended-software)
    - [2. Project Preparation](#2-project-preparation)
      - [Step 1: Cloning the Main Repository](#step-1-cloning-the-main-repository)
      - [Step 2: Creating a New Instance in PrismLauncher](#step-2-creating-a-new-instance-in-prismlauncher)
      - [Step 3: Cleaning the Project Folder](#step-3-cleaning-the-project-folder)
      - [Step 4: Cloning the Repository into an Empty Folder](#step-4-cloning-the-repository-into-an-empty-folder)
      - [Step 5: Synchronizing Dependencies via Pakku](#step-5-synchronizing-dependencies-via-pakku)
      - [Step 6: Working with Branches and Creating Pull Request](#step-6-working-with-branches-and-creating-pull-request)
      - [Step 7: Processing and Merging Pull Request](#step-7-processing-and-merging-pull-request)
    - [3. Additional Recommendations](#3-additional-recommendations)
  - [Russian Version](#russian-version)
    - [1. Необходимое и рекомендуемое ПО](#1-необходимое-и-рекомендуемое-по)
      - [Необходимое ПО](#необходимое-по)
      - [Рекомендуемое ПО](#рекомендуемое-по)
    - [2. Подготовка проекта](#2-подготовка-проекта)
      - [Шаг 1: Клонирование основного репозитория](#шаг-1-клонирование-основного-репозитория)
      - [Шаг 2: Создание новой инстанции в PrismLauncher](#шаг-2-создание-новой-инстанции-в-prismlauncher)
      - [Шаг 3: Очистка папки проекта](#шаг-3-очистка-папки-проекта)
      - [Шаг 4: Клонирование репозитория в пустую папку](#шаг-4-клонирование-репозитория-в-пустую-папку)
      - [Шаг 5: Синхронизация зависимостей через Pakku](#шаг-5-синхронизация-зависимостей-через-pakku)
      - [Шаг 6: Работа с ветками и создание Pull Request](#шаг-6-работа-с-ветками-и-создание-pull-request)
      - [Шаг 7: Обработка и вливание Pull Request](#шаг-7-обработка-и-вливание-pull-request)
    - [3. Дополнительные рекомендации](#3-дополнительные-рекомендации)

---

## English Version

### 1. Required and Recommended Software

#### Required Software
- [Git]: A version control system for managing source code.
- [Pakku]: A tool for dependency management and modpack building.

> [!WARNING]  
> Ensure that Java version 17 is installed on your machine, as it is required for Forge and Pakku to function properly.

#### Recommended Software
- [PrismLauncher]: An optimized launcher for Minecraft modifications, making it easier to create separate instances.
- [Visual Studio Code]: A code editor with extensive capabilities for working with projects and integrating various plugins.
- [GitHub Desktop]: A graphical client for managing Git repositories developed by GitHub.

---

### 2. Project Preparation

#### Step 1: Cloning the Main Repository
1. Go to the official repository page of [TerraFirmaGreg-Modern] on GitHub.
2. Clone the repository using one of the following methods:

   **Method A: GitHub Desktop**  
   - Open [GitHub Desktop] and log in.  
   - Select **File → Clone repository...**  
   - Go to the **URL** tab and enter:
      ```bash
      https://github.com/TerraFirmaGreg-Team/Modpack-Modern.git
      ```
   - In the **Local Path** field, select or create a folder for the repository, e.g., `TerraFirmaGreg-Modern/minecraft`.  
   - Click **Clone**.

   **Method B: Terminal / cmd**  
   - Open **terminal** or **cmd** in the desired directory.  
   - Execute the command:
      ```bash
      git clone https://github.com/TerraFirmaGreg-Team/Modpack-Modern.git "PATH_TO_FOLDER/TerraFirmaGreg-Modern/minecraft"
      ```
   - Replace `PATH_TO_FOLDER` with the appropriate path in your environment.

> [!TIP]  
> This approach allows you to immediately work with the main version of the repository for local testing and development.

#### Step 2: Creating a New Instance in PrismLauncher
1. Open [PrismLauncher] and click on the **`Add Instance`** button.
2. In the **Name** field, enter the name **`TerraFirmaGreg-Modern`**.
3. Select Minecraft version **`1.20.1`** and Forge version **`47.2.6`** — these versions are necessary for the modpack to work correctly.

> [!TIP]  
> ![Interface for creating a new instance in PrismLauncher](https://github.com/TerraFirmaGreg-Team/.github/blob/main/wiki/new_instances.png?raw=true)

#### Step 3: Cleaning the Project Folder
1. Locate the instance folder in the PrismLauncher directory at **`TerraFirmaGreg-Modern/minecraft`**.

> [!TIP]  
> For quick access, right-click on the instance and select **`Folder`**.  
> ![Instance folder in PrismLauncher](https://github.com/TerraFirmaGreg-Team/.github/blob/main/wiki/prism_folder.png?raw=true)

> [!WARNING]  
> Delete all files and directories inside the `minecraft` folder to avoid version conflicts and leftover old data.

#### Step 4: Cloning the Repository into an Empty Folder
If you did not clone the repository in Step 1, follow these steps:

**Method A: GitHub Desktop**  
1. Open [GitHub Desktop] and log in.  
2. Select **File → Clone repository...**  
3. On the **URL** tab, enter: **`https://github.com/TerraFirmaGreg-Team/Modpack-Modern.git`**
4. In the **Local Path** field, select the `TerraFirmaGreg-Modern/minecraft` folder created in Step 2.  
5. Click **Clone**.

**Method B: Terminal / cmd**  
1. Open **terminal** or **cmd** in the root directory of the `TerraFirmaGreg-Modern` folder.  
2. Execute the command:
  ```bash
   git clone https://github.com/TerraFirmaGreg-Team/Modpack-Modern.git "minecraft"
  ```
  This command creates a minecraft folder inside TerraFirmaGreg-Modern and downloads the repository files there.

> [!TIP] 
> This approach allows you to work with the main version of the repository for local testing and development.

#### Step 5: Synchronizing Dependencies via Pakku
1. Open **terminal** or **cmd** in the root directory of the `TerraFirmaGreg-Modern/minecraft` folder.
2. Execute the following command:
```bash
  pakku fetch
```
> [!TIP]
> This command downloads all necessary project files into the modpacks folder. Note that the command may differ depending on how Pakku was installed.

#### Step 6: Working with Branches and Creating Pull Request
There are two approaches to creating a Pull Request: via terminal and via GitHub Desktop.

**Branch Designation**
  - **`main`:**
    - This branch contains the stable, tested, and released version of the project. 
    - It should only contain changes that have passed the full review cycle.
    - Changes can be accepted by members of the [Dev-Modern] team; at least one approval is required.

  - **`dev`:**
    - The main development branch where new features, bug fixes, and experimental changes are integrated.
    - After testing, changes from dev may be merged into the main branch for a new version release.
    - Changes can be accepted by members of the [Contributor-Modern] team; at least two approvals are required.

  - **`feature/bugfix-branch`:**
    - For example, (`feature/add-custom-quest`) or (`bugfix/fix-launch-crash`). 
    - It is recommended to create separate branches from dev for developing specific features or fixing bugs.
    - After completing the work, merge them back into dev.
    - Members of the [Contributor-Modern] team can create branches in the main repository.

**Process of Creating Pull Request**

**Method A: GitHub Desktop**

1. **Creating a New Branch:**
   - Open [GitHub Desktop] and ensure that your local repository **`TerraFirmaGreg-Modern`** is selected.
   - In the top menu, select **`Branch → New Branch...`**.
   - In the appearing window, enter a name for your new branch (e.g., **`feature/add-custom-quest`** or **`bugfix/fix-launch-crash`**).  
   - Click **`Create Branch`**. Now you are in a new branch created from the dev branch.

2. **Making and Committing Changes:**
   - Make the necessary changes to the project using your favorite code editor (e.g., [Visual Studio Code]).
   - Return to GitHub Desktop, go to the **`Changes`** tab, where you will see a list of modified files.
   - Add a description of your changes, enter a commit message, and click **`Commit to <branch_name>`**.

3. **Publishing the Branch:**
   - After committing changes, click the **`Push origin`** button in the top right corner of GitHub Desktop. 
   - This will send your new branch to GitHub.

4. **Creating Pull Request:**
   - After a successful push, [GitHub Desktop] will offer you a **Create Pull Request** button or a link **View on GitHub**. Click it.
   - In the opened web interface of GitHub, ensure that:
     - The base branch for merging is set to **`dev`** of the main repository.
     - The title and description of the Pull Request contain detailed descriptions of the changes made, as well as links to related Issues if necessary.
   - Click **Create Pull Request** to send a request to merge your changes into the dev branch.

**Method B: Using terminal / cmd**

1. **Synchronizing with upstream:**
  - Ensure that your local repository is up-to-date. If you have already set up remote upstream (the official repository), execute:

  ```bash
    git checkout dev
    git pull upstream dev
  ```
2. **Creating a new branch for changes:**
  - From the dev branch, create a new feature or bugfix branch:

  ```bash
  git checkout -b feature/name-of-feature
  ```
  - Name your branch clearly (e.g., feature/add-custom-quest or bugfix/fix-crash-on-launch).

3. **Making changes:**
  - Make changes to the code, accompanied by commits with clear messages:

  ```bash
  git add .
  git commit -m "Brief description of changes made"
  ```
4. **Pushing the branch to GitHub:**
  - Push your branch to your fork:

  ```bash
  git push origin feature/name-of-feature
  ```

5. **Creating Pull Request:**
  - Go to the page of your fork on GitHub.
  - Click the Compare & Pull Request button next to the just pushed branch.
  - Ensure that dev of the main repository is selected as the base branch.
  - Fill in the title and description of the Pull Request, mention which problems this PR solves, and if possible, provide links to corresponding Issues.
  - Send the request by clicking Create Pull Request.

> [!TIP]  
> If you have questions about formatting a Pull Request or are unsure with which branch to merge, refer to the project documentation or contact the team via [Discord].

#### Step 7: Processing and Merging Pull Request
1. Reviewing Pull Request:
  - After creating a Pull Request, it enters a queue for review by members of the team.
  - Members of [Dev-Modern] (for merging into main) or [Contributor-Modern] (for merging into dev) review the changes made, leave comments, and request revisions if necessary.

2. Making Corrections:
  - If corrections are required, the PR author makes them in their branch, and the updated commit automatically appears in the open request.

3. Approval:
  - After making all necessary corrections and receiving positive feedback from reviewers, the PR is considered approved.
  - To merge changes into main, at least one approval from members of the [Dev-Modern] team is required.
  - For merging into dev – at least two approvals from members of the [Contributor-Modern] team are required.

4. Merging Pull Request:
  - After approval, an authorized member or maintainer performs the merge PR (using Squash and Merge according to project rules).
  - After successful merging, it is recommended to delete the branch to maintain repository cleanliness.

5. Post-Merge:
  - The merge of PR triggers build and testing processes to ensure the stability of the changes made.
  - If issues are discovered after merging, a new Pull Request is created for their resolution.

---

### 3. Additional Recommendations

- #### Semantic Versioning Rules:
    - The project follows [Semantic Versioning](https://semver.org/).
    - **Patch**: Bug fixes and small changes (`1.0.0` → `1.0.1`)
    - **Minor**: New features that don't break compatibility (`1.0.0` → `1.1.0`)
    - **Major**: Breaking changes (`1.0.0` → `2.0.0`)

- #### Working with Git: 
    - Create separate branches for each new functionality or bug fix.
    - Regularly synchronize your fork with the original repository to avoid conflicts.
    - Use clear commit messages for better understanding of changes.

- #### Debugging and Testing: 
  - Before making your changes, ensure that the project runs without errors.
  - Check PrismLauncher logs to identify potential issues.
  - Using Visual Studio Code with the [ProbeJs] extension helps quickly detect and fix errors.

- #### Documentation and Discussion: 
  - If you have questions or problems, refer to the Issues or Discussions section of the GitHub project, as well as forums on [Discord].
  - Collective discussion often leads to finding optimal solutions and improving the project overall.

- #### Collaborative Development: 
  - Always test the integration of your changes with the main project.
  - Before sending a Pull Request, it is important to ensure that your changes do not disrupt the modpack's operation and comply with [internal code of conduct](CODE_OF_CONDUCT.md).

- #### Localization: 
  - If you're looking for Localizing the modpack to a Language, please feel free to head to the [Tools-Modern]
- #### Linting & Typescript support
  - Install NodeJS and use an editor with Typescript and ESLint support (e.g. Visual Studio Code).
  - Run `npm init`, and create a project with default options. (required for language support to work properly)
  - Run `npm install --save-dev eslint@latest @eslint/js@latest @stylistic/eslint-plugin`
  - To enable type annotations & diagnostics, run [ProbeJS] and set `noCheck: false` in tsconfig.json.

---

## Russian Version

### 1. Необходимое и рекомендуемое ПО

#### Необходимое ПО
- [Git]: Система контроля версий для управления исходным кодом.
- [Pakku]: Инструмент для управления зависимостями и сборкой модпака.

> [!WARNING]  
> Убедитесь, что на вашей машине установлена 17 версия Java, необходимая для работы Forge и Pakku.

#### Рекомендуемое ПО
- [PrismLauncher]: Лаунчер, оптимизированный для работы с модификациями Minecraft, облегчающий создание отдельных инстанций.
- [Visual Studio Code]: Редактор кода с широкими возможностями для работы с проектами и интеграции различных плагинов.
- [GitHub Desktop]: Графический клиент для управления Git-репозиториями, разработанный компанией GitHub.

---

### 2. Подготовка проекта

#### Шаг 1: Клонирование основного репозитория
1. Перейдите на страницу официального репозитория [TerraFirmaGreg-Modern] на GitHub.
2. Склонируйте репозиторий, используя один из следующих способов:

   **Способ A: GitHub Desktop**  
   - Откройте [GitHub Desktop] и авторизуйтесь.  
   - Выберите **File → Clone repository...**  
   - Перейдите на вкладку **URL** и введите:  
      ```bash
      https://github.com/TerraFirmaGreg-Team/Modpack-Modern.git
      ```
   - В поле **Local Path** выберите или создайте папку для репозитория, например, `TerraFirmaGreg-Modern/minecraft`.  
   - Нажмите **Clone**.

   **Способ B: Terminal / cmd**  
   - Откройте **terminal** или **cmd** в нужной директории.  
   - Выполните команду:
      ```bash
      git clone https://github.com/TerraFirmaGreg-Team/Modpack-Modern.git "ПУТЬ_ДО_ПАПКИ/TerraFirmaGreg-Modern/minecraft"
      ```
   - Замените `ПУТЬ_ДО_ПАПКИ` на нужный путь в вашем окружении.

> [!TIP]  
> Такой подход позволяет сразу работать с основной версией репозитория для тестирования и разработки локально.

#### Шаг 2: Создание новой инстанции в PrismLauncher
1. Откройте [PrismLauncher] и нажмите на кнопку **`Add Instance`**.
2. В поле **Name** введите название **`TerraFirmaGreg-Modern`**.
3. Выберите версию Minecraft **`1.20.1`** и версию **`Forge 47.2.6`** — именно эти версии необходимы для корректной работы модпака.

> [!TIP]  
> ![Интерфейс для создания новой инстанции в PrismLauncher](https://github.com/TerraFirmaGreg-Team/.github/blob/main/wiki/new_instances.png?raw=true)

#### Шаг 3: Очистка папки проекта
1. Найдите папку инстанции в директории PrismLauncher по пути **`TerraFirmaGreg-Modern/minecraft`**.

> [!TIP]  
> Для быстрого доступа нажмите правой кнопкой по инстанции и выберите **`Folder`**.  
> ![Папка инстанции в PrismLauncher](https://github.com/TerraFirmaGreg-Team/.github/blob/main/wiki/prism_folder.png?raw=true)

> [!WARNING]  
> Удалите все файлы и каталоги внутри папки `minecraft`, чтобы избежать конфликтов версий и остатков старых данных.

#### Шаг 4: Клонирование репозитория в пустую папку
Если вы не клонировали репозиторий на шаге 1, выполните следующие действия:

**Способ A: GitHub Desktop**  
1. Откройте [GitHub Desktop] и авторизуйтесь.  
2. Выберите **File → Clone repository...**  
3. На вкладке **URL** введите:  **`https://github.com/TerraFirmaGreg-Team/Modpack-Modern.git`**
4. В поле **Local Path** выберите папку `TerraFirmaGreg-Modern/minecraft`, созданную на Шаге 2.  
5. Нажмите **Clone**.

**Способ B: Terminal / cmd**  
1. Откройте **terminal** или **cmd** в корневой директории папки `TerraFirmaGreg-Modern`.  
2. Выполните команду:
  ```bash
   git clone https://github.com/TerraFirmaGreg-Team/Modpack-Modern.git "minecraft"
  ```
  Эта команда создаст папку minecraft внутри TerraFirmaGreg-Modern и скачает туда файлы из репозитория.

> [!TIP] 
> Такой подход позволяет работать с основной версией репозитория для тестирования и разработки локально.

#### Шаг 5: Синхронизация зависимостей через Pakku
1. Откройте **terminal** или **cmd** в корневой директории папки **`TerraFirmaGreg-Modern/minecraft`**.
2. Выполните следующую команду:
```bash
  pakku fetch
```
> [!TIP]
> Эта команда загрузит все необходимые файлы проекта в папку с модпаками. Учтите, что команда может отличаться в зависимости от способа установки Pakku.

#### Шаг 6: Работа с ветками и создание Pull Request
Есть два подхода для создания Pull Request: через терминал и через GitHub Desktop.

**Назначение веток**
  - **`main`:**
    - Эта ветка содержит стабильную, протестированную и релизную версию проекта. 
    - В ней должны находиться только изменения, прошедшие полный цикл проверки. 
    - Принимать изменения могут участники команды [Dev-Modern], требуется одобрение хотя бы одного.

  - **`dev`:**
    - Основная ветка для разработки. Здесь интегрируются новые функции, исправления ошибок и экспериментальные изменения. 
    - После тестирования изменения из dev могут быть перенесены в ветку main для выпуска новой версии. 
    - Принимать изменения могут участники команды [Contributor-Modern], требуется одобрение хотя бы двух.

  - **`feature/bugfix-branch`:**
    - Например, (`feature/add-custom-quest`) или (`bugfix/fix-launch-crash`). 
    - Рекомендуется создавать отдельные ветки от dev для разработки конкретных функций или исправления ошибок. 
    - После завершения работы их следует слить обратно в dev. 
    - Создавать ветки в основном репозитории могут все участники команды [Contributor-Modern].

**Процесс создания Pull Request**

**Способ A: GitHub Desktop**

1. **Создание новой ветки:**
   - Откройте [GitHub Desktop] и убедитесь, что выбран ваш локальный репозиторий **`TerraFirmaGreg-Modern`**.
   - В верхнем меню выберите **`Branch → New Branch...`**.
   - В появившемся окне введите имя для вашей новой ветки (например, **`feature/add-custom-quest`** или **`bugfix/fix-launch-crash`**).  
   - Нажмите **`Create Branch`**. Теперь вы находитесь в новой ветке, созданной от ветки **`dev`**.

2. **Внесение и фиксация изменений:**
   - Внесите нужные изменения в проекте через ваш любимый редактор кода (например, [Visual Studio Code]).
   - Вернувшись в GitHub Desktop, перейдите на вкладку **`Changes`**, где вы увидите список изменённых файлов.
   - Добавьте описание своих изменений, введите сообщение коммита и нажмите **`Commit to <имя_ветки>`**.

3. **Публикация ветки:**
   - После фиксации изменений нажмите кнопку **`Push origin`** в правом верхнем углу GitHub Desktop. 
   - Это отправит вашу новую ветку на GitHub.

4. **Создание Pull Request:**
   - После успешного пуша [GitHub Desktop] предложит вам кнопку **Create Pull Request** или ссылку **View on GitHub**. Нажмите её.
   - В открывшемся веб-интерфейсе GitHub убедитесь, что:
     - Базовая ветка для слияния установлена как **`dev`** основного репозитория.
     - Заголовок и описание Pull Request содержат подробное описание вносимых изменений, а также при необходимости ссылки на связанные Issues.
   - Нажмите **Create Pull Request** для отправки запроса на слияние ваших изменений в ветку **`dev`**.

**Способ B: Использование terminal / cmd**

1. **Синхронизация с upstream:**
  - Убедитесь, что ваш локальный репозиторий актуален. Если вы уже настроили remote upstream (официальный репозиторий), выполните:

  ```bash
    git checkout dev
    git pull upstream dev
  ```
2. **Создание новой ветки для изменений:**
  - Из ветки dev создайте новую feature или bugfix ветку:

  ```bash
  git checkout -b feature/имя-фичи
  ```
  - Назовите ветку так, чтобы было ясно, что в ней содержится (например, feature/add-custom-quest или bugfix/fix-crash-on-launch).

3. **Внесение изменений:**
  - Делайте изменения в коде, сопровождая их коммитами с понятными сообщениями:

  ```bash
  git add .
  git commit -m "Краткое описание внесённых изменений"
  ```
4. **Отправка ветки на GitHub:**
  - Запушьте свою ветку в свой форк:

  ```bash
  git push origin feature/имя-фичи
  ```

5. **Создание Pull Request:**
  - Перейдите на страницу вашего форка на GitHub.
  - Нажмите кнопку Compare & Pull Request напротив только что запушенной ветки.
  - Убедитесь, что в качестве базовой ветки выбран dev основного репозитория.
  - Заполните заголовок и описание Pull Request, упомяните, какие проблемы решает данный PR, и, если возможно, укажите ссылки на соответствующие Issues.
  - Отправьте запрос, нажав Create Pull Request.

> [!TIP]
> Если у вас возникнут вопросы по оформлению Pull Request или вы не уверены, с какой веткой проводить слияние, обратитесь к документации проекта или свяжитесь с командой через [Discord].

#### Шаг 7: Обработка и вливание Pull Request
1. Рассмотрение Pull Request:
  - После создания Pull Request он попадает в очередь на рассмотрение членами команды.
  - Участники [Dev-Modern] (для слияния в main) или [Contributor-Modern] (для слияния в dev) просматривают внесённые изменения, оставляют комментарии и, при необходимости, запрашивают доработки.

2. Внесение корректировок:
  - Если требуются изменения, автор PR вносит корректировки в свою ветку, и обновлённый коммит автоматически появляется в открытом запросе.

3. Одобрение:
  - После внесения всех необходимых правок и получения положительных отзывов от рецензентов PR считается одобренным.
  - Для слияния изменений в main требуется минимум одно одобрение от участников команды [Dev-Modern]. 
  - Для слияния в dev – минимум два одобрения от участников команды [Contributor-Modern].

4. Слияние Pull Request:
  - После одобрения уполномоченный участник или мейнтейнер выполняет слияние PR (при помощи Squash and Merge, согласно правилам проекта).
  - После успешного слияния рекомендуется удалить ветку, чтобы поддерживать чистоту репозитория.

5. Пост-слияние:
  - Слияние PR запускает процессы сборки и тестирования, чтобы убедиться в стабильности внесённых изменений.
  - Если после слияния обнаружены проблемы, создаётся новый Pull Request для их исправления.

---

### 3. Дополнительные рекомендации

- #### Правила семантического версионирования:
    - The project follows [Semantic Versioning](https://semver.org/).
    - **Patch**: Исправлены ошибки и небольшие изменения (`1.0.0` → `1.0.1`)
    - **Minor**: Новые функции, которые не нарушают совместимость (`1.0.0` → `1.1.0`)
    - **Major**: Критические изменения (`1.0.0` → `2.0.0`)

- #### Работа с Git: 
    - Создавайте отдельные ветки для каждой новой функциональности или исправления ошибок. 
    - Регулярно синхронизируйте свой форк с оригинальным репозиторием для избежания конфликтов. 
    - Используйте понятные сообщения коммитов для лучшего понимания изменений.

- #### Отладка и тестирование: 
  - Перед внесением ваших изменений убедитесь, что проект запускается без ошибок. 
  - Проверяйте логи PrismLauncher для выявления возможных проблем. 
  - Использование Visual Studio Code с расширением [ProbeJs] поможет быстрее обнаруживать и устранять ошибки.

- #### Документация и обсуждение: 
  - Если у вас возникли вопросы или проблемы, обратитесь к разделу Issues или Discussions на GitHub проекта, а так же форумах [Discord]. 
  - Коллективное обсуждение часто приводит к нахождению оптимальных решений и улучшению проекта в целом.

- #### Совместная разработка: 
  - Всегда тестируйте интеграцию ваших изменений с основным проектом. 
  - Перед отправкой Pull Request важно убедиться, что ваши изменения не нарушают работу модпака и соответствуют [внутренним соглашениям по коду](CODE_OF_CONDUCT.md).

- #### Локализация: 
  - Если вы ищете локализацию Modpack на языке, пожалуйста, не стесняйтесь перейти к [Tools-Modern]

---

<!-- Links: -->
[TerraFirmaGreg-Modern]: https://github.com/TerraFirmaGreg-Team/Modpack-Modern
[Dev-Modern]: https://github.com/orgs/TerraFirmaGreg-Team/teams/dev-modern
[Contributor-Modern]: https://github.com/orgs/TerraFirmaGreg-Team/teams/contributor-modern
[Tools-Modern]: https://github.com/TerraFirmaGreg-Team/Tools-Modern
[PrismLauncher]: https://prismlauncher.org
[Visual Studio Code]: https://code.visualstudio.com
[Git]: https://git-scm.com
[GitHub Desktop]: https://desktop.github.com/download
[Pakku]: https://juraj-hrivnak.github.io/Pakku/home.html
[ProbeJs]: https://marketplace.visualstudio.com/items/?itemName=Prunoideae.probejs
[Discord]: https://discord.gg/AEaCzCTUwQ
