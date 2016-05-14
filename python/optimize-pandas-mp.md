# `multiprocessing` module in Python

Multiprocessing module in Python effectively allows you to side step the
limitations of Global Interpreter Lock (GIL) and utilize multiple process to
parallelize your code and achieve faster computation.

For example, when handling very large data using `pandas`, you may have several
steps that perform dataframe wide `apply` operations. Since this operation can
be independently performed on the chunks of the dataframe and then pooled
together (hint: that’s a reasonable way to spot if you can leverage parallel
computation), we can use `multiprocessing` module to run the tasks on different
processors.

Here’s a snippet:

```
import multiprocessing as mp
import numpy as np
import pandas as pd
import pandas.util.testing as pdt

pool = mp.Pool(processes=16)
parts = np.array_split(big_df, 16) # split into 16 parts, may be unequal
pool_results = pool.map(process, parts) # call process() on each part
pool.close()
pool.join()

# join across different axis, if desired
result_df = pd.concat(pool_results, axis=0)

# good idea to test
pdt.assert_series_equal(result_df[‘column’], big_df[‘column’])
```

Here’s a performance gain sneak-peak. I was handling pandas dataframes having
rows in the range of 100 million rows. On a 40 CPU cluster with 128 GB RAM, it
took around 30-40 minutes. After using the code above-

```
real    2m42.119s
user    30m5.374s
sys    0m18.445s
```
