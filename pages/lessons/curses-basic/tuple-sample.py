# define a tuple, using round brackets
fruit = ("banana", "apple", "orange")

# access a tuple using index id.
print( fruit[1] )
# apple

# unpacking a tuple:
# Items in a tuple are order. So the sequence is sensitive.
(banana, apple, orange) = fruit
# the round brackets are not mandatory,
# the following will do the same.
banana, apple, orange = fruit

print(banana)
# banana

