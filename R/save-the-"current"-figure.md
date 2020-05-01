## Save the "current" figure

If you wish to save the exact representation of the figure that you see in the RStudio's
plot viewer, including all the size resizes and adjustments you have done, use:

```
dev.print(pdf, file="filename.pdf");
```

This will copy the image exactly as you see it on screen.

[Source](https://stackoverflow.com/questions/7144118/how-to-save-a-plot-as-image-on-the-disk)

Happy hacking!
