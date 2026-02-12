import random

DICE_SIDES = 6

def roll_dice(sides):
    dice_value = random.randint(1, sides)
    return dice_value

def main():
    is_rolling = True

    while is_rolling:
        user_choice = input("Ready to roll? Enter Q to Quit: ")
        if user_choice.lower() != "q":
            rolled_number = roll_dice(DICE_SIDES)
            print("You have rolled a", rolled_number)
        else:
            is_rolling = False

if __name__ == "__main__":
    main()