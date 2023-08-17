# Russian text stresser Chrome extension

This is a Chrome extension for stressing Russian websites using a locally running instance of my text stresser.

### Installation instructions

1. Download this repository as a .zip archive: https://github.com/Vuizur/russian-text-stresser-extension/archive/refs/heads/main.zip
2. Unpack the .zip file so that you get a normal folder
3. Go to chrome://extensions/
4. Check the "Developer mode" checkbox on the top right
5. Click on the "Load unpacked" option on the extension page
6. Select the unpacked folder
7. For Windows
   1. Download the Russian-Text-Stresser program: https://github.com/Vuizur/add-stress-to-epub/releases
   2. Unpack the program
   3. Execute "#Chrome extension server.exe"
   For other Systems:
   1. You need to clone https://github.com/Vuizur/add-stress-to-epub and execute app.py after installing dependencies with poetry
8. Visit any website with Russian text such as lenta.ru and visit how the stress marks are added

Have fun!

### TODO:
* Create a font blacklist and automatically replace fonts that don't properly support combining diacritics
* Try to add to chrome web store if possible