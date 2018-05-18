#! /usr/bin/env python3

""" Create a today-i-learned note in the target repository.

Features:
    1. Opens a scratch window in your editor to create the note
    2. Provides command line options to specify categories
    3. Saves note at target TIL path (configured in `~/.config/til/til.conf`
"""

__author__ = 'vivekrai'

import os
import sys
import tempfile
from subprocess import call


EDITOR = os.environ.get('EDITOR', 'vim')


def create_til_config(config_path):
    """ Create a `~/.config/til/til.conf` config file with location to the
    appropriate today-i-learned directory.
    """

    config_path = os.path.expanduser(config_path)
    print(config_path)

    if not os.path.exists(config_path):
        til_path = input("Set TIL dir path: ")
        while not os.path.exists(til_path):
            til_path = input("Set TIL dir path: ")
        os.makedirs(os.path.dirname(config_path), exist_ok=True)
        with open(config_path, 'w') as f:
            f.write(til_path)

    with open(config_path, 'r') as f:
        til_path = f.read().strip()

    return til_path


def make_note(_cat, til_path):
    """ Create a today-i-learned note for a respective category. Create
    categories (and corresponding directories) if they do not exist.

    Args:

    _cat: str, category for the note
    til_path: str, file-path to today-i-learned directory
    """

    _cat_p = os.path.join(til_path, _cat)
    if not os.path.exists(_cat_p):
        print("Category created: til:{}/".format(_cat))
        os.mkdir(_cat_p)

    tf = tempfile.NamedTemporaryFile(suffix=".tmp", delete=False)

    tf.write(b'## ')
    tf.close()

    call([EDITOR, tf.name])

    # open file again to process title and note content
    tf = open(tf.name, 'r')
    title = tf.readline().decode('utf8').strip('#').strip().lower()
    title = '-'.join(title.split(' ')) + '.md'  # process title

    tf.seek(0)
    note = tf.read()

    with open(os.path.join(_cat_p, title), 'ab+') as f:
        f.write(note)

    tf.close()
    os.unlink(tf.name)


def update_readme():
    # run this to auto-update README.md
    pass


if __name__ == '__main__':
    from sys import argv
    import argparse

    parser = argparse.ArgumentParser()

    parser.add_argument('-t',
                        help='type or category of post (default: unclassified)',
                        default='unclassified')
    parser.add_argument('-c', '--config',
                        help='path to config file (default: ~/.config/til/til.conf)',
                        default='~/.config/til/til.conf')

    args = parser.parse_args()

    til_path = create_til_config(args.config)

    if args.t == 'misc':
        print("Category not set (use -t), saving to `misc`")

    make_note(args.t, til_path)
