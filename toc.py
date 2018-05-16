#! /usr/bin/env python3

""" Reads the files in current directory and creates a table-of-contents output
to be included in the README.md. """

import os
import argparse
import sys
from collections import defaultdict


__ignore = ['./.git', '.pyc', '._DS_Store']


def scan_files(path):
    tree = defaultdict(list)
    for root, dirs, files in os.walk(path):
        if root in __ignore: # ignore blacklist
            dirs[:], files[:] = [], []
        elif root == '.': # skip root
            continue
        else:
            tree[root] = files
    return tree

def get_title(filepath):
    print(filepath)
    with open(filepath, 'r') as f:
        title = f.readline()
    return title.strip('#').strip()

def prepare_entry(root):
    files = scan_files(root)
    print(files)
    for k, v in files.items():
        # v is a list; get the title for each file
        #title = get_title(os.path.join(k, v))
        #print(title)
        pass


if __name__ == '__main__':
    #out = scan_files('.')
    prepare_entry('.')
    print(get_title(os.path.join('.', 'unix', 'fork-to-bg.md')))
