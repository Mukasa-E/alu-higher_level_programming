#!/usr/bin/python3


def remove_char_at(str, n):
    """Remove character at the specified index n in the string."""
    if n < 0 or n >= len(str):
        return str
    return str[:n] + str[n + 1:]

