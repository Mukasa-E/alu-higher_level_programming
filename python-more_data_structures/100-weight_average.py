#!/usr/bin/python3
def weight_average(my_list=[]):
    if not my_list:  # Check if the list is empty
        return 0
    total_score = sum(score * weight for score, weight in my_list)  # Calculate weighted scores
    total_weight = sum(weight for _, weight in my_list)  # Calculate total weight
    return total_score / total_weight  # Return weighted average
