## Modifying `ggplot2` objects after creation

It happens more than often that a packages implements a plotting function of
itself (often routed as a convenience for exploratory data analysis, though in
my opinion, having access to underlying data directly would be way more useful)
for quick visualization.

However, what if you don't like the way it's plotted? Maybe you need to change
the `alpha` values, or assign different labels or colors? Adding new geoms to
the ggplot object does not work.

Today I learned that we can deconstruct the `ggplot2` object into its plot
constituents and modify them. For example, consider you can only access `p` and
want to add colors.

```
p <- ggplot(iris) + geom_point(aes(Sepal.Width, Petal.Width))
p
```

In that case,

```
obj_p <- ggplot_build(p)
obj_p$data[[1]]$colour <- 'red'

new_p <- ggplot_gtable(obj_p)
plot(new_p)
```

The `new_p` should have the points colored `red`.
