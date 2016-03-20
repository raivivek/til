# Super considered super!

In an entertaining and very accessible talk by [Raymond
Hettinger](https://twitter.com/raymondh), he describes the design principles of
`super()` and how it can be used to implement multiple cooperative
inheritance (See the [blog
post](https://rhettinger.wordpress.com/2011/05/26/super-considered-super/) for
all the neat details!).

Additionally, you can also have a look at a great
[StackOverflow](http://stackoverflow.com/questions/3277367/how-does-pythons-super-work-with-multiple-inheritance)
answer and several posts written by Guido himself on [Method Resolution
Order](http://python-history.blogspot.com/2010/06/method-resolution-order.html)
(MRO) for rationale behind the design and other details.

In brief, the core ideas of the talk were:

1. `super()` complements the idea of reusing code and DRY principles using
   inheritance. 

2. multiple inheritance (especially Diamond) pattern *used* to be hard but not
   now, iff you understand how `super()` works.

3. Python’s `super()` is different than the super in other languages. In Python,
   it means *next-in-line* (the line here being Method Resolution Order - MRO)
   determined by stable, deterministic algorithm) and thus may not necessarily
   refer the parent.

4. `super()` can be used for **dependency injection**.

A couple of notes, however, when using `super()`:

* In Python 2, `super()` accepted arguments - the current item in MRO and the
    MRO tree of the original object. In Py3k, it is implicitly calculated.
* Use `kwargs` to deal issues with position arguments.
* Put a *stopper class* at the end of the chain call.
* In case a class in non-cooperative, just subclass it to create another that
    uses `super()`.

I hope that it will help me better understand large projects and code
organization. Not to mention, use it my own projects as well.
