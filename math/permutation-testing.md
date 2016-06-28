## Permutation testing

> Permutation tests (also called randomization tests) are non-parametric
> procedures for determining statistical significance based on rearrangements of
> the labels of a dataset (Edgington, 1980). A test statistic, which is computed
> from the dataset, is compared with the distribution of permutation values.
> These permutation values are computed similarly to the test statistic,
> however, under a random rearrangement (permutation) of the labels of the
> dataset.

Further,

> As in all statistical hypothesis tests, the significance of a permutation test
> is represented by its P-value. The P-value is the probability of obtaining
> a result at least as extreme as the test statistic given that the null
> hypothesis is true. In permutations tests, the null hypothesis is defined as:
> **the labels assigning samples to classes are interchangeable** (Edgington, 1980).
> Significantly, low P-values indicate that the labels are not interchangeable
> and that the original label configuration is relevant with respect to the
> data. The **P-value is assessed by performing all possible permutations and
> computing the fraction of permutation values that are at least as extreme as
> the test statistic obtained from the unpermuted data.**

However,

> in practical situations, it is (by far) not feasible to perform all possible
> permutations. For example, class labels that represent two classes with 50
> samples each can be permuted in Graphic different ways. Therefore, the P-value
> is approximated by computing a limited number of permutations, say N, and then
> computing the fraction of the N permutation values that are at least as
> extreme as the test statistic. Usually, a pseudocount is added to avoid
> P-values of zero, which occur when the test statistic is never surpassed by
> the permutation values. Theoretically, a P−value of zero is not possible in
> the context of permutation tests: the minimum is 1/N_all, where N_all is the
> number of all possible permutations. This is because one of the permuted label
> configurations is identical to the original one, under which the test
> statistic is computed.

[http://bioinformatics.oxfordjournals.org/content/25/12/i161.full](http://bioinformatics.oxfordjournals.org/content/25/12/i161.full)
