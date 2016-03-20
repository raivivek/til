# Run a command for some time

Today I had to run a script for a limited amount of time before asking it to
terminate. I came across a really handy command line tool already available with
the GNU/Linux - `timeout`.

Running a command for a fixed time is as easy as this:

`timeout 5s scrapy crawl`

```
$ timeout --help
Usage: timeout [OPTION] DURATION COMMAND [ARG]...
  or:  timeout [OPTION]
Start COMMAND, and kill it if still running after DURATION.
```

Happy hacking!
