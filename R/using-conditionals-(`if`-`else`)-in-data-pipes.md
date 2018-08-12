## Using conditionals (`if`-`else`) in data pipes

`tidyverse` is a set of packages based on Hadley Wickham's philosphy of doing
data science. It provides consistent and gracefully interacting methods to tidy
data, wrangle data, and visualize results; and is indispensable to almost any
analysis I carry out these days.

The tidyverse package also provides a set of convenient operators (through the
`magrittr` package) to manipulate data and make the code more readable. One of
the commonly used operators is the "pipe" operator (`%>%`) allows you to pipe
data through a chain of function calls.

Consider this pseudo example:

```
the_data <-
  read.csv('/path/to/data/file.csv') %>%
  subset(variable_a > x) %>%
  transform(variable_c = variable_a/variable_b) %>%
  head(100)
```

Four operations are performed to arrive at the desired data set, and they are
written in a natural order: the same as the order of execution. Also, no
temporary variables are needed. If yet another operation is required, it is
straight-forward to add to the sequence of operations wherever it may be needed.

Pretty straight-forward.

However, what to do if you want to pipe data according to a conditional? That
is, maybe use certain dataset when condition is true otherwise use the other
one?

This can be done using `.` and `if` (or `ifelse`) as follows:

```
X %>% 
add(1) %>% 
 {if(Y) add(1) else .}
```

Or perhaps,

```
X %>%
  { if (cond) group_by(., Z) else . } %>%
  ...
```

[Read more](https://stackoverflow.com/questions/30604107/r-conditional-evaluation-when-using-the-pipe-operator)
