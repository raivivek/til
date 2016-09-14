# Watch LaTeX file and autocompile


LaTeX is super fun. It really makes your document, resume or thesis, whatever
you are writing, appear clear and well organized. However, it may become a bit
of an issue when you are frequently making adjustments to the layout of the
document and need to preview updates in realtime. If you are using an IDE, then
hopefully it’s not much of an issue to you since many LaTeX editors already
include this feature. However, if you are a command line native, switching back
and forth between document and terminal to recompile files might be a painful
process.

That’s when I found out about the cool feature of `latexmk`.

[latexmk](http://users.phys.psu.edu/~collins/software/latexmk-jcc/) is independent of the editor, really --- it's a script that watches the
files needed to compile a latex document and re-run the compilation when needed.
Configuration is a bit complex, but it is a really useful tool.

Here’s a demo setup taken from this [StackOverflow](http://askubuntu.com/questions/540300/compile-a-latex-file-from-vim-and-not-from-terminal) answer:

```
$pdf_previewer = "start evince";
$pdf_pdf_update_method = 0;
$dvi_mode = 0;
$pdf_mode = 1;
$preview_continuous_mode = 1;
$pdflatex = "xelatex %O %S";
```

Just put this content into a `latexmkrc` file in the root of your LaTeX project
and run `latexmk <your file>` to see its magic. Every saved change triggers an
autocompile and preview in your favorite document viewer (well, evince seems to
work just great!).

I prefer this method over tons of `node` packages and shell scripts out there
cause it really works flawlessly.

Hope you find it useful.
