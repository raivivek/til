## Snakemake on HPC

Snakemake is a workflow management system. When working with tasks or pipelines
that execute thousands of tasks in a sequence or move and create thousands of
files during the sequence run of a task, it becomes necessary to use a software
that manages necessary task dependencies and executes them in an automatic
fashion. These tools provide useful diagnostic feedback, and most importantly,
allow you to specify specific run conditions on high-performance clusters or HPCs.

Most of the intensive or long-running tasks are almost always done on dedicated
clusters. These machines typically have several "nodes", each with as many as
hundred CPUs, Gigabytes of RAM, and Terabytes of storage capacity. Such systems
are not only common but necessary for anyone working in Genomics.

A related tool, but entirely different, is a "workload manager". The HPCs will
invariably have a form of workload manager that runs tasks in an orderly manner
and ensures system stability by limiting memory or CPU consumption (beware of
those rogue or ill written programs that hog everyone down!).

Snakemake works as a standalone workflow manager, _but_ can submit jobs to a HPC
as well.

During my research rotation, I used Snakeamake to write a ATAC-seq analysis
pipeline. It runs beautifully and allows you to neatly your project. Eventually,
I was reusing the parts of one workflow in another so much that, use of
a template became necessary.

[Snakemake-template](https://github.com/raivivek/snakemake-template)

### Template

├── cluster.yaml
├── config.yaml
├── run_cluster.sh
└── Snakefile

`config.yaml`: Specifies configuration and filepath etc.
`cluster.yaml`: Specifies how the jobs should be submitted to SLURM.
`run_cluster.sh`: Run this!
`Snakefile`: Tasks organization.
