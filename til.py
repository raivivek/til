#! /usr/bin/env python

import sys, tempfile, os
from subprocess import call


EDITOR = os.environ.get('EDITOR', 'nvim')
CONFIG_PATH = os.path.expanduser('~/.config/til/til.conf')


def create_til_config():
    """ Create a `~/.config/til/til.conf` config file with location to the
    appropriate today-i-learned directory.
    """

    if not os.path.exists(CONFIG_PATH):
        til_path = input("Set TIL dir path: ")
        while not os.path.exists(til_path):
            til_path = input("Set TIL dir path: ")
        os.makedirs(os.path.dirname(CONFIG_PATH), exist_ok = True)
        with open(CONFIG_PATH, 'w') as f:
            f.write(til_path)

    with open(CONFIG_PATH, 'r') as f:
        til_path = f.read()

    print(til_path)
    return til_path



def make_note(_cat, til_path):
    """ Create a today-i-learned note for a respective category. Create
    categories (and corresponding directories) if they do not exist.

    Args:

    _cat: str, category for the note
    til_path: str, file-path to today-i-learned directory
    """

    initial_message = b'## '

    _cat_p = os.path.join(til_path, _cat)
    if not os.path.exists(_cat_p):
        print("Category created: til:{}/".format(_cat))
        os.mkdir(_cat_p)

    with tempfile.NamedTemporaryFile(suffix=".tmp") as tf:
        tf.write(initial_message)
        tf.flush()
        call([EDITOR, tf.name])

        # parse note
        # TODO: investigate error on macos
        tf.seek(0)
        note = tf.read()
        tf.seek(0)
        title = tf.readline().decode('utf8').strip('#').strip().lower()
        title = '-'.join(title.split(' ')) + '.md' # process title

        print(title)

        with open(os.path.join(_cat_p, title), 'ab+') as f:
            f.write(note)


def update_readme():
    # run this to auto-update README.md
    pass

if __name__ == '__main__':
    from sys import argv

    til_path = create_til_config()

    if len(argv) < 2:
        _cat = input("Category: ")
    else:
        _cat = argv[1]

    make_note(_cat, til_path)
