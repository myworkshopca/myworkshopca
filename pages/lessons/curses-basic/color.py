# initialize the color pair
curses.start_color()
curses.use_default_colors()
# the constant curses.COLORS will store the maxium color id.
for i in range(0, curses.COLORS):
    # pair number, foreground color, background color
    curses.init_pair(i + 1, i, bg_color)

# use the color pair.
stdscr.addstr(0, 0, 'Try colors', curses.color_pair(1))
