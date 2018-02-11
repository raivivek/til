#! /usr/bin/env python

import sys, tempfile, os
from subprocess import call

EDITOR = os.environ.get('EDITOR', 'nvim')
TIL_PATH = '/home/vivekrai/src/til'


def make_note(_cat):
    initial_message = b'## '

    _cat = os.path.join(TIL_PATH, _cat)
    if not os.path.exists(_cat):
        print("Directory created.")
        os.mkdir(_cat)

    with tempfile.NamedTemporaryFile(suffix=".tmp") as tf:
        tf.write(initial_message)
        tf.flush()
        call([EDITOR, tf.name])

        # parse note
        tf.seek(0)
        note = tf.read()
        tf.seek(0)
        title = tf.readline().decode('utf8').strip('#').strip().lower()
        title = '-'.join(title.split(' ')) + '.md' # process title

        with open(os.path.join(_cat, title), 'ab+') as f:
            f.write(note)


def update_readme():
    # run this to auto-update README.md
    pass

if __name__ == '__main__':
    from sys import argv

    if len(argv) < 2:
        _cat = input("Category: ")
    else:
        _cat = argv[1]

    make_note(_cat)
