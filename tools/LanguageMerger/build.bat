@echo off
setlocal

set BASE_OUTPUT=Executables

set RUNTIMES=win-x64 osx-x64 osx-arm64 linux-x64

for %%R in (%RUNTIMES%) do (
    echo Publishing for %%R...
    dotnet publish -c Release -r %%R --self-contained true /p:PublishSingleFile=true -o "%BASE_OUTPUT%\%%R"
)

echo All builds completed!