## `pkg-config` for managing compilation

`pkg-config` is a program used to retrieve information about installed libraries
in the system. If you are the administrator with `sudo` privileges on your
machine, you can install all development libraries and headers to system `$ROOT`
and assume that any compilation procedure will look for them when needed.

However, working on a remote server without root privileges makes you work
around a lot of things. For example, assume you need to build a program from
source which depends on several libraries. Typically, you can download the
required dependencies and provide the path to `INCLUDE` and `LIB` headers to the
compiling program. However, `pkg-config` makes this easy.

Here is a typical usage scenario in a Makefile:

```
program: program.c
    cc program.c $(pkg-config --cflags --libs gnomeui)
```

The code of `pkg-config` is the information stored in `.pc` files on your
system whenever a library is installed (not sure if all library installations
would support this). When using your own set of libraries for various reasons
such as not having permission, you can set (for my system) `PKG_CONFIG_PATH` to
point to wherever you have installed your libraries. The installation path for
libraries again can be controlled by using `--prefix` during `./configure`.

For example,

```
$ # required lib
$ cd mylib/
$ ./configre --prefix=$HOME/.local
$ make install
...
...
$ export PKG_CONFIG_PATH="$HOME/.local/lib:$PKG_CONFIG_PATH"
$ cd program/
$ ./configure --prefix=$HOME/.local
$ make install
$ program -h
...
```
