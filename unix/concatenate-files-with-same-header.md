## Concatenate files with same header

There's a very handy way to concatenate a large number of files, which are
possibly generated from the same source and share same headers, into one single
file. Of course, this can be done using R or Python but using Unix tools is way
faster.

```
awk 'FNR==1 && NR!=1{next;}{print}' *.csv`
```

Explanation: FNR is the number of lines (records) read so far in the current
file. NR is the number of lines read overall. So the condition 'FNR==1 &&
NR!=1{next;}' says, "Skip this line if it's the first line of the current file,
and at least 1 line has been read overall." This has the effect of printing the
CSV header of the first file while skipping it in the rest.

[Further reading](https://stackoverflow.com/questions/16890582/unixmerge-multiple-csv-files-with-same-header-by-keeping-the-header-of-the-firs/16890695#16890695)
