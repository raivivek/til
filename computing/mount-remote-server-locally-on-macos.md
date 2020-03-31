## Mount remote server locally on macOS

Using SSHFS to mount remote directories locally is quite useful. For instance, most of my
work is done on a dedicated cluster and because it is a headless access (X-forwarding is
very painful), it is often necessary to view results using native tools on my local
machine.

On macOS, you need `sshfs` and `osxfuse` for this to work properly. What it does is that
it creates a local directory (mount) that mirrors the content of the remote directory. The
underlying data transfer and update is done behind-the-scenes using the regular SSH
protocol.

For example, the command below will mount `/lab/data` from remote server (`example`) in
your home directory (`~/ssh_mnt`). So if you access `~/ssh_mnt`, you should see the
contents of `/lab/data` as if that directory exists on your machine.

```
sshfs ~/ssh_mnt user@example.com:/lab/data
```

However, doing this every time when you log in or connection resets is painful. Here's
what I did:

* Setup `synthetic.conf` -- this will allow me to mount remote directories at root level
  in macOS Catalina(or higher, I presume). Currently, you cannot create directories or
  mount any filesystem in `/`.

  ```
  lab	/System/Volumes/Data/example/lab
  home	/System/Volumes/Data/example/home
  ```

* Re-claimed `/home` -- `/home` did not contain anything so I used it to mount `/home` of
  my remote server. Not recommended if you are not comfortable. For this, I commented the
  line from `/etc/auto_master`.

  ```
  # /home	auto_home  # blah
  ```

* Create an `Automator` workflow to run `sshfs` command on login. For example:

  ```
  sudo sshfs -o reconnect,nodev,allow_other,noappledouble,defer_permissions,IdentityFile=<IDFILE>,port=<PORT>,volname=<NAME> USER@HOST:<path/to/mount>
  ```

  Please note that because this is run in background, (a) add `sshfs` to list of commands
  that can be run without `sudo`, (b) ensure the `IdentityFile` has no password, (c) port
  and host details are correct.
