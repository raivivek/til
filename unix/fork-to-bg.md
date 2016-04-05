# Fork a command to background

Often you require a command to run in the background, independent of your shell
login status so that the lengthy process can be carried our while you are
working out something else.

The
[stackoverflow](http://unix.stackexchange.com/questions/28809/how-to-totally-fork-a-shell-command-that-is-using-redirection)
answer has several suggestions.

1. Create a subshell with `(..)`
2. Use `setsid(1)`
3. Use `disown` builtin command

On a side note, use `jobs` to find out running jobs in the background.
