bangla = int(input("Enter the obtain marks of bangla : "))
english = int(input("Enter the obtain marks of english : "))
math = int(input("Enter the obtain marks of math : "))
science = int(input("Enter the obtain marks of science : "))

average = int((bangla+english+math+science)/4)
print("Your Average marks is {}\n".format(average))

if average>=91 and average<=100:
    print("You have got A+")
elif average>=81 and average<=90:
    print("You have got A")
elif average>=71 and average<=80:
    print("You have got B")
elif average>=61 and average<=70:
    print("You have got C")
elif average>=41 and average<=60:
    print("You have got D")
else:
    print("You have got F ")