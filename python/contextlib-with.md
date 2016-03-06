# `contextlib` module

`contextlib` is Python module that add utilities for common tasks involving
`with` statements. And boy! Who does not love the `with` statements. They make
your code concise, human-readable and less bug prone.

One must already be familiar with the code:

```
with open(‘foo.bar’) as f:
  # do stuff with f
  # it automatically closes when you exit

# do something else
```

However, with `contextlib` you can bring this magic to your own methods as well.
For example,

```
from contextlib import closing
from urllib.request import urlopen

with closing(urlopen('http://www.python.org')) as page:
    for line in page:
        print(line)

```

The module provide many such utilities or you can also use the decorator
`@contextmanager` to add same behavior to your own methods. Really neat and
handy!

[Contextlib module](https://docs.python.org/3/library/contextlib.html)
