# SOAP-vs-REST stack

REST (Representational state transfer) and SOAP (Simple Object Access Protocol)
are two ways of designing software architecture on internet. There might be
more, but today I learned that until a decade ago, almost all internet giants
used SOAP. While today, REST is the answer to almost everything.

But what’s the difference? In simple terms[1], you access a resource (data) in
a REST operation and perform an operation in SOAP operation.

For example,

```
# REST
getUser(User);

# SOAP
switchCategory(User, OldCategory, NewCategory)
```

I highly recommend this StackOverflow answer[2] for better (and correct) insight. 

[1]: http://spf13.com/post/soap-vs-rest

[2]: http://stackoverflow.com/questions/19884295/soap-vs-rest-differences
