# Editing remote files

It’s a common scenario to edit a script on a remote server (mostly with access
to better resources) before running it. The workflow can be pretty tedious if
one isn’t aware of the right tools. For example, you might be editing files
locally and then copying them over to server. This is terribly inefficient.

A few ways to improve the process:

* Use **sshfs**: Mount the remote directory locally on your file system and then
    edit the file as if it was present on your disk. It might be a bit
    problematic to setup if you don’t have admin access to the machine.

* Use *vim* (or any editor that supports it): In vim, you can directly open
    a local copy of the remote file and make changes to it. All the updates are
    synced to the file on server.

    For example,

    ```
    :e rsync://<server>/path_to_file
    ```

    This is even more useful if your local setup of vim is nicely configured but
    editing directly on server is troublesome.
