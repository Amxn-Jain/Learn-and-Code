MIN_NUMBER = 1
MAX_NUMBER = 100

def is_valid_guess(guess: str) -> bool:
    return guess.isdigit() and MIN_NUMBER <= int(guess) <= MAX_NUMBER