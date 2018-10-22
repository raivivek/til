## Using Microsoft R Open 3.5.X 

R is a popular programming language among statisticians, specially in
computational sciences. Of course, a primary reason for the popularity and wide
adoption is that it is open-source and freely available --- supported by a great
community of developers and consumers.

However, there exist multiple channels that distribute an implementation of
R (the language specification) besides the freely available GNU GPL version.

Microsoft R Open is an enhanced distribution of R provided by the Microsoft
Corporation. The distribution maintains 100% compatibility with existing base-R
distribution, and thus, should run all scripts, packages, and applications that
work with base R.

In the *enhancements* are:

Plus these key enhancements:

* Multi-threaded math libraries that brings multi-threaded computations to R.
* A high-performance default CRAN repository that provide a consistent and static set of packages to all Microsoft R Open users.
* The checkpoint package that make it easy to share R code and replicate results using specific R package versions.

When working on a server, installing two versions of R side-by-side can be
tricky. Often it is desirable to maintain an older/legacy version that you know
works well with certain packages (for reproducibility or old time's sake).
I have found that `conda` works well for this problem.

For example,

```
conda create -n mro_env mro-base=3.5.1 r-essentials
```

will install MRO-3.5.1 along with "essential" R-packages (think tidyverse!). For
using this version of R, simply run `source activate mro_env` and `source
deactivate` to deactivate.

Happy hacking!
