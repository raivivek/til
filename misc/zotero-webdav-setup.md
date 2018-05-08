## Using Zotero with WebDAV for file storage

I use Zotero as my primary bibliography manager. It is an open-source, freely
available program (compared to its alternatives such as Mendeley, Endnote) but
works equally well.

Using Zotero with online plugin allows you to save any journal paper or link to
your offline library *with the full-text PDF*. It also detects and works
through proxy-redirection of your institution to provide access when accessing
from outside. Further, you can access your library at any device by syncing
your library to Zotero online file storage.

However, the online Zotero file storage only provides 300 MB of storage, which
is not hard to useup. There are many [alternative ways to setup
file-storage](https://www.zotero.org/support/sync) syncing with non-Zotero
servers or services, and I found one that works quite well.

### Using Box as Zotero file-sync storage

[Box](https://www.box.com) is an cloud-storage service just like Dropbox or
Google-Drive. They are popular and well-trusted service providers. But the good
part is, they offer a 10GB of free storage as well as [WebDAV](https://en.wikipedia.org/wiki/WebDAV) support for [use with Zotero](https://www.zotero.org/support/kb/webdav_services).

WebDAV support allows Zotero to directly use the Box-account as its
file-storage. In this way, you can not only sync and have your files available
at all your devices, but also not have to worry about 300 MB limit.

Once you have your WebDAV account info, enter the URL provided by the service,
your username, and your password in the Sync preferences tab. Be sure to select
'http' or 'https' as appropriate — if you're not sure, try 'https' first. After
entering the information, click “Verify Server”. If Zotero successfully
verifies the WebDAV account, you're all set to use file syncing via WebDAV. 
