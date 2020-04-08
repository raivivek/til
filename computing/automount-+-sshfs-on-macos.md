## Automount + SSHFS on macOS

This is a part 2 of the previous til on mounting remote servers locally on macOS using
SSHFS and osxfuse.

In the previous TIL, I used an Automator workflow to initiate the process of mounting the
remote server. Originally, I wanted to use `automount` to do it more smoothly but wasn't
able to get it to work.

However, I finally had a breakthrough based on careful re-reading of all the help I came
across and the StackOverflow question I posted for more help[1]. The key component that I was
missing was _enabling the kernel extension_ for osxfuse.

So, if you wish to mount a remote server locally with a little bit more magic, here are
the steps:
1. Install SSHFS + osxfuse
1. Disable SIP
1. (Optional, if you need `/` mount points) Update `synthetic.conf`
1. Symlink `sshfs` to `/sbin/mount_sshfs`
1. Create `auto_XXX` with commands that will mount the remote server
1. Update `auto_master`
1. Install the osxfuse kernel extension
1. Reboot and Profit!

----
### Update
This works well except for multiple issues that make it unusable. On my Mac, the finder
will freeze or become unresponsive when the SSH connection is interrupted or dropped. This
was quite annoying and several folks have opened an issue about this. Perhaps, best to
wait for more updated versions of OSXFUSE to come out.

For now, the Automator workflow is an excellent choice.

[1]: https://stackoverflow.com/questions/60860671/automount-w-sshfs-on-macos-catalina
