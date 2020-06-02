## `stack` and `unstack`

If you have a named vector in R, you can quickly convert it to a data frame using `stack`
and `unstack` group of functions. This works better than using `as.data.frame` or other
gimmicks.

Neat and easy to remember.

Consider,

```
> example_vec <- structure(1:3, c('a', 'b', 'c'))
a b c
1 2 3

> stack(example_vec)
  values ind
1      1   a
2      2   b
3      3   c
```

Very nice!


```
> help(stack)

Stack or Unstack Vectors from a Data Frame or List

Description:

     Stacking vectors concatenates multiple vectors into a single
     vector along with a factor indicating where each observation
     originated.  Unstacking reverses this operation.

...
```
