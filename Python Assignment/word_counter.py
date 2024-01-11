path = "./Assignment/input.txt"
lis =[]
with open(path,'r') as file:
    while True:
        line = file.readline()
        if not line:
            break
        lis.append(line.strip().lower())

search_words=["Python","Java","C++","Hello","oop"]

dict = {}
for i in search_words:
    dict[i.lower()]=0

for i in lis:
    if(dict.get(i) !=None):
        dict[i]+=1

for i in search_words:
    print("{} -> {}".format(i,dict[i.lower()]))




# 2nd approach : O(n2) complexity  

# for i in search_words:
#     cnt =0
#     for j in lis:
#         if i.lower()==j:
#             cnt+=1
#     print("{} -> {}".format(i,cnt))


