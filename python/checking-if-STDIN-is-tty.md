## Check if `STDIN` is `tty`

When scripting, a common use case scenario might be to alter the behavior of
your script based on whether the input data is received from the `STDIN` through
a pipe, or typed directly in the terminal (`tty`).

In Python, it is fairly easy to do it. For example,

```
import os, sys
if os.isatty(sys.stdout.fileno()):
    ...
```

Or,

```
import sys
sys.stdout.isatty()
```

In Ruby, a language I frequently use, it would be:

```
STDIN.tty?
```

Succint!

Happy Hacking!
