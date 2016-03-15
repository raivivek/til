# ORMs and Database migration

According to ActiveRecord docs, one of the widely used ORMs in Ruby on Rails
setup:

> Object-Relational Mapping, commonly referred to as its abbreviation ORM, is
> a technique that connects the rich objects of an application to tables in
> a relational database management system. Using ORM, the properties and
> relationships of the objects in an application can be easily stored and
> retrieved from a database without writing SQL statements directly and with
> less overall database access code.

Essentially, one you have more than a handful of SQL statements to write, things
can go out of control pretty easily especially if you are not already
experienced with database management. ORMs simplify this task by providing
a high-level abstraction with little addition of new syntax, improve code
readability, prevent bugs and allow you to focus on designing model and complex
queries. Everything else is dealt under the hood. And in worse case if you
happen to execute raw SQL queries, you are more than welcome!

An example of such ORM for Python is
[SQLAlchemy](http://docs.sqlalchemy.org/en/latest/orm/tutorial.html).

A similar level of convenience is provided by database migration tools. As
a project evolves, the database may undergo frequent modifications. It could be
challenging to manually keep track of database alternation, migrate data,
especially if you do not want to risk losing valuable information. These
migration tools work similar to git. They record snapshots of database changes
(you write using high-level syntax as to how your database has changed) and then
translate them to low-level raw SQL queries. This revision management allows you
to upgrade and downgrade between different versions of your database with ease. 

An example of such migration tools is
[Alembic](http://alembic.readthedocs.org/en/latest/tutorial.html).

