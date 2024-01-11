import random

while True:
    random_num = random.randint(1, 50)
    print(random_num)
    flag = True
    for i in range(1, 6):
        user_num = int(input("Enter your guessing number : "))
        if user_num == random_num:
            print("You Win.. !!!")
            flag = False
            break
        elif user_num > random_num and i != 5:
            print("Correct answer is smaller!  {} Chances left\n".format(5 - i))
        elif user_num < random_num and i != 5:
            print("Correct answer is greater!  {} Chances left\n".format(5 - i))

    if flag:
        print("You loose ... ")

    restart = input("\nPress r to restart or e for exit  ")

    if restart.lower() == "r":
        continue
    else:
        break
