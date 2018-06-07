## Care with `string.split()`

Routinely used function in Python `.strip()` has a slight nuance to it that I
learned only today. By default, the function strips the whitespace and newline
characters from both the ends of a supplied string. For example,

```python
ex = "  Hello World\n"
ex.strip()
# "Hello World"
```

Alternatively, one can use a specific character that needs to be trimmed off
the sides of the string. For example, a `/` or `\r\n` or `.`. Following this, I
was under the impression that using a string phrase would work the same and it
would remove that phrase from the ends of the string. Something like this:

```python
ex = "//Hello World"
ex.strip('/')  # "Hello World"
ex.strip('World')  # "//Hello "
```

However, the last example, though looks innocous, works not the way I thought
it does. `strip()` actually treats the string argument as a list of characters
and removes them one-by-one from the terminals of the string until it doesn't
find a match!

```
ex = "Hello World"
ex.strip('World')  # "Hello "
ex.strip('Worl')  # "Hello World"
ex.strip('dWorl')  # "Hello "
```

I guess I need to pay more attention.

