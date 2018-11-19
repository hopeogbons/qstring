# Qstring

Qstring is a query string deserializer that runs on Aether

### App Stack

- Docker 3
- PostgreSQL 10.5
- Python 3.7 & Django 2.1.2
- Django Rest Framework 3.8.2
- Bootstrap 4.0 (JQuery & Popper)
- React 16 (Redux & Thunk)

### Prerequisites

These instructions assume that you are a Dev,
Ops or DevOps person familiar with shell scripting,
github and docker.

- GitHub
    - `git` must be installed and available
- Docker
    - `docker-compose` installed setup with at least 3GB limit
- The following port(s) should be available on your machine: 8000

### Setup

First of all, you will need to register a domain for local resolution
on your computer, by editing your hosts file.
This is located at `/etc/hosts` on a `Mac` or `Linux` machine.
Modify the line that starts with `127.0.0.1` to look like this:

<pre>127.0.0.1      ui.qstring.local</pre>

Then `clone` this repository to your computer and enter the `qstring` root directory

<pre>
$ git clone git@github.com:hope-ogbons/qstring.git
$ cd qstring
</pre>

Now, all you just need to do, is tell Docker to build the
`images` and spin up the `containers`

<pre>$ docker-compose up --build</pre>

Great! It's good practice to run migrations manually, here's how:

<pre>$ docker-compose run web python3 manage.py migrate</pre>

And finally, we need to put you in charge of your copy of `Qstring` and call it a day!

<pre>$ docker-compose run web python3 manage.py createsuperuser --email admin@ehealthafrica.org --username admin</pre>

Enter the url below to access the application. Enjoy!
 
<pre>http://ui.qstring.local:8500</pre>