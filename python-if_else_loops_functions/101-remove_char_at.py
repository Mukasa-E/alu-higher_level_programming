#!/usr/bin/python3

def remove_char_at(str, n):
    # If n is negative or out of range, return the original string
    if n < 0 or n >= len(str):
        return str
    # Return the string excluding the character at index n
    return str[:n] + str[n + 1:]
