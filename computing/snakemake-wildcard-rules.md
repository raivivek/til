## Snakemake wildcard rules

Snakemake is a workflow management system written purely in Python. It is
designed to allow researchers to easily write Bioinformatics workflows (or
colloquilly called Pipelines). It uses a file-based dependency mechanism where
the status of next job would depend on the output produced by the previous job.

The clear advantages of using Snakemake are:

* Rules are easy to write; being in Python is a huge plus
* Supports cluster execution
* Active community, easy to obtain workflows

However, there are some active disadvantages as well. For example, being driven
by files results in a lot of time invested in "Job metadata" generation. Also,
modularization is not very useful and you might end up duplicating a lot of
helper functions from one Snakemake file to the other.

Depending on the complexity of the task, the disadvantages might outweight the
gains of using Snakemake. However, other alternatives are not very strong
either.

Prologue aside, Snakemake has a `wildcard` support. That is, you can specific
your input or output files using a wildcard such as `{}.fastq.gz`. It will then
match the equivalent pattern `(.+).fastq.gz` to match files in the target
directory. However, this gets tricky if you have two rules such as follows:

```
rule a:
  input:
    '{lib}__{read}.fastq.gz'

rule b:
  input:
    '{lib}.fastq.gz'

```

In the rule set above, the `rule b` is also going to match the set of input
files by `rule a` due to the generic regex rule and create issues. For this, the
Snakemake provides ways to constrain a wildcard.[1](https://snakemake.readthedocs.io/en/stable/snakefiles/rules.html#wildcards)

First,

```
output: "{dataset,\d+}.{group}.txt"
```

Second,

```
rule complex_conversion:
    input:
        "{dataset}/inputfile"
    output:
        "{dataset}/file.{group}.txt"
    wildcard_constraints:
        dataset="\d+"
    shell:
        "somecommand --group {wildcards.group}  < {input}  > {output}"
```

Finally,
```
wildcard_constraints:
    dataset="\d+"

rule a:
    ...

rule b:
    ...
```
