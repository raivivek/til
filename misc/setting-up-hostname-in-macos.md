## Setting up hostname in macOS

Using System's Preferences to change the computer name did not change the
hostname that is typically displayed inside the terminal. Using `hostname`
might display an auto-assigned and undesirable value.

This is what fixed it:

```
sudo scutil --set ComputerName "newname"
sudo scutil --set LocalHostName "newname"
sudo scutil --set HostName "newname"
```

That's it.
