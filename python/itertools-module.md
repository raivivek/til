# Itertools module

[Itertools](https://docs.python.org/3.5/library/itertools.html) is a Python module that provides a number of iterator building blocks.
An iterator represents a container (collection) of data or objects and provides
ways to iterate over the elements.

Besides native constructs available for iterating through data, the functions of
this module are inspired from functional programming languages and others like
SBML, Haskell etc. These functions act as simple building blocks allowing one to
perform highly specialized actions in easy way.

For example,

```
>>> from itertools import *

>>> product('ABCD', 'xy')
Ax Ay Bx By Cx Cy Dx Dy

>>> permutations('ABCD', 2)
AB AC AD BA BC BD CA CB CD DA DB DC

# square all numbers upto 9
>>> list(imap(pow, range(10), repeat(2)))
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# and many more
```

The Python docs has a section containing useful recipes constructed using these
*high level* functions. In fact, the whole document is a must read for any
Pythonista. 

I used a combinations of `product` and `permutations` today to generate **signed
permutations**. The Wikipedia article of signed permutations, however, is
difficult to comprehend.
