## Changing priority of running programs

Unix provides a way to change the CPU and IO priority of tasks executed by the
user. In fact, every task executed on the machine has a pre-set priority called
"niceness". For example, if you look at the "NI" column of `htop`, you will
notice that some programs owned and run by `root` have a value of 20 while most
programs run by you have a 0. That is the "niceness" value.

When executing long-running programs, or programs that are light on CPU but
have intensive disk usage, you can slow down the access and operation of
machine for everyone else on the server. "Nicecess" allows you to adjust the
priority given to the program by the CPU and hence may free up resources for
others at the cost of increased execution time.

```
$ # launch the program with priority from 0 (highest, default) to 19 (lowest)
$ nice -n [0-19] <executable>

$ # launch the program with different IO priority
$ # best priority
$ ionice -c1 <executable>
$ # best effort
$ ionice -c2 <executable>
$ # lowest, run when when disk is idle
$ ionice -c3 <executable>
```

The `ionice -c2` command also allows you to set sub-priority using `-n`. For example:

```
# 0 best priority, 7 lowest priority
$ ionice -c2 -n[0-7] <executable>
```

Of course, you can use both `nice` and `ionice` to launch the program to adjust
both the IO and CPU priority

```
$ nice -n4 ionice -c3 <executable>
```

If you have already started a program without nicing it, you can adjust the
niceness as follows:

```
$ renice -n <new-niceness> <pid>
$ ionice <new-niceness> -p <pid>
```

Note that you can **only reduce the priority** of a process, if you are not the
superuser.

* [Notes on nice/ionice: KossBoss](http://www.kossboss.com/?p=1097)
