# load the curses module.
import curses

def window(stdscr):

    stdscr.addstr('Hello World!')

    stdscr.getch()

# invoke the wrapper function
curses.wrapper(window)
