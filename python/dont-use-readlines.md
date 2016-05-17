# Don't use `f.readlines()`

I have been using Python for quite from time and the code below was a typical
part of my routine.

```
with open(file, 'r') as f:
    for line in f.readlines():
        # do stuff
```

However, today while investigating an issue related to using `gzip` module in
Python, I came across a [post](http://stackoverflow.com/questions/14655982/cleaner-way-to-read-gunzip-a-huge-file-in-python) that came as bright ray of enlightenment to me.
Using `f.readlines()` is actually slow and more memory intensive way of doing
something which can be achieved out of the box without it.

That is, in place of what I wrote above,

```
with open(file, 'r') as f:
    for line in f:
        # do stuff
```

Here's the accompanied text:

> A `file` is an `iterable` full of lines, just like the `list` returned by
> readlines—except that it's not actually a list, it generates more lines on
> the fly by reading out of a buffer. So, at any given time, you'll only have
> one line and a couple of buffers on the order of 10MB each, instead of a 25GB
> list. And the reading and decompressing will be spread out over the lifetime
> of the loop, instead of done all at once.


Awesome!
