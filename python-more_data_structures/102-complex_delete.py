#!/usr/bin/python3
def complex_delete(a_dictionary, value):
    # Create a list of keys to delete from the dictionary
    keys_to_delete = [k for k, v in a_dictionary.items() if v == value]
    
    # Delete the keys from the original dictionary
    for k in keys_to_delete:
        del a_dictionary[k]
