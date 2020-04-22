## Evaluating string as an expression

When creating a reusable R-script, I try to make it as flexible as possible to my future
self. This means not hard-coding anything in the code and taking as many user inputs as
possible.

However sometimes, it is not possible to capture the flexibility I desire without being
overwhelmed by too many command-line options. In such a case, I would prefer to
pass an expression that can be directly evaluated by the code (not safe!). For instance,
suppose you want to pass arbitrary expressions to filter a data frame.

Consider the following code:

```
iris %>% filter(Petal.Width < 4)
```

This would return a tibble with rows where `Petal.Width` is less than 4 from the iris
dataset. But what if you want the user (and yourself) to specify how the rows are filtered
arbitrarily. The following code does not work:

```
filter_exp <- "Sepal.Width < 3"
iris %>% filter(filter_exp)
```

Neither does unquoting the expression using `!!` works:

```
filter_exp <- "Sepal.Width < 3"
iris %>% filter(!!filter_exp)
```

The approach here is first to parse the string into an R expression and then use the `!!`
operator to format it to tidyr specification. To make this easy, there's a R-package
called `friendlyeval` that lets you do it quite easily.

For example,

```
iris %>%
  filter(!!friendlyeval::treat_string_as_expr("Petal.Width < 4")
```

`friendlyeval` has a few other evaluation options as well, and I encourage you to explore
that.

Happy hacking!
