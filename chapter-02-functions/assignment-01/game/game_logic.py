import random
from .validator import is_valid_guess, MIN_NUMBER, MAX_NUMBER

class NumberGuessingGame:
    def __init__(self):
        self.secret_number = random.randint(MIN_NUMBER, MAX_NUMBER)
        self.guess_count = 0

    def start_game(self):
        is_guessed_correctly = False
        user_guess = input(f"Guess a number between {MIN_NUMBER} and {MAX_NUMBER}: ")

        while not is_guessed_correctly:
            if not is_valid_guess(user_guess):
                user_guess = input(f"I won\'t count this. Enter a number between {MIN_NUMBER} and {MAX_NUMBER}: ")
                continue

            self.guess_count += 1
            user_guess = int(user_guess)

            if user_guess < self.secret_number:
                user_guess = input("Too low. Guess again: ")
            elif user_guess > self.secret_number:
                user_guess = input("Too high. Guess again: ")
            else:
                print(f"You guessed it in {self.guess_count} guesses!")
                is_guessed_correctly = True