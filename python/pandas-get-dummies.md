## `pandas.get_dummies`: Vectorize category variables

Imagine you have a dataframe with a column containing categorical variables. For
example,

```
>>> df
   num_1  num_2 cat
0      1      2   a
1      4      5   b
2      5      6   a
3      9      8   c
```

It’s a really common to observe similar patterns of data in our regular
analysis. However, it’s often problematic to directly work with categorical
behavior with machine learning algorithms. For this purpose, it’s useful to
vectorize or convert these categorical behavior in some sort of indicator
behavior. For example, the first row may be represented as:

```
   num_1  num_2      a      b      c
0      1      2      1      0      0
```

Today, I learned that there exists a `pandas` function to do *exactly* this
- [`pandas.get_dummies`](http://pandas.pydata.org/pandas-docs/stable/generated/pandas.get_dummies.html)

```
>>> pandas.get_dummies(df)
   num_1  num_2  cat_a  cat_b  cat_c
0      1      2      1      0      0
1      4      5      0      1      0
2      5      6      1      0      0
3      9      8      0      0      1
```
