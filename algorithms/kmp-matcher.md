# KMP Algorithm

Today I learned about the linear complexity string matching algorithm called the
[KMP algorithm](https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm). The algorithm, compared to its naive counterpart performs
matching in at most `2n` comparisons where `n` is the length of the text string.
However, this is possible with a pre-processing step which involves creating
a *failure array* of the pattern to be matched.

Here’s a Python snippet that creates a failure array of the pattern:

```
def failure_array(rs):
    lsp = [0]

    for c in rs[1:]:
        j = lsp[-1]  # Start by assuming we're extending the previous LSP
        while j > 0 and c != rs[j]:
            j = lsp[j - 1]
        if c == rs[j]:
            j += 1
        lsp.append(j)
    print(*lsp)

>>> failure_array(‘aabaac’)
0 1 0 1 2 0
```

Essentially, the algorithm exploits the fact that the information of where the
next match should start is contained in the pattern itself and can be computed
independent of the text to be matched.

Using the information in the array, a fast match can be performed.

See this [lecture](https://www.youtube.com/watch?v=EEjNb9yUv1k) for
comprehensive detail.
