# Writing unbuffered output

Running a Python script with unbuffered output is often useful. For example,
there's a script whose output I wish to examine as it produces data; or to
ensure that if the program fails midway then the already computed result is
printed. See [Buffered vs Unbuffered
I/O](https://stackoverflow.com/questions/1450551/buffered-vs-unbuffered-io) on
StackOverflow.

There are several ways to do this:

```
python -u <script>
```

This run the Python in unbuffered so any lines will be written as soon as they
are generated before continuining. Unfortunately, this doesn't work in a Shebang
line (a limitation of shebang in general).

The second way is to open a file-handle in unbuffered more, which may appear to
be more complicated than it should be. As usual, the best place to look for
solutions is
[StackOverflow](https://stackoverflow.com/questions/107705/disable-output-buffering).


However, if you are running Python 3.3 or greater, you can use `print` with
`flush=True` option.

For example,

```
print("Hello World!", flush=True)
```

Happy hacking!
