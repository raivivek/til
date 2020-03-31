## Email forwarding for your domain

My [blog](https://raivivek.in) (shorts) is currently hosted on a custom domain
`raivivek.in`. Because I have this domain, I'd like to be able to get emails sent to
`hello@raivivek.in` for example. This has the advantage that I can have unlimited email
aliases and separate inboxes depending on which email I use for what purpose.

For instance, using `marketing-` for all promotional and marketing emails.

However, just owning the domain is not enough. You have to setup a service which will
receive emails at the address. There are many ways to do it. You can purchase an account
at one of the many email hosting providers (hey ProtonMail!) which will give you an inbox and let you
receive emails sent to custom domain. Because such services are generally not free,
I chose to forward those emails to my Gmail account. And of course, you'd also like to be
able to send emails from your custom domain address.

Previously I was using [mailgun](https://mailgun.org) which provided such services and a free
tier that was sufficient for me. After they changed their plans, I searched for different
options and two free options that looked best were: [ImprovMX](https://improvmx.com) and
[ForwardMail](https://forwardemail.net/en).

Both services offer free forwarding services. Setting up them is easy as well. Create
a free account and add the corresponding `MX` and `TXT` records in your DNS settings. I use Cloudflare
to manage DNS so that was quite painless.

Happy hacking!
