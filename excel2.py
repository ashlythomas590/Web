import csv
filename=input("Enter the csv file name:")
colread=input("Enter column indicies to read :")
colread=[int(x.strip())for x in colread.split(",")]
with open(filename,'r')as csvfile1:
    csvreader=csv.reader(csvfile1)
    for row in csvreader:
        selectcol = [row[col] for col in colread if col < len(row)]
        print(selectcol)
