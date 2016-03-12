# HMMER

HMMER is a widely used sequence search software similar to BLAST, used specially
for searching DNA and protein databases for homologs

The stronger point of HMMER is that it takes the alignment of a couple of
sequences as a input and constructs a position-specific-scoring-matrix (PSSM)
based *profil* of the input alignment (or query sequence). These profiles are
actually probabilistic *profile hidden markov models*.

The profile is then further used to search the databases and create alignments.

Other similar software are SAM Tools, PSI-BLAST.

HMMER suite actually contains a number of small standalone program that are used
to implement he entire functionality.

A quick read tutorial can be [found here](http://www.csb.yale.edu/userguides/seq/hmmer/docs/main-expanded.html).
