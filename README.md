# PhabControl
### Google Chrome extension for [Phabricator][phabricator] web elements control.
Since the implementation of Phabricator does not allow to hide the comments in the diff, I've write this Chrome extension in order to achieve that and others functionalities.

Installation (dev)
----
0. Fork this repo
1. Visit _chrome://extensions_ in your browser (or open up the Chrome menu by clicking the icon to the far right of the Omnibox:  The menu's icon is three horizontal bars. and select **Extensions** under the **Tools** menu to get to the same place).
2. Ensure that the Developer mode checkbox in the top right-hand corner is checked.
3. Click *Load unpacked extension…* to pop up a file-selection dialog.
4. Navigate to the directory in which your extension files live *(app)*, and select it.
5. Set Phab URL by clicking in *Options* link in the **PhabControl** extension item in the *Extensions* menu. Ex: If the url of your Phabricator site is: *http://phab.mydev.com* you can set just **phab** or **phab.mydev**.

Keybindings
-----
By default, you can execute _Show_ and _Hide_ all comments directly from your keyboard.
* **Hide**: _Alt+Shift+P_
* **Show**: _Alt+Shift+L_

These are _suggested_ combinations, if you have them already taken you can configure your own by going to the _Extensions_ config and click _Keyboard shortcuts_ link at the bottom and select your _weapon of choice_.

TODOs
----
* Identify who are the commentators
* Hide/Show comments from specific commentators
* Hide/Show comments from author
* Pack extension to Chrome Store
* ~~Keybindings FTW!~~


License
----

MIT License (MIT)
Copyright (c) 2016 Marcelo Romagnoli


[phabricator]: <http://phabricator.org/>
