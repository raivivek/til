GNU sort has a '-u' option to output only unique values for the  columns used for sorting
(without the need to pipe through the uniq  program).

Example: to output only unique lines based on chrim/start/end (columns 1/2/3),  run:

```
sort -k1,1 -k2,2n -k3,3n -u
```

If you want to include the strand as well, add column 6 to the sort key:

```
sort -k1,1 -k2,2n -k3,3n -k6,6 -u
```

other columns which are not used as sort keys (e.g name/column 4) will  not affect the
uniqueness: if two lines have the same coordinates but  different names - only one of them
will be printed.

[Source](https://groups.google.com/forum/#!topic/bedtools-discuss/2o7oUgBwebw)
