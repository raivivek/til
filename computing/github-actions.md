## GitHub actions

[GitHub actions](https://github.com/features/actions) is relatively new feature that
brings CI-CD abilities and many other things (run server-side scripts) natively to GitHub.
For example, you can setup a workflow (or action) to automatically deploy your blog or run
tests and so on.

One quick GitHub action is to auto-generate a few files. For instance, I decided to
auto-generate the README.md for the today-i-learned directory and instead of doing it
manually, GitHub actions seemed like a good fit.

You can see the configuration file [here](.github/workflows/main.yml). Currently it is
configured to auto-generate the README and committ it to the repository using
`auto-commit` action. Actions are essentially workflows and there are many pre-written
ones by the community. So instead of writing your own, just grab one available from the
[marketplace] and configure it as per your need.


```
name: CI

on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2

    - name: Generate README
      run: python3 $GITHUB_WORKSPACE/toc -r $GITHUB_WORKSPACE > README.md

    - name: Git Auto Commit
      uses: stefanzweifel/git-auto-commit-action@v4.1.1
      with:
        commit_message: '[gh-workflow] Update README'
        commit_options: '--no-verify'
        file_pattern: README.md
```


1. [awesome-actions](https://github.com/sdras/awesome-actions)
2. [GitHub Actions](https://github.com/features/actions)


