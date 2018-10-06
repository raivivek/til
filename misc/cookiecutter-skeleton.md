## Using `cookiecutter` to generate project skeleton

When developing projects based on a frequent theme or use case, say a Python
package or a research analysis directory for an experiment for example, you want
to be consistent with the organization of files and folders. There are several
benefits:

* Consistent structure allows for faster lookups with fewer head-scratches
* Consistent structure allows for reproducible and shareable content

Both the advantages are highly desirable to have. Previously, I'd write my own
script to generate and setup a directory structure, but recently, I discovered
a Python package called
[Cookiecutter](https://cookiecutter.readthedocs.io/en/latest/readme.html) that provides an enhanced mechanism to
generate project skeletons. It uses Jinja2 templating.

Using _cookiecutter_, for example, I wrote a Snakemake skeleton that can be
quickly setup for use.

```
cookiecutter https://github.com/raivivek/snakemake-cookiecutter
```

The command above will use the project template from the Github repository and
using specific project relevant details supplied by you during the process,
setup a skeleton directory.

There are lots of useful [Cookiecutter
templates](https://cookiecutter.readthedocs.io/en/latest/readme.html#a-pantry-full-of-cookiecutters)!

I wish to adapt a few ones for my personal use --- specifically, the
`reproducible-data-science` cookie.

Happy hacking!
