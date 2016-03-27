# Writing Conda Recipes

[Conda](http://conda.pydata.org/docs/) is a open source package management and
environment management system for installing and easy switching between
different versions of the softwares.

It works with other major platforms as well. I have been using it since long for
maintaining my Python versions (2 vs 3) and their packages. `pip` is also a tool
available for maintaining Python packages but the key difference is that `pip`
installs only Python packages but Conda is a generic framework and can be used
to install and maintain any software. ([Read
more](http://stackoverflow.com/questions/20994716/what-is-the-difference-between-pip-and-conda))

The way Conda works is similar to how `homebrew` for MaxOSX works. People write
build recipes for softwares which is then used by Conda to appropriately install
the package on user’s computer.

### `meta.yaml`

Creating a conda package is easy. The most important step to build a package is
to create a `meta.yaml` file which specifies how the package is going to be
build. In other words, what are the dependencies, URI of the file to be
downloaded and what environment should be used. 

The directory structure of a conda package looks like:

```
/
  - meta.yaml
  - build.sh
  - bld.bat
  - README
  - *.patch
```

An example `meta.yaml` file looks like:

```
package:
  name: sqlite
  version: 3.9.2

source:
  fn: sqlite-amalgamation-3090200.zip
  url: https://www.sqlite.org/2015/sqlite-amalgamation-3090200.zip
  sha256: 567139c94375e3808a11f34d81f534d0c257e2c498cddbf4cac283d74b51fe9c
  patches:
    - export_win.patch    [win]

build:
  features:
    - vc9     [win and py27]
    - vc10    [win and py34]
    - vc14    [win and py35]

requirements:
  build:
    # python is for lining up vc feature (runtime)
    - python       [win]

about:
  home: https://www.sqlite.org
  summary: "SQLite file-based database"
  license: Public Domain
```

The full specification of the `meta.yaml` file can be found in the conda
documentation. The `bld.bat` files are used to execute commands to build package
on Windows platform and similarly `build.sh` files are used on Linux platforms.
Often, a package you want to add to conda has a bug that is not fixed upstream
(or will take time), or a code change that makes some updates. For this, one may
also include `.patch` files. These files are simply `patches` that can be
exported using `git` (essentially a diff) and are automatically applied by conda
to the source of the package to be build.

Note that, you do not need to write all these files by yourself (although you
can!). Use `conda skeleton` command inside the source repository of the package
you want to build to create the necessary (and often sufficient) boilerplate
code for these files.

Once done, you can use `conda build <package>` to check whether you are able to
successfully build or package or missing any configuration. Based on my
experience, frequent errors are easily corrected by using the setting the right
`PATH` in `bld.bat` and `build.sh` files.

You can further customize the build of your package by specifying the versions
or platforms you specifically want to build or avoid for. See for example, the
`meta.yaml` for `sqlite` package shown above.

Going through the source of a couple of these recipes should give a fairly good
idea of the overall process. Good luck writing your own exotic recipes!
