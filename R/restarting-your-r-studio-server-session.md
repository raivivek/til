## Restarting your R Studio server session

Rstudio is an integrated development environment (IDR) for R with many useful features
such as code completion, debugging, and tools for plotting and exploration of your data.
You can setup Rstudio on your local machine or use Rstudio Server which allows you to
setup the IDE environment on a remote server and then use the interface through
a web-browser.

Recently, my remote Rstudio server session was crashing repeatedly and restarting R or
quitting the session was not helping. Thanks to @albanus, here is what helped:

* Delete your active session from `~/.ression`
* Kill the `rstudio` process for your username -- for example `rstudio -u USER --launcher-toke ABCDE`

These resovled the issue for me. However, note that **you will lose any active session
data**.

Happy hacking!
