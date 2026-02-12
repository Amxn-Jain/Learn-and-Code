import random

MIN_NUMBER = 1
MAX_NUMBER = 100

def is_valid_guess(guess):
    return guess.isdigit() and MIN_NUMBER <= int(guess) <= MAX_NUMBER

def main():
    secret_number = random.randint(MIN_NUMBER, MAX_NUMBER)
    is_guessed_correctly = False
    guess_count = 0
    user_guess = input(f"Guess a number between {MIN_NUMBER} and {MAX_NUMBER}: ")

    while not is_guessed_correctly:
        if not is_valid_guess(user_guess):
            user_guess = input(f"I wont count this one Please enter a number between {MIN_NUMBER} to {MAX_NUMBER}: ")
            continue
        guess_count += 1
        user_guess = int(user_guess)

        if user_guess < secret_number:
            user_guess = input("Too low. Guess again: ")
        elif user_guess > secret_number:
            user_guess = input("Too High. Guess again: ")
        else:
            print("You guessed it in", guess_count, "guesses!")
            is_guessed_correctly = True

if __name__ == "__main__":
    main()