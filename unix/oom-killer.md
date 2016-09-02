OOM Killer
----------

What happen when you try to run a new process on a machine which is already
loaded with tons of other processes and no available resources?

This is not a good news especially if you are running long running tasks and
suddenly you discover that your process has been killed. Argh!

Out of Memory Killer, or fondly called OOM Killer is a kernel mechanism to free
up resources when all else fails. The mechanism picks up a process based on an
elaborate criteria of how long it’s been running, user privileges, memory
consumed, nice status, disk operations etc. and terminates it.

Essentially, OS should have to kill the minimum number of processes to free up
most amount of memory (until the system becomes stable).

For this, the OS maintains a `score` for each running process. The score is
called OOM_Score (available in `/proc/<pid>/oom_score`

Also, the behavior of how OS handles extra memory requests is configurable. An
educative post in this regard is available on [SO](http://unix.stackexchange.com/questions/136291/will-linux-start-killing-my-processes-without-asking-me-if-memory-gets-short).
