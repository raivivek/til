## Using Hammerspoon on macOS for quick tasks

[Hammerspoon ](https://www.hammerspoon.org/) is a powerful automation engine that allows
you to control your OS (in this, macOS) using Lua scripting language. For instance,
launching any complicated set of steps with a hotkey, automating notifcations based on
system events, or even simulating a window manager like i3/awesome-wm in macOS.

After installing Hammerspoon, you can configure `$HOME/.hammerspoon/init.lua` with the
scripts you want to run. Thanks to open source community, there are many plugins freely available
(called _Spoons_) to use for variety of tasks.

Here's how I use Hammerspoon:

* Added a shortcut to launch "Asana" app (running through Flotato) and quick add a task

```
hs.hotkey.bind({"ctrl"}, "n", function()
   local app = hs.window.find("Asana")
   if app then
       app:focus()
   else
       hs.application.launchOrFocus("Asana")
   end

   hs.eventtap.event.newKeyEvent("tab", true):post()
   hs.eventtap.event.newKeyEvent("q", true):post()
   hs.eventtap.event.newKeyEvent("q", false):post()
   hs.eventtap.event.newKeyEvent("tab", false):post()
end)
```

This basically allows me to press Control + N anywhere to quickly focus the Asana window
and launch the quick task add pane. Very neat!

* You can also configure to launch/focus your favorite terminal. For example, here's how I have it
configured for Kitty.

```
hs.hotkey.bind({"ctrl"}, "space", function()
    local app = hs.application.get("kitty")
    if app then
        if not app:mainWindow() then
            app:selectMenuItem({"kitty", "New OS window"})
        elseif app:isFrontmost() then
            app:hide()
        else
            app:activate()
        end
    else
        hs.application.launchOrFocus("kitty")
    end
end)
```

* Add TimeMachineProgress spoon -- shows how far your backup is done when it's active.

```
hs.loadSpoon("TimeMachineProgress")
spoon.TimeMachineProgress:start()
```

Happy hacking!
