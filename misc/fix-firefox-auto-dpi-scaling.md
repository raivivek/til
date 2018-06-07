## Fix Firefox auto DPI scaling

When using Firefox on a multi-monitor setup where one of your screens (typically
the laptop screen such as from Macbook) has very high DPI, the scaling of
Firefox's content and menu items may not be appropriate when moved from one
screen to the other.

By setting the `layout.css.devPixelsPerPx` to a value larger than 1 in
`about:config`, one can adjust the scaling of the browser. This value, however,
is not specific to the screen.

There are plugins such as AutoHiDPI that solve this issue but they are no longer
supported in Firefox 57+.

Currently, setting `layout.css.devPixelsPerPx` to `-1` seems to have fixed this
for me.
