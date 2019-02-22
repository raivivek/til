## Bin-or-discretize numeric data (ggplot)

One common way to express quantitative relationship between two variables is to
look at their ratio. Specically, by looking at A/B and checking if the resulting
value is > 1 or < 1, one can say that there are more of A than B.

In bioinformatics, a ratio is commonly used to express the relationship between
numerous experimental measures. For example, gene experssion values of two genes
can be expressed using a ratio -- 2.0 would indicate gene A has higher
"expression" than gene B -- where the meaning and relevance of the ratio is
derived from the specific context.

Often, it is useful to express the ratio of two quantities over different bins
or intervals of a measured variable. For instance, you might expect that Gene
A has higher expression than Gene B only when a drug has more than certain dose.
You might also be interested in studying how the expression of two genes change
relative to each other.

For such instances, `ggplot2` provides an easy way to bin your variable.

Consider,

```
library(ggplot2)
ggplot(iris) + geom_bar(aes(cut_number(Sepal.Length, n=5), fill = Species)) 
```

```
> ?cut_interval

cut_interval makes n groups with equal range, cut_number makes n groups with
(approximately) equal numbers of observations; cut_width makes groups of width
width.

...

```
