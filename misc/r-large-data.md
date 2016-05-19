# Large datasets in `R`

I learned that `R` and especially `Rstudio` can be very helpful for quick
plotting and gaining and understanding of the data, along with generating really
nice figures (who doesn’t know the fame of `ggplot2` library).

In my analysis, I was routinely handling files of the order of 500-1000 MB,
containing millions of lines of data, loading which into the memory and plotting
was turning out to be too slow on my 8 GB machine (using the `read.table`
function).

A quick search brought me to the
[post](http://stackoverflow.com/questions/1727772/quickly-reading-very-large-tables-as-dataframes-in-r)
where I discovered the `data.table` library. The library provides fast access
data frame to load files, almost **10 fold** faster. And to my surprise, `fread`
really did process my entire file in a couple of seconds. It also shows a handy
notification telling you how much of the data has been parsed, so that you are
not kept in hell wondering if something is happening or not.

Also, I learned few really nice tricks of plotting (from the experts) which
I will probably share in my blog posts at [shorts](https://vivekiitkgp.github.io)
