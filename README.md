﻿# Lockpick

Lockpick is an easy-to-use software for MacOS that allows you to open applications from unidentified developers without the administrator password. A practical usage for this is to install Minecraft Forge without needing the admin password.

## Usage
To use Lockpick, simply click on the application and click "Crack file restrictions".  After a few seconds, a popup should show up asking for files. Select the file(s) of the applications that need to be opened. When the message appears, simply go back to Finder, find the application and double-click it to launch. There should be no errors.

## Installation
To install Lockpick, download the zip [here](https://github.com/DeviousPear/lockpick/raw/main/build/Lockpick.zip).
Then, unzip it. When it is opened, you should try to open the app by double-clicking. If that doesn't work, go into terminal and type:
```
xattr -d com.apple.quarantine "/path/to/application"
```


When typing the path to the application, don't forget to append it with `.app`, which is what all MacOS applications are ended with (even if it doesn't show up like that in Finder.)

## How does Lockpick work?
Lockpick works exactly the same way that the command used to allow you to open the app works: By removing the X attribute `com.apple.quarantine`. This attribute is what causes MacOS to stop you from opening the file, and, amazingly, does not require the administrator password to remove!


Happy Hacking!
    