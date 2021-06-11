# load the curses module.
import curses

def window(stdscr):
    # addstr method will paint the message on terminal
    stdscr.addstr('Hello World!')
    # getch() will hold the window and wait for user's input
    stdscr.getch()

# invoke the wrapper function
curses.wrapper(window)
