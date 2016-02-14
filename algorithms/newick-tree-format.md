# Newick Tree Format

Today, while solving a [problem](http://rosalind.info/problems/nwck/) on
[Rosalind](http://rosalind.info), I learned about the [Newick
format](https://en.wikipedia.org/wiki/Newick_format). It is an alternative to
adjacency list representation and allows one to describe a tree using only comma
and parentheses.

It is more commonly used for trees whose internal nodes are unlabeled.

For example, the following tree will be represented as `(((e,f)b),((g,h)c))a`

```
   a
 /   \
 b   c
/ \ / \
e f g h
```


Additionally, I also learned about an interesting idea using in molecular
phylogenetics. That is, the [law of
parsimony](https://en.wikipedia.org/wiki/Maximum_parsimony_%28phylogenetics%29).
It is an optimality criterion that essentially says, *evolutions tends to prefer
the shortest path to a change*.
