## knitr: Put code as appendix

Interactive notebooks such as RMarkdown or Jupyter-notebooks are an excellent
way to perform exploratory data-analysis. Not only you can keep all the code
together but also write annotations and notes in Markdown project --- all of
which together serves like a summary document. I have had great success using them
not only for research for also for doing homeworks.

One of my current classes, however, had a very specific requirement: all the
accompanying code should appear at the end of the document. Generally, the
analysis in the notebooks is done in "inline" style, where you write code and
see the results in the same place.

However, I found a great trick in `knitr` to put all the code at the end.

  # Header
  Bla bla ...
  ```{r plot1,echo=FALSE}
  x = rnorm(100,10,5)
  y = rnorm(100,10,5)
  plot(x,y)
  ````
  
  # Appendix
  
  Code chunk:
  ```{r ref.label="plot1",eval=FALSE}
  ```

Neat! Altough, it will be great if there was a single configuration that does
all of that automagically. Perhaps, I need to look at the source code of
`knitr`... 

Happy hacking!
