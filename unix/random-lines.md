# Fetch random lines from file

Today during a bunch of bioinformatics analysis task, I had to obtain a bunch of
lines randomly from the file. Guess what? My instinct was correct. There exists
a nice tool **exactly** for this task provided in GNU tools package
- [`shuf`](http://linux.die.net/man/1/shuf).

Using `shuf`, to get N random lines:

```
shuf -n N input > output
```

Another way is to use `sort` tool to sort the file randomly and then pick the
first N lines. For example:

```
sort -R input | head -n N > output
```

Awesome!

A more fruitful discussion with respect to efficiency of different tools can be
found on
[StackOverflow](http://stackoverflow.com/questions/9245638/select-random-lines-from-a-file-in-bash).
