# Curses in Basic

Learning the basic concepts and knowledage of the Python Curses module.

The curses library supplies a terminal-independent screen-painting and
keyboard-handling facility for text-based terminals.
Our text-based terminal game will built on top of curses library.
This lesson will provide the basic concepts and knowlege for curses library.

## Overview

In this lesson, we will learn the fundermental concepts of Python curses library.
At the end of the lesson, we will build the following games/programs:

* Greeting message at the center of the screen
* Keyboard decoding program
* Curses color palette
* The colorfull letter stars screensaver program

## Hello World and curses basic functions

We will start with a simple curses program: hello world.
It will demonstrate the basic code structure of a curses program:

* Import curses module
* Define the window function with stdscr parameter
* Invoke **curses.wrapper** function to wrap up the window function

The following code except shows the basic structure of a curses program

```python
# load the curses module.
import curses

def window(stdscr):
    # addstr method will paint the message on terminal
    stdscr.addstr('Hello World!')
    # getch() will hold the window and wait for user's input
    stdscr.getch()

# invoke the wrapper function
curses.wrapper(window)
```

Here are a list of functions from curses library:

* **stdscr.getmaxyx()**: return the size of the terminal screen,
  the height and width in **tuple** type.
* **stdscr.addstr(str)**: paint the given string from the current cursor's coordinates.
* **stdscr.addstr(y, x, str)**: paint the given string from the given coordinates.
* **stdscr.getch()**: will put the program on pause and then wait for user to
  hit a key on keyboard.
  It returns an integer between 0 and 255,
  which represents the ASCII code of the key pressed.

## Introduce the tuple type

Tuples are used to store multiple items in a single variable.
* A tuple is a collection which is ordered and unchangeable
* Tuples are written with round brackets

```python
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
```
